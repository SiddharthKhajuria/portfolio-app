import React from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import ContactForm from "@/Components/contact/ContactForm";
import ContactInfo from "@/Components/contact/ContactInfo";

export default function Contact() {
  return (
    <div className="min-h-screen animated-gradient">
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-200/60 shadow-sm mb-6">
            <MessageSquare className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-medium text-slate-600">Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
            Let's Work<br />
            <span className="gradient-text">Together</span>
          </h1>
          <p className="mt-4 text-slate-400 max-w-lg mx-auto">
            Have a project in mind or want to discuss an opportunity? I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-5 gap-10">
          {/* Contact Info - Left */}
          <div className="md:col-span-2">
            <ContactInfo />
          </div>

          {/* Contact Form - Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
              <h2 className="text-xl font-bold text-slate-800 mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}