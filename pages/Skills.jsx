import React from "react";
import { motion } from "framer-motion";
import { Wrench } from "lucide-react";
import SkillCard from "@/Components/skills/SkillCard";

const skills = [
  {
    name: "AWS",
    icon: "☁️",
    description: "EC2, S3, Lambda, VPC, IAM, CloudFormation & more",
    level: 90,
    bg: "bg-orange-50",
    barColor: "bg-gradient-to-r from-orange-400 to-amber-400",
  },
  {
    name: "Terraform",
    icon: "🏗️",
    description: "Infrastructure as Code, modules, state management",
    level: 88,
    bg: "bg-violet-50",
    barColor: "bg-gradient-to-r from-violet-400 to-purple-500",
  },
  {
    name: "Docker",
    icon: "🐳",
    description: "Containerization, multi-stage builds, Docker Compose",
    level: 92,
    bg: "bg-blue-50",
    barColor: "bg-gradient-to-r from-blue-400 to-cyan-400",
  },
  {
    name: "Kubernetes",
    icon: "⚙️",
    description: "Orchestration, Helm charts, scaling & deployments",
    level: 85,
    bg: "bg-cyan-50",
    barColor: "bg-gradient-to-r from-cyan-400 to-teal-400",
  },
  {
    name: "Jenkins",
    icon: "🔧",
    description: "CI/CD pipelines, automated builds & deployments",
    level: 87,
    bg: "bg-red-50",
    barColor: "bg-gradient-to-r from-red-400 to-rose-400",
  },
  {
    name: "Ansible",
    icon: "📋",
    description: "Configuration management, playbooks, automation",
    level: 83,
    bg: "bg-emerald-50",
    barColor: "bg-gradient-to-r from-emerald-400 to-green-400",
  },
  {
    name: "DataDog",
    icon: "📊",
    description: "Monitoring, alerting, dashboards, APM",
    level: 80,
    bg: "bg-indigo-50",
    barColor: "bg-gradient-to-r from-indigo-400 to-blue-400",
  },
];

export default function Skills() {
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
            <Wrench className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-medium text-slate-600">Technical Skills</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
            Tools & Technologies<br />
            <span className="gradient-text">I Work With</span>
          </h1>
          <p className="mt-4 text-slate-400 max-w-lg mx-auto">
            A comprehensive toolkit for building, deploying, and managing modern cloud infrastructure.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}