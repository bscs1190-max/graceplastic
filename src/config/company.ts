/**
 * COMPANY CONFIGURATION
 * ------------------------------------------------------------------
 * Real contact details published by the company on its official
 * Facebook page (https://www.facebook.com/hanif.plast/about).
 * Update any value here and the whole site picks it up automatically.
 */
export const company = {
  name: "Hanif Plast",
  legalName: "Hanif Plastic Industry",
  tagline: "Quality Plastic Manufacturing",
  phone: "+92 322 7219080",
  email: "hanifplasticindustry@gmail.com",
  address: "Ferozewala Road, near National Bank, Arain Wali Street, Gujranwala, Pakistan 52250",
  facebook: "https://www.facebook.com/hanif.plast",
  website: "",
  /**
   * Optional: paste a form endpoint (Formspree, Getform, your own API...)
   * to receive inquiries by email. Leave empty to keep the form in
   * front-end only mode.
   */
  formEndpoint: "",
};

export const companyContact = {
  phone: company.phone,
  email: company.email,
  address: company.address,
  facebook: company.facebook,
};

export const hasPhone = company.phone.trim().length > 0;
export const hasEmail = company.email.trim().length > 0;
export const hasAddress = company.address.trim().length > 0;