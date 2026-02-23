import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Button from '../common/Button';
import Card from '../common/Card';

import { COMPANY_EMAIL, EMAILJS_CONFIG } from '../../config/emailjs.config';
import { COMPANY_PHONE, COMPANY_ADDRESS, COMPANY_HOURS } from 'components/constants';
import { ContactFormData, ContactFormErrors } from 'components/types';
import { validateEmail } from 'components/utils';

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const services = [
    'Design UI/UX',
    'Développement Web',
    'Développement Mobile',
    'Sécurité Informatique',
    'Développement Backend',
    'Secrétariat Bureautique'
  ];

  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    if (!formData.service) {
      newErrors.service = 'Veuillez sélectionner un service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: ContactFormData) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev: ContactFormErrors) => ({ ...prev, [name]: undefined }));
    }
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Préparer les paramètres du template EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: COMPANY_EMAIL,
        service: formData.service,
        message: formData.message,
        reply_to: formData.email
      };

      console.log('Envoi en cours...', templateParams);

      // Envoyer l'email via EmailJS avec vos identifiants
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('✅ Email envoyé avec succès:', result);

      setSubmitStatus({
        type: 'success',
        message: '✓ Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.'
      });

      setFormData({ 
        name: '', 
        email: '', 
        service: '', 
        message: '' 
      });

    } catch (error) {
      console.error('❌ Erreur lors de l\'envoi:', error);
      
      let errorMessage = 'Une erreur est survenue lors de l\'envoi. ';
      
      if (error instanceof Error) {
        if (error.message.includes('Network')) {
          errorMessage += 'Vérifiez votre connexion internet.';
        } else if (error.message.includes('Invalid Public Key')) {
          errorMessage += 'Clé API invalide.';
        } else {
          errorMessage += 'Veuillez réessayer ou nous contacter directement par email.';
        }
      }

      setSubmitStatus({
        type: 'error',
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Formulaire de contact */}
      <Card className="lg:col-span-1">
        {submitStatus.type && (
          <div 
            className={`mb-6 p-4 rounded-lg ${
              submitStatus.type === 'success' 
                ? 'bg-green-50 text-green-800 border border-green-200' 
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            <p className="flex items-center">
              {submitStatus.type === 'success' ? (
                <Mail className="w-5 h-5 mr-2 text-green-600" />
              ) : (
                <span className="mr-2 text-red-600">⚠️</span>
              )}
              {submitStatus.message}
            </p>
          </div>
        )}
        
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          {/* Champ Nom */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Nom complet <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Jean Dupont"
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Champ Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="jean.dupont@email.com"
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Sélection du service */}
          <div>
            <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
              Service souhaité <span className="text-red-500">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
                errors.service ? 'border-red-500' : 'border-gray-300'
              }`}
              disabled={isSubmitting}
            >
              <option value="">Sélectionnez un service</option>
              {services.map(service => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
            {errors.service && (
              <p className="mt-1 text-sm text-red-500">{errors.service}</p>
            )}
          </div>

          {/* Champ Message */}
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Décrivez votre projet en détail..."
              disabled={isSubmitting}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message}</p>
            )}
            <p className="mt-1 text-xs text-gray-500">
              Minimum 10 caractères
            </p>
          </div>

          {/* Bouton d'envoi */}
          <Button 
            type="submit" 
            variant="primary" 
            size="lg" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Envoi en cours...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <Send className="w-5 h-5 mr-2" />
                Envoyer la demande
              </span>
            )}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            <span className="text-red-500">*</span> Champs obligatoires
          </p>
        </form>
      </Card>

      {/* Coordonnées de l'entreprise */}
      <Card className="lg:col-span-1 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <h3 className="text-2xl font-bold mb-6">Nos coordonnées</h3>
        
        <div className="space-y-6">
          {/* Email */}
          <div className="flex items-start space-x-3">
            <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <p className="font-medium mb-1">Email</p>
              <a 
                href={`mailto:${COMPANY_EMAIL}`} 
                className="text-white/90 hover:text-white transition underline underline-offset-2"
              >
                {COMPANY_EMAIL}
              </a>
              <p className="text-sm text-white/70 mt-1">
                (Les messages du formulaire sont envoyés à cette adresse)
              </p>
            </div>
          </div>
          
          {/* Téléphone */}
          <div className="flex items-start space-x-3">
            <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <p className="font-medium mb-1">Téléphone</p>
              <a 
                href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`} 
                className="text-white/90 hover:text-white transition"
              >
                {COMPANY_PHONE}
              </a>
              <p className="text-sm text-white/70 mt-1">
                (WhatsApp disponible)
              </p>
            </div>
          </div>
          
          {/* Adresse - MISE À JOUR */}
          <div className="flex items-start space-x-3">
            <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <p className="font-medium mb-1">Adresse</p>
              <p className="text-white/90">{COMPANY_ADDRESS}</p>
              <p className="text-sm text-white/70 mt-1">
                (En face Mosqué Lamidat)
              </p>
            </div>
          </div>
          
          {/* Horaires */}
          <div className="flex items-start space-x-3">
            <Clock className="w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <p className="font-medium mb-1">Horaires d'ouverture</p>
              <p className="text-white/90">{COMPANY_HOURS}</p>
            </div>
          </div>

          {/* Carte Google Maps - Garoua */}
          <div className="mt-6 rounded-lg overflow-hidden h-48 bg-gray-200">
            <iframe
              title="Localisation Goolidev - Garoua"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.923160732719!2d13.394627!3d9.301389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1085e3b8e5b5b5b5%3A0x123456789abcdef!2sLamidat%20Garoua!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-full object-cover"
            ></iframe>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ContactForm;