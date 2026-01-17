"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import styles from "./ProductTab.module.css";

export default function ProductTab() {
  const [currentTab, setCurrentTab] = useState<string>("Crypto Trading");

  const sectionKicker = "POWERING THE FUTURE OF";
  const sectionTitle = "Industries we serve";

  const tabsName = useMemo(
    () => [
      "Crypto Trading",
      "Coin Transactions",
      "Decentralized Finance",
      "Nfts",
      "Web3 Social Media",
      "Web3 Consultancy",
    ],
    [],
  );

  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const didMount = useRef(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setCurrentTab(tabsName[index]);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tabsName]);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }

    const activeIndex = tabsName.indexOf(currentTab);
    if (activeIndex !== -1 && tabRefs.current[activeIndex]) {
      tabRefs.current[activeIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }
  }, [currentTab, tabsName]);

  const content: Record<
    string,
    {
      sub: string;
      href: string;
      heading: string;
      paragraph: string;
      imageSrc: string;
    }
  > = {
    "Crypto Trading": {
      sub: "Crypto Trading",
      href: "/services/crypto-trading",
      heading: "Digital Asset Trading",
      paragraph:
        "Seamless crypto buying, selling, and storage through secure global exchanges.",
      imageSrc: "/ProductsTab/service1.webp",
    },
    "Coin Transactions": {
      sub: "Coin Transactions",
      href: "/services/coin-transactions",
      heading: "Digital Coin Transfers",
      paragraph:
        "Fast, verified, and secure crypto transactions with full tracking and wallet integration.",
      imageSrc: "/ProductsTab/service2.webp",
    },
    "Decentralized Finance": {
      sub: "Decentralized Finance (DeFi)",
      href: "/services/defi",
      heading: "Decentralized Finance",
      paragraph:
        "Access borderless lending, staking, and trading — powered by secure smart contracts.",
      imageSrc: "/ProductsTab/service3.webp",
    },
    Nfts: {
      sub: "NFTs",
      href: "/services/nfts",
      heading: "NFT Ecosystem",
      paragraph:
        "Build, mint, and grow your NFT brand with automated royalties and global exposure.",
      imageSrc: "/ProductsTab/service4.webp",
    },
    "Web3 Social Media": {
      sub: "Web3 Social Media",
      href: "/services/web3-social-media",
      heading: "Decentralized Social Platform",
      paragraph:
        "Empower users to earn, post, and connect through blockchain-based social engagement.",
      imageSrc: "/ProductsTab/service5.webp",
    },
    "Web3 Consultancy": {
      sub: "Web3 Consultancy",
      href: "/services/web3-consultancy",
      heading: "Web3 Development",
      paragraph:
        "Nova-Crest builds your Web3 journey with tailored blockchain solutions and end-to-end dApp support.",
      imageSrc: "/ProductsTab/service6.webp",
    },
  };

  return (
    <section
      className="relative"
      id="servicesTab"
      style={{
        margin: "0px 80px",
      }}
    >
      <div className="relative">
        {/* Top Heading Block */}
        <div className="mt-20 mb-16 px-4">
          <div className="flex justify-center">
            <div
              className="
                inline-flex items-center justify-center gap-4
                px-8 py-3 rounded-full
                border border-slate-200/80 bg-white/70 backdrop-blur
                shadow-sm
                dark:bg-slate-900/40 dark:border-slate-700/70
              "
            >
              <span className="h-px w-10 bg-slate-200 dark:bg-slate-700" />
              <span
                className={`text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-300 ${styles.kickerFont}`}
              >
                {sectionKicker}
              </span>
              <span className="h-px w-10 bg-slate-200 dark:bg-slate-700" />
            </div>
          </div>

          <h2
            className={`mt-6 text-center font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-950 dark:text-white ${styles.headingFont}`}
          >
            {sectionTitle}
          </h2>
        </div>

        {/* Content Sections */}
        {tabsName.map((tab, index) => {
          const { sub, heading, paragraph, imageSrc, href } = content[tab];
          const isEven = index % 2 === 0;

          return (
            <div
              key={tab}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className="my-20 md:my-20 lg:my-25 grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 sm:px-1 lg:px-10"
            >
              {/* Content Block */}
              <div
                className={`space-y-5 ${
                  isEven ? "md:order-1" : "md:order-2"
                } order-1`}
              >
                {/* Screenshot-like sub heading (dot + uppercase tracking) */}
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#296a92]/20 flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#296a92]" />
                  </span>

                  <h3
                    className={`uppercase font-extrabold tracking-[0.22em] text-[13px] sm:text-[15px] text-[#296a92] ${styles.subFont}`}
                  >
                    {sub}
                  </h3>
                </div>

                {/* Big bold heading */}
                <h1
                  className={`font-black tracking-[-0.03em] leading-[0.95] text-slate-950 dark:text-white text-[42px] sm:text-[56px] md:text-[72px] max-w-[720px] ${styles.headingFont}`}
                >
                  {heading}
                </h1>

                <p className="text-sm sm:text-base md:text-lg max-w-md text-slate-600 dark:text-slate-300 leading-relaxed">
                  {paragraph}
                </p>

                <Link href={href}>
                  <Button
                    showArrow
                    variant="secondary"
                    className="mt-2 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
                  >
                    Explore now
                  </Button>
                </Link>
              </div>

              {/* Image Block */}
              <div
                className={`flex justify-center ${
                  isEven ? "md:order-2" : "md:order-1"
                } order-2`}
              >
                <div className="w-[350px] h-[300px] sm:w-[350px] sm:h-[300px] lg:w-[520px] lg:h-[360px] relative overflow-hidden rounded-2xl shadow-2xl bg-gray-50 dark:bg-gray-800 border border-black/5 dark:border-white/10">
                  <Image
                    src={imageSrc}
                    alt={heading}
                    fill
                    className="object-cover hover:brightness-110 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          );
        })}

        {/* Sticky Bottom Tab Bar */}
        <div className="sticky bottom-0 bg-white/90 backdrop-blur-md shadow-md rounded-md border-t border-gray-200 dark:bg-slate-950/75 dark:border-slate-800">
          <ul
            className="
              flex flex-wrap justify-center md:justify-around gap-2 sm:gap-3 px-2 py-2
              max-h-[100px] overflow-y-auto sm:overflow-visible
            "
          >
            {tabsName.map((tab, index) => {
              const isActive = currentTab === tab;

              return (
                <li key={tab} className="flex">
                  <button
                    ref={(el) => {
                      tabRefs.current[index] = el;
                    }}
                    onClick={() => {
                      setCurrentTab(tab);
                      sectionRefs.current[index]?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className={`px-3 sm:px-5 py-2
                      text-xs sm:text-base font-medium
                      rounded-sm transition-all duration-300
                      truncate sm:whitespace-normal sm:truncate-none
                      ${
                        isActive
                          ? "bg-[#296a92] cursor-pointer text-white shadow-md"
                          : "bg-gray-100 cursor-pointer text-gray-700 hover:bg-gray-200 hover:text-black dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                      }`}
                  >
                    {tab}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
