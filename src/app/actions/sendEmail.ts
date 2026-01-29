"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

// Internal error codes for debugging (never exposed fully to users)
const ERR = {
  VALIDATION: "E100",
  SMTP: "E300",
  UNKNOWN: "E999",
};

export interface ISendEmailResult {
  success: boolean | null;
  error: string; // user-friendly error message
  code?: string; // internal error code for YOU
}

const schema = z.object({
  name: z.string().min(2, "nameInvalid"),
  email: z.email("emailInvalid"),
  message: z.string().min(10, "messageInvalid"),
});

/**
 * Sends email using standard SMTP (e.g., Namecheap Private Email).
 * Isolated so errors NEVER crash your app.
 */
export async function sendEmail(
  _prev: ISendEmailResult,
  formData: FormData
): Promise<ISendEmailResult> {
  try {
    // ---------------------------------------
    // 1. Validate input
    // ---------------------------------------
    const raw = Object.fromEntries(formData);
    const parsed = schema.safeParse(raw);

    if (!parsed.success) {
      const tree = z.treeifyError(parsed.error);

      for (const [field, detail] of Object.entries(tree.properties ?? {})) {
        if (field && detail.errors.length > 0) {
          return { success: false, error: detail.errors[0], code: ERR.VALIDATION };
        }
      }

      return { success: false, error: "" };
    }

    const { name, email, message } = parsed.data;

    // ---------------------------------------
    // 2. Create transporter with SMTP settings
    // ---------------------------------------
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // ---------------------------------------
    // 3. Prepare mail
    // ---------------------------------------
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `Portfolio: New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // ---------------------------------------
    // 4. Send email with safety guard
    // ---------------------------------------
    try {
      await transporter.sendMail(mailOptions);
      return { success: true, error: "" };
    } catch (err) {
      console.error("SMTP error:", err);
      return {
        success: false,
        error: "Unable to send email at the moment.",
        code: ERR.SMTP,
      };
    }
  } catch (err) {
    // Safety fallback – app NEVER crashes.
    console.error("Unexpected sendEmail error:", err);
    return {
      success: false,
      error: "Unexpected error. Please try again.",
      code: ERR.UNKNOWN,
    };
  }
}
