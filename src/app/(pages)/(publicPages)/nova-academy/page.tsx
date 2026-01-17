"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, PlayCircle, BookOpen, Tag, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const categories = ["All", "Blockchain", "DeFi", "NFTs", "Web3", "Trading"];

const blogs = [
  {
    id: 1,
    title: "Understanding Blockchain Basics",
    category: "Blockchain",
    image: "/academy/blog-1.webp",
    excerpt:
      "Learn the principles behind blockchain technology and how it's reshaping industries globally.",
    date: "Oct 10, 2025",
  },
  {
    id: 2,
    title: "How DeFi is Changing Finance",
    category: "DeFi",
    image: "/academy/blog-2.webp",
    excerpt:
      "Dive into decentralized finance — understand yield farming, liquidity pools, and why DeFi matters.",
    date: "Oct 12, 2025",
  },
  {
    id: 3,
    title: "NFTs and the Future of Digital Ownership",
    category: "NFTs",
    image: "/academy/blog-3.webp",
    excerpt:
      "Discover how NFTs redefine creativity, digital ownership, and new asset classes.",
    date: "Oct 15, 2025",
  },
  {
    id: 4,
    title: "Web3: The Decentralized Internet Revolution",
    category: "Web3",
    image: "/academy/blog-4.jpg",
    excerpt:
      "Explore the core ideas behind Web3 — decentralization, identity, and user-owned ecosystems.",
    date: "Oct 17, 2025",
  },
  {
    id: 5,
    title: "Trading Crypto Like a Pro",
    category: "Trading",
    image: "/academy/blog-5.webp",
    excerpt:
      "Advanced trading strategies, market psychology, and risk management tips for serious traders.",
    date: "Oct 18, 2025",
  },
  {
    id: 6,
    title: "Smart Contracts Explained",
    category: "Blockchain",
    image: "/academy/blog-6.webp",
    excerpt:
      "Understand how smart contracts automate trustless transactions across Web3 applications.",
    date: "Oct 19, 2025",
  },
];

const videos = [
  {
    id: 1,
    title: "Introduction to Web3",
    category: "Blockchain Basics",
    thumbnail: "/academy/web3.webp", // store a JPG in /public/videos
    src: "/academy/web3.mp4", // store an MP4 in /public/videos
  },
  {
    id: 2,
    title: "Understanding DeFi",
    category: "DeFi Education",
    thumbnail: "/academy/defi.webp",
    src: "/academy/defi.mp4",
  },
  {
    id: 3,
    title: "What is Blockchain",
    category: "Blockchain Basics",
    thumbnail: "/academy/blockchain.webp",
    src: "/academy/blockchain.mp4",
  },
];

export default function NovaAcademyPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const filteredBlogs = blogs.filter(
    (b) =>
      (selectedCategory === "All" || b.category === selectedCategory) &&
      b.title.toLowerCase().includes(search.toLowerCase()),
  );

  // const filteredVideos = videos.filter(
  //   (v) =>
  //     (selectedCategory === "All" || v.category === selectedCategory) &&
  //     v.title.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Background SVG pattern */}
      <svg
        className="absolute top-0 left-0 w-full opacity-10 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="url(#grad)"
          fillOpacity="1"
          d="M0,192L80,208C160,224,320,256,480,266.7C640,277,800,267,960,250.7C1120,235,1280,213,1360,202.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
        <defs>
          <linearGradient id="grad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#1e597c" />
            <stop offset="100%" stopColor="#00b4ff" />
          </linearGradient>
        </defs>
      </svg>
      {/* Hero Section */}
      <section className="text-center py-20 px-4 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold primary-color ">
            Nova Academy
          </h1>
          <p className="text-lg md:text-xl mt-6 max-w-2xl mx-auto text-gray-600">
            Learn Blockchain, Web3, NFTs, and DeFi — all in one place. Knowledge
            powered by Nova.
          </p>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-radial from-[#1e597c10] via-transparent to-transparent"></div>
      </section>

      {/* Search + Filter */}
      <div className="max-w-6xl mx-auto px-4 mt-4 flex flex-col  items-center justify-between gap-4">
        <div className="relative w-full md:w-1/2">
          <Search className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search blogs or videos..."
            className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1e597c] shadow-sm transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              className={`rounded-full px-5 py-2 transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-[#1e597c] to-[#b366ff] text-white shadow-md"
                  : "bg-transparent border border-gray-300 text-gray-700 hover:border-[#1e597c]"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              <Tag size={14} className="mr-1" /> {cat}
            </Button>
          ))}
        </div>
      </div>

      {/* Blogs Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="text-[#1e597c]" size={28} />
          <h2 className="text-3xl font-semibold">Latest Blogs</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="rounded-2xl overflow-hidden bg-white border border-gray-200 hover:shadow-xl hover:border-[#1e597c60] transition-all duration-300"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={250}
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <p className="text-sm text-[#1e597c] font-semibold uppercase tracking-wide">
                  {blog.category}
                </p>
                <h3 className="text-xl font-bold mt-2">{blog.title}</h3>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <span>{blog.date}</span>
                  <Link
                    href={`/nova-academy/${blog.id}`}
                    className="text-[#1e597c] hover:text-[#b366ff] font-medium transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Videos Section */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <PlayCircle className="text-[#1e597c]" size={28} />
          <h2 className="text-3xl font-semibold text-gray-900">
            Educational Videos
          </h2>
        </div>

        {/* Video Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="rounded-2xl overflow-hidden bg-white border border-gray-200 hover:shadow-xl hover:border-[#1e597c60] transition-all cursor-pointer"
              onClick={() => setSelectedVideo(video.src)}
            >
              <div className="relative">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={400}
                  height={250}
                  className="w-full h-52 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <PlayCircle size={48} className="text-white" />
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-[#1e597c] font-semibold uppercase tracking-wide">
                  {video.category}
                </p>
                <h3 className="text-xl font-bold mt-2 text-gray-900">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
            <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl">
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full h-auto bg-black rounded-2xl"
              />
              <Button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-3 right-3 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition"
              >
                <X size={22} />
              </Button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
