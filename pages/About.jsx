import React from "react";
import { motion } from "framer-motion";
import { User, Briefcase } from "lucide-react";
import EducationCard from "@/components/about/EducationCard";

const education = [
  {
    school: "Algoma University",
    degree: "Masters in IT Project Management",
    location: "Canada",
    period: "Sep 2022 – Apr 2024",
  },
  {
    school: "Punjab Technical University",
    degree: "Bachelor in Information Technology",
    location: "India",
    period: "Jun 2018 – Jul 2021",
  },
];

export default function About() {
  return (
    <div className="min-h-screen animated-gradient">
      <div className="max-w-4xl mx-auto px-6 py-24">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-200/60 shadow-sm mb-6">
            <User className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-medium text-slate-600">About Me</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
            Cloud Engineer &<br />
            <span className="gradient-text">Infrastructure Builder</span>
          </h1>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="p-8 md:p-10 rounded-3xl bg-white border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-indigo-500" />
              </div>
              <h2 className="text-xl font-bold text-slate-800">Professional Focus</h2>
            </div>
            <p className="text-slate-500 leading-relaxed text-lg">
              I am a dedicated Cloud Engineer with a strong focus on designing and managing
              scalable, reliable cloud infrastructure. My expertise spans across AWS,
              containerization technologies like Docker and Kubernetes, and Infrastructure as Code
              using Terraform. I am passionate about automating workflows, implementing robust CI/CD
              pipelines, and optimizing cloud environments for performance and cost efficiency.
            </p>
            <p className="text-slate-500 leading-relaxed text-lg mt-4">
              With a Master's degree in IT Project Management and hands-on experience in DevOps
              practices, I bring a unique blend of technical proficiency and project management
              skills to deliver impactful solutions.
            </p>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-8">Education</h2>
          <div className="space-y-6">
            {education.map((edu, i) => (
              <EducationCard key={i} {...edu} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}