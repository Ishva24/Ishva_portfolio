import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a
            href="mailto:ishvac@karunya.edu.in"
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
          >
            <Mail className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-400 text-center">ishvac@karunya.edu.in</p>
          </a>

          <a
            href="https://www.linkedin.com/in/ishva-c-2bhb62270"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
          >
            <Linkedin className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
            <p className="text-gray-400 text-center">Connect with me</p>
          </a>

          <a
            href="tel:+919677631401"
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
          >
            <Phone className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
            <p className="text-gray-400 text-center">+91 9677631401</p>
          </a>
        </div>
      </div>
    </section>
  );
}