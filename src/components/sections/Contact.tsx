import React from 'react';
import Section from '../common/Section';
import ContactForm from '../ui/ContactForm';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Discutons de votre projet
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Que vous ayez besoin d'un site web, d'une application mobile ou de conseils en sécurité,
          notre équipe est là pour vous aider
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <ContactForm />
      </div>
    </Section>
  );
};

export default Contact;