'use client'

import React from 'react';
import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Footer from './footer'
import { motion, AnimatePresence } from 'framer-motion'
import { Roboto_Mono, Poppins } from 'next/font/google'

const robotoMono = Roboto_Mono({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '500', '600'], subsets: ['latin'] })

export function HomePage() {
  const [email, setEmail] = useState('')
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isExpanded, setIsExpanded] = useState(false)
  const [subscribeEmail, setSubscribeEmail] = useState('')
  const [showThankYou, setShowThankYou] = useState(false)

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
      ctx.fillStyle = '#F9FAFB' // bg-gray-50 color
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

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (subscribeEmail) {
      setShowThankYou(true)
      setSubscribeEmail('')
      setTimeout(() => setShowThankYou(false), 3000) // Hide the message after 3 seconds
    }
  }

  return (
    <div className={`flex flex-col ${poppins.className}`}>
      <main className="flex-1 flex flex-col">
        <section className="w-full py-40 sm:py-40 md:py-32 lg:py-28 xl:py-40 relative overflow-hidden bg-gray-50">
          <div ref={containerRef} className="mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50">
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
                    {isExpanded ? (
                      <motion.span
                        key="expanded"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-medium text-transparent block"
                      >
                        ✨ Introducing Arcade API
                      </motion.span>
                    ) : (
                      <motion.span
                        key="collapsed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-medium text-transparent"
                      >
                        ✨ Introducing Arcade API
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
                <div className="space-y-4 sm:space-y-6">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 tracking-wider leading-tight" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                    An 💻<span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text bg-300% animate-gradient">API</span> that Level Up 🚀 Your User<br />Experience through <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text bg-300% animate-gradient">Games </span>🕹️
                  </h1>
                  <p className="mx-auto max-w-[850px] text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-700">
                    Integrate exciting mini-games into your web or mobile app with just a few lines of code. Boost user engagement and retention effortlessly.
                  </p>
                </div>
                <div className="w-full max-w-md space-y-4">
                  <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    <motion.div
                      className="flex-1"
                      initial={{ scale: 1 }}
                      animate={{ scale: email ? 1.05 : 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <Input
                        className="w-full text-black"
                        placeholder="Enter your email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </motion.div>
                    <Button type="submit" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
                  </form>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Start integrating games today. No credit card required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="features" className="w-full py-16 sm:py-20 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16">
              <div className="md:w-1/3">
                <h2 className="text-2xl mb-4 sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 sticky top-9">Key Features of Arcade API</h2>
                <p className={`${poppins.className} text-lg sm:text-xl text-gray-600 sticky top-36`}>Fun-sized Games, Great User Experience: Integrate mini-games into your app with ease.</p>
              </div>
              <div className="md:w-2/3">
                <div className="space-y-12 sm:space-y-16 md:space-y-20">
                  <FeatureItem
                    number="01"
                    title="Rapid Integration"
                    description="Implement games in your app within minutes using our streamlined API and comprehensive documentation."
                  />
                  <FeatureItem
                    number="02"
                    title="Diverse Game Library"
                    description="Access a wide range of games suitable for various app types and user preferences, from casual to competitive."
                  />
                  <FeatureItem
                    number="03"
                    title="Enhanced User Engagement"
                    description="Increase user retention and satisfaction with engaging gameplay elements designed to keep users coming back."
                  />
                  <FeatureItem
                    number="04"
                    title="Developer-Centric Design"
                    description="Benefit from our well-documented, intuitive API and dedicated support to ensure smooth integration and development."
                  />
                  <FeatureItem
                    number="05"
                    title="Optimized Performance"
                    description="Enjoy fast, responsive gameplay across all devices and platforms, ensuring a seamless user experience."
                  />
                  <FeatureItem
                    number="06"
                    title="Robust Security Measures"
                    description="Protect your app and user data with our built-in security features and regular updates."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-16 sm:py-20 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-4 md:mb-6 text-gray-800">Game-Changer Pricing, Unfair Advantage</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-center mb-10 sm:mb-12 md:mb-16 text-gray-600">Choose the plan that fits your needs and watch your app soar</p>
            <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
              <PricingCard
                title="Starter"
                price="$9"
                description="Perfect for small projects and startups"
                freeTrial="14-day free trial"
                features={[
                  { name: "Up to 1000 API calls/month", included: true },
                  { name: "5 games included", included: true },
                  { name: "Basic support", included: true },
                  { name: "API documentation", included: true },
                  { name: "Custom branding", included: false },
                  { name: "Priority support", included: false },
                ]}
              />
              <PricingCard
                title="Pro"
                price="$99"
                description="Ideal for growing businesses"
                freeTrial="14-day free trial"
                features={[
                  { name: "Up to 10,000 API calls/month", included: true },
                  { name: "15 games included", included: true },
                  { name: "Priority support", included: true },
                  { name: "API documentation", included: true },
                  { name: "Custom branding", included: true },
                  { name: "Dedicated account manager", included: false },
                ]}
              />
              <PricingCard
                title="Enterprise"
                price="$199"
                description="For large-scale applications"
                freeTrial="30-day free trial"
                features={[
                  { name: "Unlimited API calls", included: true },
                  { name: "All games included", included: true },
                  { name: "24/7 dedicated support", included: true },
                  { name: "API documentation", included: true },
                  { name: "Custom branding", included: true },
                  { name: "Dedicated account manager", included: true },
                ]}
              />
            </div>
          </div>
        </section>
        <section id="subscribe" className="w-full py-16 sm:py-20 md:py-24 lg:py-32 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-6 sm:space-y-8 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">Stay Updated</h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl">
                Subscribe to our newsletter for the latest updates, game releases, and special offers.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row w-full max-w-md space-y-2 sm:space-y-0 sm:space-x-2">
                <Input
                  className="flex-grow text-black"
                  placeholder="Enter your email"
                  type="email"
                  value={subscribeEmail}
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <AnimatePresence>
            {showThankYou && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg"
              >
                Thank you for subscribing!
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>
      <Footer />
    </div>
  )
}

interface FeatureItemProps {
  number: string;
  title: string;
  description: string;
}

function FeatureItem({ number, title, description }: FeatureItemProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-start space-x-6">
        <div className={`${robotoMono.className} text-4xl sm:text-5xl font-bold text-blue-600 opacity-70`}>{number}</div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      <hr className="border-gray-200" />
    </div>
  )
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: { name: string; included: boolean }[];
  freeTrial?: string;
}

function PricingCard({ title, price, description, features, freeTrial }: PricingCardProps) {
  return (
    <div className="flex flex-col p-4 sm:p-6 bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-2 sm:mb-4">
        {price}<span className="text-base sm:text-lg font-normal text-gray-600">/month</span>
      </div>
      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{description}</p>
      {freeTrial && (
        <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-2 rounded-md mb-4">
          {freeTrial}
        </div>
      )}
      <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            {feature.included ? (
              <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
            <span className={`text-sm sm:text-base ${feature.included ? 'text-gray-600' : 'text-gray-400'}`}>{feature.name}</span>
          </li>
        ))}
      </ul>
      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-auto">Get Started</Button>
    </div>
  )
}