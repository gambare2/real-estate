import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, phone, email } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Website Enquiry" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER, // your email
    subject: "New Property Enquiry",
    html: `
      <h3>New Enquiry Received</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Email:</b> ${email}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
