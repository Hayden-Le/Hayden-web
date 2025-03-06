"use client";

"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6 font-sans">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold">Your Name</h1>
        <p className="text-lg mt-2">Full-Stack Developer | JavaScript Enthusiast</p>
      </motion.header>

      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-6 text-center"
      >
        <ul className="flex justify-center space-x-6">
          <li><a href="#about" className="text-blue-500 hover:underline">About</a></li>
          <li><a href="#projects" className="text-blue-500 hover:underline">Projects</a></li>
          <li><a href="#contact" className="text-blue-500 hover:underline">Contact</a></li>
        </ul>
      </motion.nav>

      <motion.section
        id="about"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-8 max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="mt-2 text-lg">
          I'm a passionate full-stack web developer with a love for JavaScript and modern web technologies.
          I enjoy solving problems, creating user-friendly experiences, and continuously learning new things.
        </p>
      </motion.section>

      <motion.section
        id="projects"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-8 max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="mt-4 space-y-4">
          <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-medium">Project 1</h3>
            <p>Building modern web applications with cutting-edge technologies. <a href="#" className="text-blue-500 hover:underline">View on GitHub</a></p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-8 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p>Email: <a href="mailto:your.email@example.com" className="text-blue-500 hover:underline">your.email@example.com</a></p>
        <p>GitHub: <a href="https://github.com/yourgithub" className="text-blue-500 hover:underline">github.com/yourgithub</a></p>
      </motion.section>
    </div>
  );
}
