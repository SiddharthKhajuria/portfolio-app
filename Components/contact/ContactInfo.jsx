import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, MapPin } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "siddharthkhajuria@gmail.com",
    href: "mailto:siddharthkhajuria@gmail.com",
    color: "text-indigo-500",
    bg: "bg-indigo-50",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "437-972-4226",
    href: "tel:437-972-4226",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/siddharthkhajuria",
    href: "https://github.com/siddharthkhajuria",
    color: "text-slate-700",
    bg: "bg-slate-100",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Canada",
    href: null,
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-4">
      {contactItems.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        >
          {item.href ? (
            <a
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-50/50 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                  {item.label}
                </p>
                <p className="text-sm font-medium text-slate-700 mt-0.5 group-hover:text-indigo-600 transition-colors">
                  {item.value}
                </p>
              </div>
            </a>
          ) : (
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100">
              <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center`}>
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                  {item.label}
                </p>
                <p className="text-sm font-medium text-slate-700 mt-0.5">{item.value}</p>
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}