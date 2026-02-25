import React from "react";
import { motion } from "framer-motion";

export default function SkillCard({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative"
    >
      <div className="relative p-6 rounded-2xl bg-white border border-slate-100 hover:border-transparent hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-500 overflow-hidden">
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-violet-50/0 group-hover:from-indigo-50/50 group-hover:to-violet-50/50 transition-all duration-500" />
        
        <div className="relative z-10">
          <div className={`w-14 h-14 rounded-2xl ${skill.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
            <span className="text-2xl">{skill.icon}</span>
          </div>
          
          <h3 className="text-base font-bold text-slate-800 mb-2 group-hover:text-indigo-700 transition-colors duration-300">
            {skill.name}
          </h3>
          
          <p className="text-sm text-slate-400 mb-4 leading-relaxed">{skill.description}</p>
          
          {/* Skill level bar */}
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.08, duration: 1, ease: "easeOut" }}
              className={`h-full rounded-full ${skill.barColor}`}
            />
          </div>
          <p className="text-xs text-slate-400 mt-2 text-right">{skill.level}%</p>
        </div>
      </div>
    </motion.div>
  );
}