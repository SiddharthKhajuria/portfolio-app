import React from "react";
import { motion } from "framer-motion";
import { FolderOpen } from "lucide-react";
import ProjectCard from "@/components/projects/ProjectCard";

const projects = [
  {
    title: "DevOps Portfolio",
    shortDesc: "A comprehensive cloud engineering portfolio showcasing infrastructure setups and DevOps best practices.",
    fullDesc: "A full-featured DevOps portfolio project that demonstrates expertise in cloud architecture design, infrastructure provisioning, and modern DevOps workflows. This project showcases real-world configurations for production-grade environments including networking, security groups, and auto-scaling setups on AWS.",
    category: "Cloud Engineering",
    emoji: "🚀",
    gradient: "bg-gradient-to-br from-slate-700 via-slate-800 to-indigo-900",
    tags: ["AWS", "Terraform", "Docker", "Linux"],
    features: [
      "Production-grade AWS infrastructure architecture",
      "Automated provisioning with Terraform modules",
      "Containerized microservices deployment",
      "Comprehensive documentation and runbooks",
    ],
  },
  {
    title: "CI/CD Pipeline",
    shortDesc: "Automated pipeline integrating Jenkins, Docker, and AWS for seamless builds and deployments.",
    fullDesc: "An end-to-end CI/CD pipeline solution built with Jenkins that automates the entire software delivery lifecycle. From code commit to production deployment, this pipeline handles building, testing, containerizing, and deploying applications with zero-downtime strategies.",
    category: "Automation",
    emoji: "⚡",
    gradient: "bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700",
    tags: ["Jenkins", "Docker", "AWS", "Git"],
    features: [
      "Multi-stage Jenkins pipeline with declarative syntax",
      "Automated testing and quality gate integration",
      "Docker image building and registry management",
      "Blue-green deployment strategy on AWS",
    ],
  },
  {
    title: "Kubernetes Cluster",
    shortDesc: "Production Kubernetes cluster setup with scaling, monitoring, and Helm-based management.",
    fullDesc: "A production-ready Kubernetes cluster project demonstrating container orchestration at scale. This project includes cluster provisioning, application deployment, horizontal pod autoscaling, and comprehensive monitoring using DataDog for real-time observability.",
    category: "Orchestration",
    emoji: "☸️",
    gradient: "bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700",
    tags: ["Kubernetes", "Helm", "DataDog", "Ansible"],
    features: [
      "Multi-node Kubernetes cluster provisioning",
      "Helm chart management for application deployments",
      "Horizontal and vertical pod autoscaling",
      "Real-time monitoring and alerting with DataDog",
    ],
  },
];

export default function Projects() {
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
            <FolderOpen className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-medium text-slate-600">Featured Work</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
            Projects That<br />
            <span className="gradient-text">Define My Craft</span>
          </h1>
          <p className="mt-4 text-slate-400 max-w-lg mx-auto">
            Click on any project to explore the details, technologies, and key features.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}