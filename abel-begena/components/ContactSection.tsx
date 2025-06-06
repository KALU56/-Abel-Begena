'use client';
import { useState } from 'react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section
      className="min-h-screen bg-white px-6 pt-20 pb-32 flex flex-col items-center justify-center"
      style={{
        background: 'radial-gradient(circle at center, #FEFCF4 40%, #A74D08 100%)',
      }}
    >
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl border border-yellow-800">
        <h2 className="text-3xl font-serif text-center text-brown-800 mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-brown-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-yellow-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-700"
              required
            />
          </div>

          <div>
            <label className="block text-brown-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-yellow-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-700"
              required
            />
          </div>

          <div>
            <label className="block text-brown-700 font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-yellow-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-700"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-700 text-white py-3 px-6 rounded-lg hover:bg-yellow-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
