import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-purple-500/20 py-8 bg-gradient-to-b from-background to-muted/30 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent pointer-events-none" />

      <div className="container max-w-5xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center gap-2 text-sm text-muted-foreground text-center md:text-left"
            whileHover={{ scale: 1.02 }}
          >
            <span className="font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              &copy; {new Date().getFullYear()} {personalInfo.name}
            </span>
            <span className="text-muted-foreground/50">•</span>
            <span>All rights reserved</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <span>Built with</span>
            <motion.span
              className="inline-block"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              💻
            </motion.span>
            <span>and</span>
            <motion.span
              className="inline-block"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.5,
              }}
            >
              ❤️
            </motion.span>
            <span className="text-muted-foreground/50">•</span>
            <span className="font-medium">Astro + React</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
