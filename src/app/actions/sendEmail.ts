"use server";

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

  // Call EmailJS REST API securely
  const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_PUBLIC_KEY,
      accessToken: process.env.EMAILJS_PRIVATE_KEY, // keep this secret
      template_params: { name, email, message },
    }),
  });

  if (!res.ok) {
    return { success: false, errors: { general: ["Failed to send email"] } };
  }

  return { success: true };
}
