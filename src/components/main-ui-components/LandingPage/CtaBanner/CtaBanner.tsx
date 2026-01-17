// Stats.jsx
"use client";
import React from "react";
import styles from "./CtaBanner.module.css";
import CtaBannerUtil2 from "./CTABannerbutton";

export default function CtaBanner() {
  return (
    <section className={styles.section}>
      {/* theme glows */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.kicker}>Nova Crest</span>
          <h2 className={styles.title}>
            Transforming Financial Systems Through Blockchain Innovation
          </h2>
        </div>

        <CtaBannerUtil2
          heading="Transforming Financial Systems Through Blockchain Innovation"
          button="Experience Nova Crest"
        />
      </div>
    </section>
  );
}
