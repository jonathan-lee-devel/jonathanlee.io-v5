import { education } from "@/lib/data";
import TimelineItem from "./TimelineItem";
import { Award } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-muted/10 via-background to-muted/20 relative overflow-hidden"
    >
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container max-w-5xl mx-auto px-6 md:px-8 relative z-10">
        <MotionWrapper>
          <div className="text-center md:text-left mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent inline-flex items-center gap-3">
              <span className="text-4xl">🎓</span>
              Education
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto md:mx-0 mt-4" />
          </div>
        </MotionWrapper>

        <div className="mb-8">
          {education.map((edu, index) => (
            <TimelineItem
              key={edu.institution}
              title={edu.degree}
              subtitle={edu.institution}
              date={edu.period}
              isLast={index === education.length - 1}
              index={index}
            >
              <motion.div
                className="relative group mt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative bg-gradient-to-br from-muted/90 via-muted/70 to-muted/90 backdrop-blur-xl p-6 rounded-2xl border border-purple-500/30 shadow-lg group-hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <span className="text-purple-500">📍</span>
                    <span>{edu.location}</span>
                  </div>

                  {edu.achievements && edu.achievements.length > 0 && (
                    <>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                          <Award className="h-5 w-5 text-purple-500" />
                        </div>
                        <h4 className="text-base font-semibold">Achievements & Activities</h4>
                      </div>
                      <ul className="space-y-3">
                        {edu.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 * i }}
                            viewport={{ once: true }}
                          >
                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-2" />
                            <span className="flex-1">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </motion.div>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}
