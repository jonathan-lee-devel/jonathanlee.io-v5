import { personalInfo } from "@/lib/data";
import { Mail, Github, MapPin, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container max-w-5xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          className="grid md:grid-cols-[1fr,auto] gap-12 items-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left space-y-6">
            <motion.div variants={childVariants} className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                {personalInfo.name}
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto md:mx-0" />
            </motion.div>

            <motion.p
              className="text-2xl md:text-3xl font-semibold text-muted-foreground"
              variants={childVariants}
            >
              Senior Software Engineer
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start pt-4"
              variants={containerVariants}
            >
              <motion.div
                className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg border border-border/50"
                variants={childVariants}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <MapPin className="h-4 w-4 text-purple-500" />
                <span className="text-sm font-medium">{personalInfo.location}</span>
              </motion.div>

              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg border border-border/50 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all"
                variants={childVariants}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Mail className="h-4 w-4 text-purple-500" />
                <span className="text-sm font-medium">Email</span>
              </motion.a>

              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg border border-border/50 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all"
                variants={childVariants}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Github className="h-4 w-4 text-purple-500" />
                <span className="text-sm font-medium">GitHub</span>
              </motion.a>

              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg border border-border/50 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all"
                variants={childVariants}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Linkedin className="h-4 w-4 text-purple-500" />
                <span className="text-sm font-medium">LinkedIn</span>
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center"
            variants={childVariants}
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur-xl opacity-50 transition duration-500 animate-pulse"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-40"></div>
              <img
                src="/profile_photo-min.jpg"
                alt="Profile"
                className="w-56 h-56 md:w-72 md:h-72 rounded-full relative ring-4 ring-background shadow-2xl object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        <MotionWrapper>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative bg-gradient-to-br from-muted/80 via-muted/60 to-muted/80 backdrop-blur-xl p-8 rounded-2xl border border-purple-500/20 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 rounded-full"></div>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-foreground/90">
                    Passionate software engineer with a versatile skill set spanning multiple domains.
                    Self-motivated individual always seeking opportunities to grow and learn.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Currently studying System Design and re-implementing technologies from scratch
                    including Apache Kafka, HTTP Servers, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
