"use server";
import nodemailer from "nodemailer";
export async function sendMail({ name, subject, body, number }) {
  const { SMTP_PASSWORD, SMTP_EMAIL } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      password: SMTP_PASSWORD,
    },
  });

  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.log(error);
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to: "samueladetunji000@gmail.com",
      subject,
      text: `${name} with ${number} send this message -${body}`,
    });
    console.log(sendResult);
  } catch (err) {
    console.log(err);
  }
}
