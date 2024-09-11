'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Zap, Puzzle, Users, Code, Gauge, Shield, Check } from "lucide-react"
import Footer from './footer'
import { motion } from 'framer-motion'

const FloatingStars = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(50)].map((_, i) => (
      <div
        key={i}
        className="absolute bg-blue-500 opacity-30"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 4 + 2}px`,
          height: `${Math.random() * 4 + 2}px`,
          borderRadius: '50%',
          boxShadow: '0 0 8px 3px rgba(59, 130, 246, 0.7)',
          animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite alternate, float ${Math.random() * 10 + 5}s linear infinite`,
        }}
      />
    ))}
  </div>
)

export function HomePage() {
  const [email, setEmail] = useState('')

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col items-center justify-center">
        <section className="w-full py-8 sm:py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden bg-gray-50">
          <FloatingStars />
          <div className="container px-4 sm:px-6 lg:px-8 relative z-10 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div
                className="px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-xs font-medium transition-all duration-300 ease-in-out relative overflow-hidden transform hover:scale-105 hover:shadow-lg"
                style={{
                  background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, #3b82f6, #8b5cf6) border-box',
                  border: '2px solid transparent',
                }}
              >
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-medium text-transparent hover:animate-pulse">
                ✨ Introducing Arcade API
                </span>
              </div>
              <div className="space-y-2 sm:space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-zinc-900 tracking-wider">
                  An <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text bg-300% animate-gradient">API</span> that Level Up 🚀Your User Experience
                </h1>
                <p className="mx-auto max-w-[700px] text-sm sm:text-base md:text-lg lg:text-xl text-zinc-800">
                  Integrate exciting mini-games into your web or mobile app with just a few lines of code. Boost user engagement and retention effortlessly.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-4">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mt-5">
                  <motion.div
                    className="flex-1"
                    initial={{ scale: 1 }}
                    animate={{ scale: email ? 1.05 : 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <Input
                      className="max-w-lg w-full text-black"
                      placeholder="Enter your email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </motion.div>
                  <Button type="submit" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
                </form>
                <p className="text-xs text-gray-500">
                  Start integrating games today. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-gray-800">Why Choose Arcade API?</h2>
            <div className="grid gap-6 sm:gap-8 md:gap-12 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<Zap className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-yellow-400" />}
                title="Lightning-Fast Integration"
                description="Get your games up and running in minutes, not hours."
                color="bg-yellow-100"
              />
              <FeatureCard
                icon={<Puzzle className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-green-500" />}
                title="Endless Possibilities"
                description="A vast library of games to suit every app and audience."
                color="bg-green-100"
              />
              <FeatureCard
                icon={<Users className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-blue-500" />}
                title="Skyrocket Engagement"
                description="Keep users coming back with addictive gameplay."
                color="bg-blue-100"
              />
              <FeatureCard
                icon={<Code className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-purple-500" />}
                title="Developer-Friendly"
                description="Clean, intuitive API that's a joy to work with."
                color="bg-purple-100"
              />
              <FeatureCard
                icon={<Gauge className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-red-500" />}
                title="Blazing Performance"
                description="Optimized for speed on all devices and platforms."
                color="bg-red-100"
              />
              <FeatureCard
                icon={<Shield className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-indigo-500" />}
                title="Rock-Solid Security"
                description="Built-in protections to keep your users safe."
                color="bg-indigo-100"
              />
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-gray-800">Transparent Pricing, Unfair Advantage</h2>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              <PricingCard
                title="Starter"
                price="$9"
                description="Perfect for small projects and startups"
                features={[
                  "Up to 1000 API calls/month",
                  "5 games included",
                  "Basic support",
                  "API documentation"
                ]}
              />
              <PricingCard
                title="Pro"
                price="$99"
                description="Ideal for growing businesses"
                features={[
                  "Up to 10,000 API calls/month",
                  "15 games included",
                  "Priority support",
                  "API documentation",
                  "Custom branding"
                ]}
              />
              <PricingCard
                title="Enterprise"
                price="$999"
                description="For large-scale applications"
                features={[
                  "Unlimited API calls",
                  "All games included",
                  "24/7 dedicated support",
                  "API documentation",
                  "Custom branding",
                  "Dedicated account manager"
                ]}
              />
            </div>
          </div>
        </section>
        <section id="subscribe" className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Stay Updated</h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl">
                Subscribe to our newsletter for the latest updates, game releases, and special offers.
              </p>
              <form className="flex flex-col sm:flex-row w-full max-w-md space-y-2 sm:space-y-0 sm:space-x-2">
                <Input
                  className="flex-grow"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

function FeatureCard({ icon, title, description, color }: FeatureCardProps) {
  return (
    <div className={`${color} rounded-xl p-4 sm:p-6 md:p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}>
      <div className="flex items-center mb-2 sm:mb-4">
        <div className="mr-3 sm:mr-4">{icon}</div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-sm sm:text-base text-gray-600">{description}</p>
    </div>
  )
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
}

function PricingCard({ title, price, description, features }: PricingCardProps) {
  return (
    <div className="flex flex-col p-4 sm:p-6 bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-2 sm:mb-4">{price}<span className="text-base sm:text-lg font-normal text-gray-600">/month</span></div>
      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{description}</p>
      <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2" />
            <span className="text-sm sm:text-base text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-auto">Get Started</Button>
    </div>
  )
}