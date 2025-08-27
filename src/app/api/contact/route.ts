// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    // Parse the incoming JSON
    const { full_name, email, phone_number, message } = await req.json();

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465, // SSL port
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // Gmail App Password
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.TO_EMAIL, // recipient
      subject: `New message from ${full_name}`,
      text: `From: ${full_name} <${email}> <${phone_number}>\n\n${message}`,
      html: `
        <p><b>Full Name:</b> ${full_name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone Number:</b> ${phone_number}</p>
        <p><b>Message:</b></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
      replyTo: email,
    });

    // Return success response
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
