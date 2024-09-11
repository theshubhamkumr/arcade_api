'use client'

import { Check } from "lucide-react"
import Footer from '@/components/footer'

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

export function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col items-center justify-center">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden bg-gray-50">
          <FloatingStars />
          <div className="container px-4 md:px-6 relative z-10 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold text-zinc-900 tracking-wider sm:text-4xl md:text-5xl lg:text-6xl/none">
                Choose Your <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text bg-300% animate-gradient">Plan</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-zinc-800 md:text-xl">
                Select the perfect plan for your needs and start integrating exciting mini-games into your app today.
              </p>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
        <section id="subscribe" className="w-full py-16 md:py-24 lg:py-32 bg-gray-100">
        </section>
      </main>
      <Footer />
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
    <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="mt-4 text-4xl font-bold">{price}<span className="text-xl font-normal">/month</span></div>
      <p className="mt-2 text-zinc-600">{description}</p>
      <ul className="mt-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="mr-2 h-5 w-5 text-green-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className="mt-8 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
        Choose Plan
      </button>
    </div>
  )
}