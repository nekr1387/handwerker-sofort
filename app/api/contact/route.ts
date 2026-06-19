import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
  message?: string;
  privacy?: boolean;
};

type CleanContactPayload = {
  name: string;
  phone: string;
  email: string;
  address: string;
  message: string;
};

function logContact(message: string, details?: Record<string, unknown>) {
  console.log(`[contact-api] ${message}`, details || "");
}

function logContactError(message: string, error: unknown) {
  console.error(
    `[contact-api] ${message}`,
    error instanceof Error
      ? {
          name: error.name,
          message: error.message,
          stack: error.stack,
        }
      : error
  );
}

function sanitize(value: unknown) {
  return String(value || "").trim();
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function createEmailText(payload: CleanContactPayload) {
  return [
    "Neue Anfrage über Handwerker Sofort",
    "",
    `Name: ${payload.name}`,
    `Telefonnummer: ${payload.phone}`,
    `E-Mail: ${payload.email}`,
    `Adresse: ${payload.address || "Nicht angegeben"}`,
    "",
    "Beschreibung der Aufgabe:",
    payload.message,
  ].join("\n");
}

function createEmailHtml(payload: CleanContactPayload) {
  const fields = [
    ["Name", payload.name],
    ["Telefonnummer", payload.phone],
    ["E-Mail", payload.email],
    ["Adresse", payload.address || "Nicht angegeben"],
  ];

  return `
    <h1>Neue Anfrage über Handwerker Sofort</h1>
    <table cellpadding="8" cellspacing="0" border="0">
      ${fields
        .map(
          ([label, value]) => `
            <tr>
              <td><strong>${escapeHtml(label)}</strong></td>
              <td>${escapeHtml(value)}</td>
            </tr>
          `
        )
        .join("")}
    </table>
    <h2>Beschreibung der Aufgabe</h2>
    <p>${escapeHtml(payload.message).replace(/\n/g, "<br />")}</p>
  `;
}

export async function POST(request: NextRequest) {
  const data = (await request.json().catch(() => null)) as ContactPayload | null;

  logContact("Incoming contact form request", {
    hasBody: Boolean(data),
    body: data
      ? {
          name: data.name,
          phone: data.phone,
          email: data.email,
          address: data.address,
          message: data.message,
          privacy: data.privacy,
        }
      : null,
  });

  if (!data) {
    logContact("Rejecting request: invalid JSON body");
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const payload: CleanContactPayload = {
    name: sanitize(data.name),
    phone: sanitize(data.phone),
    email: sanitize(data.email),
    address: sanitize(data.address),
    message: sanitize(data.message),
  };

  if (!payload.name || !payload.phone || !payload.email || !payload.message || !data.privacy) {
    const missingFields = [
      !payload.name && "name",
      !payload.phone && "phone",
      !payload.email && "email",
      !payload.message && "message",
      !data.privacy && "privacy",
    ].filter(Boolean);

    logContact("Rejecting request: required fields missing", { missingFields });
    return NextResponse.json({ error: "Bitte füllen Sie alle Pflichtfelder aus." }, { status: 400 });
  }

  if (!isEmail(payload.email)) {
    logContact("Rejecting request: invalid email address", {
      email: payload.email,
    });
    return NextResponse.json({ error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." }, { status: 400 });
  }

  const smtpHost = process.env.SMTP_HOST || "";
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpUser = process.env.SMTP_USER || "";
  const smtpPass = process.env.SMTP_PASS || "";
  const recipient = process.env.CONTACT_EMAIL || "";
  const missingVariables = [
    !smtpHost && "SMTP_HOST",
    !process.env.SMTP_PORT && "SMTP_PORT",
    !smtpUser && "SMTP_USER",
    !smtpPass && "SMTP_PASS",
    !recipient && "CONTACT_EMAIL",
  ].filter(Boolean);

  logContact("IONOS SMTP environment check", {
    missingVariables,
    configured: {
      SMTP_HOST: Boolean(smtpHost),
      SMTP_PORT: Boolean(process.env.SMTP_PORT),
      SMTP_USER: Boolean(smtpUser),
      SMTP_PASS: Boolean(smtpPass),
      CONTACT_EMAIL: Boolean(recipient),
    },
    smtp: {
      host: smtpHost,
      port: smtpPort,
      user: smtpUser,
      recipient,
    },
  });

  if (missingVariables.length > 0) {
    logContact("Rejecting request: SMTP configuration missing", { missingVariables });
    return NextResponse.json({
      error: "E-Mail-Versand ist nicht konfiguriert.",
      missingVariables,
    }, { status: 500 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      requireTLS: smtpPort === 587,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const subject = "Neue Anfrage über Handwerker Sofort";

    logContact("Sending email with IONOS SMTP", {
      recipient,
      sender: smtpUser,
      subject,
      replyTo: payload.email,
    });

    const result = await transporter.sendMail({
      from: `Handwerker Sofort <${smtpUser}>`,
      to: recipient,
      replyTo: payload.email,
      subject,
      text: createEmailText(payload),
      html: createEmailHtml(payload),
    });

    logContact("Email sent successfully with IONOS SMTP", {
      messageId: result.messageId,
      accepted: result.accepted,
      rejected: result.rejected,
      recipient,
      subject,
    });

    return NextResponse.json({ ok: true, messageId: result.messageId }, { status: 200 });
  } catch (error) {
    logContactError("IONOS SMTP email failed", error);
    return NextResponse.json({ error: "E-Mail konnte nicht gesendet werden." }, { status: 500 });
  }
}
