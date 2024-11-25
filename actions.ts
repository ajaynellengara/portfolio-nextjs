"use server";

import 'server-only';
import { Resend } from "resend";

// Initialize the Resend client with your API key
const resend = new Resend(process.env.RESEND_API_KEY); // It's safer to store API keys in env variables

export type actionResponse = {
  msg: string;
};

export async function sendResendMail(
  senderName: string,
  reason: string,
  contact: string,
): Promise<actionResponse> {
  // Check if the reason message is long enough (6 words minimum)
  const wordCount = reason.split(" ").length;
  if (wordCount < 6) {
    console.error("Too short message!");
    return { msg: "Too short message!" };
  }

  try {
    // Send the email using Resend API
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Your 'from' email address
      to: 'ajayndesigner@gmail.com', // Recipient email address
      subject: `Portfolio inquiry | ${senderName}`,
      text: `${reason}\n\nInfo: ${contact}`, // Message body
    });

    // Check if there was an error from the Resend API
    if (error) {
      console.error('Error sending email:', error);
      return { msg: "Something went wrong ❌" };
    }

    // Return success message if no errors occurred
    return { msg: "Email sent ✅" };

  } catch (err) {
    // Catch any errors from the async function
    console.error('Unexpected error:', err);
    return { msg: "Something went wrong ❌" };
  }
}
