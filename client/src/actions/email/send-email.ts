/*
File: send-emails.ts
Description: Sending Emails using Resend API.
*/

"use server";

import { Resend } from "resend";

import { emailTemplate } from "@/actions/email/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(
  email: string,
  subject: string,
  content: string
) {
  const emailContent = emailTemplate.replace("{content}", content);

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: subject,
    html: emailContent,
  });
}
