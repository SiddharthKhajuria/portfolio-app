import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export default function EducationCard({ school, degree, location, period, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative"
    >
      <div className="relative p-8 rounded-2xl bg-white border border-slate-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-50/50 transition-all duration-500">
        {/* Accent line */}
        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="flex items-start gap-5">
          <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center shrink-0 group-hover:bg-indigo-100 transition-colors duration-300">
            <GraduationCap className="w-7 h-7 text-indigo-500" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-slate-800 group-hover:text-indigo-700 transition-colors duration-300">
              {degree}
            </h3>
            <p className="text-base font-medium text-slate-600 mt-1">{school}</p>
            <div className="flex flex-wrap items-center gap-4 mt-3">
              <span className="flex items-center gap-1.5 text-sm text-slate-400">
                <MapPin className="w-3.5 h-3.5" />
                {location}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-slate-400">
                <Calendar className="w-3.5 h-3.5" />
                {period}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}