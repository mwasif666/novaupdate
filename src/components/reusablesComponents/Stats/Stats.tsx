// Stats.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./Stats.module.css";

export default function Stats() {
  const stats = [
    { number: "1M+", label: "Transactions Processed" },
    { number: "120K+", label: "Active Users" },
    { number: "40+", label: "Countries Reached" },
    { number: "99.9%", label: "Platform Uptime" },
  ];

  return (
    <section className={styles.section}>
      {/* theme glows */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.kicker}>Nova Crest</span>
          <h2 className={styles.title}>Trusted at Scale</h2>
          <p className={styles.subtitle}>
            Real-time infrastructure performance and adoption metrics across our
            ecosystem.
          </p>
        </div>

        <div className={styles.grid}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={styles.card}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}
              whileHover={{ y: -6 }}
            >
              <div className={styles.cardInner}>
                <h3 className={styles.number}>{stat.number}</h3>
                <p className={styles.label}>{stat.label}</p>
              </div>
              <span className={styles.cardGlow} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
