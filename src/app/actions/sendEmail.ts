"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.email("Invalid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function sendEmail(formData: FormData) {
  const raw = Object.fromEntries(formData);
  const parsed = schema.safeParse(raw);

  if (!parsed.success) {
    const tree = z.treeifyError(parsed.error);

    const errors: Record<string, string> = {};
    for (const [field, detail] of Object.entries(tree.properties ?? {})) {
      if (detail.errors.length > 0) {
        errors[field] = detail.errors[0];
      }
    }

    return { success: false, errors };
  }

  const { name, email, message } = parsed.data;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL_USER,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: process.env.ACCESS_TOKEN,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_USER!,
    subject: "New message from your portfolio",
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Email error:", error);
    return { success: false, error };
  }
}
