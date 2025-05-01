'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import { ContactHeader } from '../components/contact/ContactHeader';
import { ContactInfo } from '../components/contact/ContactInfo';
import ContactForm from '../forms/ContactForm';
import { CTA } from '../components/contact/CTA';
import { FAQ } from '../components/common/FAQ';
import { ContactFaqs } from '../lib/constants';

const ContactUsPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us | NextPhase</title>
        <meta name="description" content="Get in touch with our team. We're here to help with any questions or concerns." />
      </Head>

      <ContactHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
          <ContactInfo />
        </div>
      </div>
      <FAQ items={ContactFaqs} />
      <CTA />
    </>
  );
};

export default ContactUsPage;