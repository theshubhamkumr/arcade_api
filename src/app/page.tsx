'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [showError, setShowError] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawGrid(ctx)
    }

    const drawGrid = (ctx: CanvasRenderingContext2D) => {
      ctx.fillStyle = '#F9FAFB'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.strokeStyle = 'rgba(59, 130, 246, 0.08)'
      ctx.lineWidth = 1

      const cellSize = 50
      const cols = Math.ceil(canvas.width / cellSize)
      const rows = Math.ceil(canvas.height / cellSize)

      for (let i = 0; i <= cols; i++) {
        ctx.beginPath()
        ctx.moveTo(i * cellSize, 0)
        ctx.lineTo(i * cellSize, canvas.height)
        ctx.stroke()
      }

      for (let i = 0; i <= rows; i++) {
        ctx.beginPath()
        ctx.moveTo(0, i * cellSize)
        ctx.lineTo(canvas.width, i * cellSize)
        ctx.stroke()
      }
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch('/api/waitlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (data.message === 'Email added to waitlist') {
      setShowThankYou(true);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <section 
      className="w-full h-screen py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 relative bg-gray-50 overflow-hidden"
      data-page-instance="home"
    >
      <div ref={containerRef} className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 bg-gray-50">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 0 }}
        />
        <div className="relative z-10">
          <div className="flex flex-col items-center space-y-6 sm:space-y-8 md:space-y-10 text-center">
            <motion.div
              className="px-3 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ease-in-out relative overflow-hidden transform hover:scale-105 hover:shadow-lg cursor-pointer"
              style={{
                background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, #3b82f6, #8b5cf6) border-box',
                border: '2px solid transparent',
              }}
              onClick={() => setIsExpanded(!isExpanded)}
              layout
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={isExpanded ? "expanded" : "collapsed"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-medium text-transparent block"
                >
                  ✨ Join Arcade API Waitlist
                </motion.span>
              </AnimatePresence>
            </motion.div>
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 tracking-wider leading-tight" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                Level Up 🚀 Your User Experience<br />with <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text bg-300% animate-gradient">Arcade API</span> 🕹️
              </h1>
              <p className="mx-auto max-w-[850px] text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-700">
                Integrate exciting mini-games into your web or mobile app with just a few lines of code. Boost user engagement and retention effortlessly.
              </p>
            </div>
            <div className="w-full max-w-md space-y-4">
              {showThankYou ? (
                <div className="text-center text-2xl text-blue-600 mt-4 font-bold">Thanks for joining! We&apos;ll be in touch soon!</div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <motion.div
                    className="flex-1"
                    initial={{ scale: 1 }}
                    animate={{ scale: email ? 1.05 : 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <input
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                      placeholder="Enter your email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </motion.div>
                  <button type="submit" className="w-full sm:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-300">Join Waitlist</button>
                </form>
              )}
              {showError && (
                <div className="text-center text-red-600 mt-4 font-bold">Email already exists!</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}