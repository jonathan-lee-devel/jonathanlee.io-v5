import React from "react";
import { projects } from "@/lib/data";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Github } from "lucide-react";
import { GlassCard } from "./ui/glass-card";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />

      <div className="container max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <MotionWrapper>
          <div className="text-center md:text-left mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent inline-flex items-center gap-3">
              <span className="text-4xl">🚀</span>
              Featured Projects
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto md:mx-0 mt-4" />
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <MotionWrapper key={project.title} delay={index * 0.15}>
              <motion.div
                className="group relative h-full"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition duration-500" />

                <GlassCard className="relative overflow-hidden border-purple-500/30 group-hover:border-purple-500/60 h-full flex flex-col transition-all duration-500">
                  <CardHeader className="pb-4 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent border-b border-purple-500/20">
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="text-xl font-bold group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {project.title}
                      </CardTitle>
                      <motion.div
                        className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-2xl">💡</span>
                      </motion.div>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-grow py-6">
                    <ul className="space-y-3">
                      {project.description.map((desc, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i, duration: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-2" />
                          <span className="flex-1">{desc}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="pt-4 border-t border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-transparent">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 border border-purple-500/30 hover:border-purple-500/50 rounded-xl font-medium text-sm transition-all duration-300 group/link"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github className="h-5 w-5 group-hover/link:rotate-12 transition-transform duration-300" />
                      <span>View on GitHub</span>
                      <motion.span
                        className="text-lg"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.a>
                  </CardFooter>
                </GlassCard>
              </motion.div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
