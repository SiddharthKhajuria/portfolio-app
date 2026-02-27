import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowRight, Cloud, Server, GitBranch } from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function HeroSection() {
  const baseUrl = import.meta.env.BASE_URL;
  const profileImage = `${baseUrl}Sid.jpg`;
  const profileImagePng = `${baseUrl}Sid.png`;

  return (
    <section className="relative min-h-[90vh] flex items-center animated-gradient overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/10 rounded-full blur-3xl" />
        
        {/* Floating icons */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-[20%] text-indigo-200"
        >
          <Cloud className="w-8 h-8" />
        </motion.div>
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-[15%] text-violet-200"
        >
          <Server className="w-6 h-6" />
        </motion.div>
        <motion.div
          animate={{ y: [-8, 12, -8] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[60%] right-[10%] text-blue-200"
        >
          <GitBranch className="w-7 h-7" />
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-200/60 shadow-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-medium text-slate-600">
                Available for opportunities
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              <span className="text-slate-800">Hi, I'm</span>
              <br />
              <span className="gradient-text">Siddharth</span>
              <br />
              <span className="text-slate-800">Khajuria</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-lg text-slate-500 leading-relaxed max-w-lg"
            >
              Cloud Engineer passionate about building scalable infrastructure,
              optimizing cloud environments, and implementing seamless CI/CD
              pipelines that drive efficiency and innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link to={createPageUrl("Projects")}>
                <Button className="bg-slate-800 hover:bg-slate-700 text-white rounded-full px-8 py-6 text-sm font-medium shadow-lg shadow-slate-200 hover:shadow-xl hover:shadow-slate-300 transition-all duration-300 group">
                  View Projects
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to={createPageUrl("Contact")}>
                <Button
                  variant="outline"
                  className="rounded-full px-8 py-6 text-sm font-medium border-slate-200 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300"
                >
                  Get in Touch
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-200 via-violet-200 to-blue-200 rounded-full blur-2xl opacity-40" />
              
              {/* Profile image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src={profileImage}
                  alt="Siddharth Khajuria"
                  className="w-full h-full object-cover object-[center_30%]"
                  onError={(event) => {
                    if (!event.currentTarget.dataset.fallbackTried) {
                      event.currentTarget.dataset.fallbackTried = "true";
                      event.currentTarget.src = profileImagePng;
                      return;
                    }
                    event.currentTarget.src = "https://avatars.githubusercontent.com/u/175024674?v=4";
                  }}
               />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -right-2 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-3"
              >
                <div className="flex items-center gap-2">
                  <Cloud className="w-5 h-5 text-indigo-500" />
                  <span className="text-sm font-semibold text-slate-700">Cloud Engineer</span>
                </div>
              </motion.div>

              {/* Experience badge */}
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -left-4 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-3"
              >
                <div className="text-center">
                  <p className="text-xl font-bold text-indigo-600">4+</p>
                  <p className="text-[11px] text-slate-400 font-medium">Years Exp.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}