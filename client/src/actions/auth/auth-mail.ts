/*
File: auth-mail.ts
Description: Send authentication mails.
*/

import { sendEmail } from "@/actions/email/send-email";

// Verify Email
export async function sendVerificationEmail(email: string, token: string) {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;
  const content = `<p>Click <a href="${confirmLink}">here to confirm your email</a></p>`;
  await sendEmail(email, "Confirm your email", content);
}

// Reset Password Email
export async function sendPasswordResetEmail(email: string, token: string) {
  const resetLink = `http://localhost:3000/auth/new-password?token=${token}`;
  const content = `<p>Click <a href="${resetLink}">here to reset your password</a></p>`;
  await sendEmail(email, "Reset your password", content);
}

// 2FA Email
export async function sendTwoFactorEmail(email: string, token: string) {
  const content = `<p>Your 2FA code is: ${token}</p>`;
  await sendEmail(email, "Your 2FA code", content);
}
