import React from "react";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";

function SkillTag({ skill, index }: { skill: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        delay: 0.03 * index,
      }}
      whileHover={{
        scale: 1.08,
        y: -4,
        boxShadow: "0 10px 30px -10px rgba(168, 85, 247, 0.4)"
      }}
      className="relative group px-4 py-2 bg-gradient-to-br from-muted/90 to-muted/70 backdrop-blur-sm rounded-xl text-sm font-medium border border-purple-500/20 shadow-md hover:border-purple-500/40 transition-colors duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-xl transition-all duration-300" />
      <span className="relative">{skill}</span>
    </motion.div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skillCategoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden"
    >
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 pointer-events-none" />

      <div className="container max-w-5xl mx-auto px-6 md:px-8 relative z-10">
        <MotionWrapper>
          <div className="text-center md:text-left mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent inline-flex items-center gap-3">
              <span className="text-4xl">🛠️</span>
              Skills & Technologies
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto md:mx-0 mt-4" />
          </div>
        </MotionWrapper>

        <motion.div
          className="grid gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={skillCategoryVariants}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <GlassCard className="relative p-6 border-purple-500/30 hover:border-purple-500/50 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <span className="text-2xl">💻</span>
                  </div>
                  <h3 className="text-xl font-semibold">Programming Languages</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.programmingLanguages.map((skill, index) => (
                    <SkillTag key={skill} skill={skill} index={index} />
                  ))}
                </div>
              </GlassCard>
            </div>
          </motion.div>

          <motion.div variants={skillCategoryVariants}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <GlassCard className="relative p-6 border-purple-500/30 hover:border-purple-500/50 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-semibold">Frontend Development</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.frontendDevelopment.map((skill, index) => (
                    <SkillTag key={skill} skill={skill} index={index} />
                  ))}
                </div>
              </GlassCard>
            </div>
          </motion.div>

          <motion.div variants={skillCategoryVariants}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <GlassCard className="relative p-6 border-purple-500/30 hover:border-purple-500/50 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <h3 className="text-xl font-semibold">Backend Development</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.backendDevelopment.map((skill, index) => (
                    <SkillTag key={skill} skill={skill} index={index} />
                  ))}
                </div>
              </GlassCard>
            </div>
          </motion.div>

          <motion.div variants={skillCategoryVariants}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <GlassCard className="relative p-6 border-purple-500/30 hover:border-purple-500/50 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                    <span className="text-2xl">🗄️</span>
                  </div>
                  <h3 className="text-xl font-semibold">Database & Storage</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.databaseAndStorage.map((skill, index) => (
                    <SkillTag key={skill} skill={skill} index={index} />
                  ))}
                </div>
              </GlassCard>
            </div>
          </motion.div>

          <motion.div variants={skillCategoryVariants}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <GlassCard className="relative p-6 border-purple-500/30 hover:border-purple-500/50 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <span className="text-2xl">☁️</span>
                  </div>
                  <h3 className="text-xl font-semibold">Cloud & DevOps</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.cloudAndDevOps.map((skill, index) => (
                    <SkillTag key={skill} skill={skill} index={index} />
                  ))}
                </div>
              </GlassCard>
            </div>
          </motion.div>

          <motion.div variants={skillCategoryVariants}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <GlassCard className="relative p-6 border-purple-500/30 hover:border-purple-500/50 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/20 to-pink-500/20 flex items-center justify-center">
                    <span className="text-2xl">🧰</span>
                  </div>
                  <h3 className="text-xl font-semibold">Tools & Services</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.toolsAndServices.map((skill, index) => (
                    <SkillTag key={skill} skill={skill} index={index} />
                  ))}
                </div>
              </GlassCard>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
