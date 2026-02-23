export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}