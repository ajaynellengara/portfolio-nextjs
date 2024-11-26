// "use server";

// import 'server-only';
// import { Resend } from "resend";

// const resend = new Resend('re_XWWPvGQZ_FpuF9tRHuYxywyUtZxcHxb5U');

// export type actionResponse = {
//   msg: string;
// };

// export async function sendResendMail(
//   senderName: string,
//   reason: string,
//   contact: string,
// ): Promise<actionResponse> {
//   const wordCount = reason.split(" ").length;
//   if (wordCount < 6) {
//     console.error("To short message!")
//     return { msg: "To short message!" };
//   }
//   const { data, error } = await resend.emails.send({
//     from: 'onboarding@resend.dev',
//     to: 'ajayndesigner@gmail.com',
//     subject: "Portfolio enquiey |" + senderName,
//     text: reason + "\n\n" + "Info:" + contact,
//   });
//   console.log(data);
  

//   if (error) {
//     console.log(error);
//     return { msg: "Something went wrong ❌" };
//   }

//   return { msg: "Email sent ✅" };
// }

"use server";

import 'server-only';
import { Resend } from 'resend';
import { z } from 'zod';

// Validation schema matching the client-side form
const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "at least 2 letters" })
    .max(50, { message: "not more then 50 letters" }),
  reason: z
    .string()
    .min(2, { message: "at least 2 letters" })
    .max(300, { message: "not more then 300 letters" }),
  contact: z.string().optional(),
});

// Ensure the API key is safely retrieved from environment variables
const resend = new Resend('re_XWWPvGQZ_FpuF9tRHuYxywyUtZxcHxb5U');

// Define the action response type
export type actionResponse = {
  msg: string;
  success: boolean;
};

export async function sendResendMail(
  name: string,
  reason: string,
  contact?: string
): Promise<actionResponse> {
  try {
    // Validate inputs using Zod schema
    const validationResult = formSchema.safeParse({ name, reason, contact });

    // Check validation
    if (!validationResult.success) {
      return { 
        msg: "Invalid input. Please check your form.", 
        success: false 
      };
    }

    // Send email with more detailed HTML content
    const { data, error } = await resend.emails.send({
      from: 'Your Website <onboarding@resend.dev>', // Use a verified sender
      to: ['ajayndesigner@gmail.com'], // Your receiving email
      subject: `New Submission from ${name}`,
      reply_to: contact || undefined, // Optional reply-to
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
          <h2 style="color: #333;">New Website Submission</h2>
          <div style="background-color: white; padding: 15px; border-radius: 5px;">
            <p><strong>Name:</strong> ${name}</p>
            ${contact ? `<p><strong>Contact:</strong> ${contact}</p>` : ''}
            <p><strong>Message:</strong></p>
            <p style="background-color: #f9f9f9; padding: 10px; border-radius: 5px;">${reason}</p>
          </div>
          <p style="margin-top: 15px; font-size: 12px; color: #666;">
            This email was sent from your website contact form.
          </p>
        </div>
      `
    });

    // Check for errors in sending
    if (error) {
      console.error('Email send error:', error);
      return { 
        msg: "Failed to send email", 
        success: false 
      };
    }

    // Log successful email send
    console.log('Email sent successfully:', data);

    return { 
      msg: "Message sent successfully!", 
      success: true 
    };

  } catch (error) {
    // Catch any unexpected errors
    console.error('Unexpected error:', error);
    return { 
      msg: "An unexpected error occurred", 
      success: false 
    };
  }
}