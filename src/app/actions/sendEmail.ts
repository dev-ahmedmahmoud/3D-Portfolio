"use server";

import nodemailer from "nodemailer";
import { google } from "googleapis";
import { z } from "zod";

// Internal error codes for debugging (never exposed fully to users)
const ERR = {
  VALIDATION: "E100",
  OAUTH: "E200",
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
 * Sends email using Gmail OAuth2.
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
    // 2. Initialize OAuth2 client
    // ---------------------------------------
    const oAuth2Client = new google.auth.OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      process.env.REDIRECT_URI // your app route, not playground
    );

    oAuth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN,
    });

    let accessToken: string | null = null;

    try {
      const resp = await oAuth2Client.getAccessToken();
      accessToken = resp?.token ?? null;
    } catch (err) {
      console.error("OAuth2 error:", err);
      return {
        success: false,
        error: "Email service temporarily unavailable.",
        code: ERR.OAUTH,
      };
    }

    if (!accessToken) {
      return {
        success: false,
        error: "Email service error. Please try again later.",
        code: ERR.OAUTH,
      };
    }

    // ---------------------------------------
    // 3. Create transporter
    // ---------------------------------------
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    // ---------------------------------------
    // 4. Prepare mail
    // ---------------------------------------
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: "New message from your portfolio",
      text: message,
    };

    // ---------------------------------------
    // 5. Send email with safety guard
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
