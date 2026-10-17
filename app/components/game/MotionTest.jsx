"use client";

import { motion } from "motion/react";

export default function MotionTest() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-xl bg-indigo-600 p-6 text-white"
    >
      ¡El juego empieza aquí!
    </motion.div>
  );
}