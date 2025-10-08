"use server";

import nodemailer from "nodemailer";
import { google } from "googleapis";
import { z } from "zod";

export interface ISendEmailResult {
  success: boolean | null;
  error: string;
}

const schema = z.object({
  name: z.string().min(2, "nameInvalid"),
  email: z.email("emailInvalid"),
  message: z.string().min(10, "messageInvalid"),
});

export async function sendEmail(
  _prevState: ISendEmailResult,
  formData: FormData
): Promise<ISendEmailResult> {
  const raw = Object.fromEntries(formData);
  const parsed = schema.safeParse(raw);

  if (!parsed.success) {
    const tree = z.treeifyError(parsed.error);

    for (const [field, detail] of Object.entries(tree.properties ?? {})) {
      if (field && detail.errors.length > 0) {
        return { success: false, error: detail.errors[0] };;
      }
    }

    return { success: false, error: "" };
  }
  const { name, email, message } = parsed.data;

  const oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground" // redirect URI
  );

  oAuth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  });

  const accessToken = await oAuth2Client.getAccessToken();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL_USER,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: accessToken?.token ?? "",
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
    return { success: true, error: "" };
  } catch (error) {
    console.error("Email error:", error);
    const message =
      error instanceof Error ? error.message : "Failed to send email.";
    return { success: false, error: message };
  }
}
