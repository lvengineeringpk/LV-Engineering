export const OFFICIAL_INQUIRY_EMAIL = 'info@lv-engineering.com';
export const WHATSAPP_PHONE_NUMBER = '923011484433';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE_NUMBER}`;

export interface InquiryDetails {
  fullName?: string;
  company?: string;
  email?: string;
  phone?: string;
  serviceTitle?: string;
  projectType?: string;
  message?: string;
  source?: string;
}

export function createInquiryMailtoLink(details: InquiryDetails): string {
  const subject = encodeURIComponent(
    `[Engineering Quote / Consultation Request] ${details.serviceTitle || 'General Technical Inquiry'} - ${details.company || details.fullName || 'Client'}`
  );

  const bodyLines = [
    `Dear LV Engineering Technical Team,`,
    ``,
    `I am submitting an inquiry / quote request for: ${details.serviceTitle || 'Engineering Consultation'}.`,
    ``,
    `--- CLIENT & PROJECT DETAILS ---`,
    `Full Name: ${details.fullName || 'Not specified'}`,
    `Company / Facility: ${details.company || 'Not specified'}`,
    `Email: ${details.email || 'Not specified'}`,
    `Phone: ${details.phone || 'Not specified'}`,
    `Target Discipline: ${details.serviceTitle || 'General Consultation'}`,
    `Project Environment: ${details.projectType || 'Industrial / Commercial'}`,
    ``,
    `--- SCOPE & TECHNICAL REQUIREMENTS ---`,
    `${details.message || 'Please provide pricing, technical specifications, and consultation.'}`,
    ``,
    `----------------------------------------`,
    `Target Desk: ${OFFICIAL_INQUIRY_EMAIL}`,
    `Submitted via LV Engineering Portal`
  ];

  const body = encodeURIComponent(bodyLines.join('\n'));
  return `mailto:${OFFICIAL_INQUIRY_EMAIL}?subject=${subject}&body=${body}`;
}

export function createWhatsAppLink(details?: Partial<InquiryDetails>): string {
  const greeting = details?.serviceTitle
    ? `Hello LV Engineering, I would like to request a quote / consultation for ${details.serviceTitle}.`
    : `Hello LV Engineering, I would like to inquire about your engineering services and request a consultation.`;

  const detailsText = details?.fullName
    ? `\n\nName: ${details.fullName}\nCompany: ${details.company || 'N/A'}\nPhone: ${details.phone || 'N/A'}`
    : '';

  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(greeting + detailsText)}`;
}
