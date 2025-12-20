import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  isLast?: boolean;
  index?: number;
  children?: React.ReactNode;
}

export default function TimelineItem({
  title,
  subtitle,
  date,
  isLast = false,
  index = 0,
  children,
}: TimelineItemProps) {
  return (
    <motion.div
      className="relative flex gap-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          className="relative flex h-6 w-6 rounded-full border-2 border-purple-500 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm z-10 shadow-lg shadow-purple-500/30"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
            delay: index * 0.15 + 0.2,
          }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{ scale: 1.2, rotate: 180 }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 blur opacity-50" />
        </motion.div>
        {!isLast && (
          <motion.div
            className="w-0.5 grow bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500/20 relative"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500 to-pink-500 blur-sm opacity-50" />
          </motion.div>
        )}
      </div>
      <div className={cn("pb-8 flex-1", isLast ? "pb-0" : "")}>
        <motion.div
          className="flex flex-col gap-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h3 className="text-lg font-semibold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="text-purple-500">📍</span>
              {subtitle}
            </span>
            <span className="text-muted-foreground/50">•</span>
            <span className="flex items-center gap-1">
              <span className="text-purple-500">📅</span>
              {date}
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
}
