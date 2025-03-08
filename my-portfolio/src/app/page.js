"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div
      className="h-screen snap-y snap-mandatory overflow-y-scroll bg-cover bg-center bg-fixed text-gray-100 font-sans"
      style={{ backgroundImage: "url('/starry-night.jpg')" }}  // Place your starry-night.jpg in the public folder
    >
      
      {/* Section 1: Greeting */}
      <motion.section
        id="home"
        className="snap-start flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-purple-800 via-blue-900 to-pink-800 bg-opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-extrabold mb-4 text-white drop-shadow-lg">
          Hayden Le
        </h1>
        <p className="text-2xl text-cyan-300">Welcome to my digital realm</p>
      </motion.section>

      {/* Section 2: About */}
      <motion.section
        id="about"
        className="snap-start flex items-center justify-center min-h-screen p-8"
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-gradient-to-br from-gray-900 to-gray-800 bg-opacity-80 p-8 rounded-lg shadow-xl">
          {/* Left Column: Image & Skills */}
          <div className="flex flex-col items-center space-y-6">
            
            {/* Square Image without Dark Overlay */}
            <div className="relative w-64 h-64">
              <img
                src="/profile_photo.jpg"  
                alt="Profile"
                className="w-full h-full object-cover rounded-lg filter brightness-105"
              />
            </div>
            
            {/* Skills Section with Hover Effect */}
            <motion.div
              className="w-full p-4 bg-gray-900 rounded-lg border border-cyan-500 transform transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">Skills</h3>
              <ul className="list-disc pl-5 text-lg text-cyan-200">
                <li>Artificial Intelligence &amp; Machine Learning</li>
                <li>Cloud Computing</li>
                <li>Full-Stack Development</li>
                <li>Data Analysis &amp; Visualization</li>
              </ul>
            </motion.div>
          </div>
          
          {/* Right Column: About Paragraph */}
          <div className="flex flex-col justify-center">
            <p className="text-lg leading-relaxed">
              I am a Computer Science &amp; Data Science student at the University of Sydney. My passion lies in harnessing the power of technology to solve real-world challenges. I enjoy working on cutting-edge projects that leverage AI, cloud computing, and full-stack development to create innovative solutions.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Section 3: Projects */}
      <motion.section
        id="projects"
        className="snap-start flex flex-col justify-center items-center min-h-screen p-8 bg-gray-800 bg-opacity-90"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-cyan-400">Projects</h2>
        <div className="w-full max-w-3xl space-y-6">
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-900 border border-cyan-500 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2 text-white">GOpti - AI-Powered Itinerary Planner</h3>
            <p className="text-lg">
              Developed an NP-Hard solving algorithm to optimize travel plans across Sydney’s Vivid Festival in real-time.{' '}
              <a href="https://github.com/NhatHuyLe/VividPlanner" className="text-cyan-300 hover:underline">View on GitHub</a>
            </p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-900 border border-cyan-500 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2 text-white">Spotifeye - Hands-Free Music Control</h3>
            <p className="text-lg">
              Implemented an eye-tracking system to control Spotify hands-free using blinks and movements.
              Achieved &lt;1s latency with 80%+ accuracy.{' '}
              <a href="#" className="text-cyan-300 hover:underline">View on GitHub</a>
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 4: Contact */}
      <motion.section
        id="contact"
        className="snap-start flex flex-col justify-center items-center min-h-screen p-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-cyan-400">Get in Touch</h2>
        <div className="text-lg space-y-4 text-center">
          <p>Email: <a href="mailto:huyln.work@gmail.com" className="text-cyan-300 hover:underline">huyln.work@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/hylehyle/" className="text-cyan-300 hover:underline">linkedin.com/in/hylehyle</a></p>
          <p>GitHub: <a href="https://github.com/Hayden-Le" className="text-cyan-300 hover:underline">github.com/Hayden-Le</a></p>
        </div>
      </motion.section>
      
      {/* Optional Navigation Menu */}
      <motion.nav
        className="fixed top-4 right-4 bg-gray-800 bg-opacity-90 p-4 rounded-lg shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <ul className="flex flex-col space-y-2">
          <li><a href="#home" className="text-cyan-300 hover:underline">Home</a></li>
          <li><a href="#about" className="text-cyan-300 hover:underline">About</a></li>
          <li><a href="#projects" className="text-cyan-300 hover:underline">Projects</a></li>
          <li><a href="#contact" className="text-cyan-300 hover:underline">Contact</a></li>
        </ul>
      </motion.nav>
      
    </div>
  );
}
