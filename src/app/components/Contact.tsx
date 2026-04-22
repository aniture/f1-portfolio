'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

// To activate real email delivery:
// 1. Sign up free at https://formspree.io
// 2. Create a new form → set email to adityaniture07@gmail.com
// 3. Replace YOUR_FORM_ID below with your form's ID (e.g. "xpwzabcd")
const FORMSPREE_ID = 'YOUR_FORM_ID';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="bg-gray-950 text-white py-20 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-red-600 text-center mb-3">Pit Stop: Contact Me</h2>
      <p className="text-gray-400 text-center text-sm mb-12">
        Open to full-time roles, contract work, and consulting engagements.
      </p>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-gray-900 border border-gray-800 rounded-xl p-8 flex flex-col gap-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="bg-gray-800 border border-gray-700 px-4 py-3 rounded-lg text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="bg-gray-800 border border-gray-700 px-4 py-3 rounded-lg text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="bg-gray-800 border border-gray-700 px-4 py-3 rounded-lg text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          className="bg-gray-800 border border-gray-700 px-4 py-3 rounded-lg text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition resize-none"
        />

        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="bg-red-600 hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed px-6 py-3 rounded-lg text-white font-semibold transition duration-200"
        >
          {status === 'loading' ? 'Sending…' : status === 'success' ? '✓ Message Sent!' : 'Send Message'}
        </button>

        {status === 'success' && (
          <p className="text-green-400 text-sm text-center">
            Thanks! I&apos;ll get back to you soon.
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-sm text-center">
            Something went wrong. Email me directly at{' '}
            <a href="mailto:adityaniture07@gmail.com" className="underline">
              adityaniture07@gmail.com
            </a>
          </p>
        )}
      </motion.form>

      {/* Social links */}
      <div className="flex justify-center gap-7 mt-10">
        <a
          href="https://linkedin.com/in/aditya-niture"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-3xl text-gray-400 hover:text-red-500 transition" />
        </a>
        <a
          href="https://github.com/aniture"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="text-3xl text-gray-400 hover:text-red-500 transition" />
        </a>
        <a
          href="mailto:adityaniture07@gmail.com"
          aria-label="Email"
        >
          <FaEnvelope className="text-3xl text-gray-400 hover:text-red-500 transition" />
        </a>
      </div>

      <p className="text-center text-gray-600 text-xs mt-8">
        Chicago, IL · Open to Remote · adityaniture07@gmail.com
      </p>
    </div>
  );
}
