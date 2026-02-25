import React from "react";
import { motion } from "framer-motion";
import { Cloud, GitBranch, Container, Shield } from "lucide-react";

const stats = [
  { icon: Cloud, label: "Cloud Platforms", value: "AWS", color: "text-orange-500", bg: "bg-orange-50" },
  { icon: GitBranch, label: "CI/CD Pipelines", value: "Jenkins", color: "text-blue-500", bg: "bg-blue-50" },
  { icon: Container, label: "Containerization", value: "Docker & K8s", color: "text-cyan-500", bg: "bg-cyan-50" },
  { icon: Shield, label: "IaC", value: "Terraform", color: "text-violet-500", bg: "bg-violet-50" },
];

export default function QuickStats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group relative p-6 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <p className="text-xl font-bold text-slate-800">{stat.value}</p>
              <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}