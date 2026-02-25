import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { base44 } from "@/api/base44Client";

export default function ContactForm() {
  const [form, setForm] = useState({ sender_name: "", sender_email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    await base44.entities.ContactMessage.create(form);

    await base44.integrations.Core.SendEmail({
      to: "siddharthkhajuria@gmail.com",
      subject: `Portfolio Contact: ${form.sender_name}`,
      body: `New message from your portfolio:\n\nName: ${form.sender_name}\nEmail: ${form.sender_email}\n\nMessage:\n${form.message}`,
    });

    setSending(false);
    setSent(true);
    setForm({ sender_name: "", sender_email: "", message: "" });
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-emerald-500" />
        </div>
        <h3 className="text-xl font-bold text-slate-800">Message Sent!</h3>
        <p className="text-slate-400 mt-2">
          Thank you for reaching out. I'll get back to you soon.
        </p>
        <Button
          variant="outline"
          className="mt-6 rounded-full"
          onClick={() => setSent(false)}
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium text-slate-600">
            Your Name
          </Label>
          <Input
            id="name"
            required
            value={form.sender_name}
            onChange={(e) => setForm({ ...form, sender_name: e.target.value })}
            placeholder="John Doe"
            className="rounded-xl border-slate-200 focus:border-indigo-300 focus:ring-indigo-200 h-12"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-slate-600">
            Your Email
          </Label>
          <Input
            id="email"
            type="email"
            required
            value={form.sender_email}
            onChange={(e) => setForm({ ...form, sender_email: e.target.value })}
            placeholder="john@example.com"
            className="rounded-xl border-slate-200 focus:border-indigo-300 focus:ring-indigo-200 h-12"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium text-slate-600">
          Message
        </Label>
        <Textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell me about your project or opportunity..."
          className="rounded-xl border-slate-200 focus:border-indigo-300 focus:ring-indigo-200 resize-none"
        />
      </div>
      <Button
        type="submit"
        disabled={sending}
        className="w-full bg-slate-800 hover:bg-slate-700 text-white rounded-xl h-12 text-sm font-medium shadow-lg shadow-slate-200 hover:shadow-xl hover:shadow-slate-300 transition-all duration-300"
      >
        {sending ? (
          <Loader2 className="w-4 h-4 animate-spin mr-2" />
        ) : (
          <Send className="w-4 h-4 mr-2" />
        )}
        {sending ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}