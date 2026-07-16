"use server";

export type ActionResult = { ok: boolean; error?: string };

const PHONE_RE = /^[+()\-.\s\d]{7,20}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactPayload = {
  name: string;
  phone: string;
  email: string;
  topic: string;
  message: string;
};

/** Contact-form submission. Validated server-side, then handed to the (stubbed) email provider. */
export async function sendContactMessage(payload: ContactPayload): Promise<ActionResult> {
  if (!payload.name.trim() || !payload.phone.trim() || !payload.message.trim()) {
    return { ok: false, error: "Name, phone, and a message are required." };
  }
  if (!PHONE_RE.test(payload.phone.trim())) {
    return { ok: false, error: "That phone number doesn't look right." };
  }
  if (payload.email.trim() && !EMAIL_RE.test(payload.email.trim())) {
    return { ok: false, error: "That email address doesn't look right." };
  }

  // TODO: connect email provider (Resend / SendGrid / SES) and CRM webhook here.
  console.log("[contact] message received", { ...payload, message: payload.message.slice(0, 200) });
  return { ok: true };
}

export type BookingPayload = {
  property: string;
  service: string;
  material: string;
  age: string;
  leak: string;
  address: string;
  city: string;
  zip: string;
  day: string;
  time: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

/** Inspection-booking submission from the multi-step wizard. */
export async function bookInspection(payload: BookingPayload): Promise<ActionResult> {
  const required: (keyof BookingPayload)[] = [
    "property",
    "service",
    "material",
    "age",
    "leak",
    "address",
    "city",
    "zip",
    "day",
    "time",
    "firstName",
    "phone",
    "email",
  ];
  for (const key of required) {
    if (!payload[key]?.trim()) {
      return { ok: false, error: `Missing required field: ${key}` };
    }
  }
  if (!PHONE_RE.test(payload.phone.trim())) {
    return { ok: false, error: "That phone number doesn't look right." };
  }
  if (!EMAIL_RE.test(payload.email.trim())) {
    return { ok: false, error: "That email address doesn't look right." };
  }

  // TODO: connect email provider + scheduling system (calendar/CRM) here.
  console.log("[booking] inspection booked", {
    ...payload,
    address: "[redacted in logs]",
  });
  return { ok: true };
}
