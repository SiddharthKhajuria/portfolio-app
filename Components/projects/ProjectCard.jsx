import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15, duration: 0.6 }}
        whileHover={{ y: -8 }}
        className="group cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-100 hover:border-transparent hover:shadow-2xl hover:shadow-indigo-100/60 transition-all duration-500">
          {/* Image/Header */}
          <div className={`relative h-52 ${project.gradient} overflow-hidden`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500">
                {project.emoji}
              </span>
            </div>
            <div className="absolute bottom-4 left-6">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white border border-white/10">
                {project.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-slate-800 group-hover:text-indigo-700 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-slate-400 mt-2 text-sm leading-relaxed line-clamp-2">
              {project.shortDesc}
            </p>
            
            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-slate-50 text-slate-500 border border-slate-100 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 mt-5 text-sm font-medium text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View Details
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-900/50 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl shadow-2xl max-w-xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className={`relative h-48 ${project.gradient} rounded-t-3xl`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl opacity-25">{project.emoji}</span>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal content */}
              <div className="p-8">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-600 border border-indigo-100">
                  {project.category}
                </span>
                <h2 className="text-2xl font-bold text-slate-800 mt-4">
                  {project.title}
                </h2>
                <p className="text-slate-500 mt-4 leading-relaxed">
                  {project.fullDesc}
                </p>

                {/* Key features */}
                <h3 className="text-sm font-bold text-slate-800 mt-6 mb-3 uppercase tracking-wider">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-slate-50 text-slate-600 border border-slate-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}