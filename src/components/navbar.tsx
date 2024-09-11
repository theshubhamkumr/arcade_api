'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-gray-50 border-b border-gray-500 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-black">
                Arcade API
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink href="/pricing" text="Pricing" />
                <NavLink href="#" text="About" />
                <NavLink href="#" text="Marketplace" />
                <NavLink href="#" text="Documentation" />
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="default" className="bg-blue-600 text-white hover:bg-blue-700">
              Get Started
            </Button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="/pricing" text="Pricing" />
            <MobileNavLink href="#" text="About" />
            <MobileNavLink href="#" text="Marketplace" />
            <MobileNavLink href="#" text="Documentation" />
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center justify-end px-5">
              <Button variant="default" className="bg-blue-600 text-white hover:bg-blue-700">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLink({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      className="text-zinc-800  hover:bg-blue-50 hover:text-purple-500 px-3 py-2 rounded-md text-base font-medium"
    >
      {text}
    </Link>
  )
}

function MobileNavLink({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      className="text-zinc-800 hover:bg-blue-50 hover:text-purple-500 block px-3 py-2 rounded-md text-base font-medium"
    >
      {text}
    </Link>
  )
}