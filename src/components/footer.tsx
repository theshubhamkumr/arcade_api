import Link from 'next/link'
import { Github, Twitter } from "lucide-react"
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: ['400', '500', '600'], subsets: ['latin'] })

export default function Footer() {
  return (
    <footer className={`${poppins.className} flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200 dark:border-gray-700`}>
      <p className="text-xs text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Arcade API. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500 dark:text-gray-400">
          Terms of Service
        </Link>
        <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500 dark:text-gray-400">
          Privacy
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
        <Link href="#" className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </Link>
        <Link href="#" className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
          <Twitter className="h-5 w-5" />
          <span className="sr-only">Twitter</span>
        </Link>
      </div>
    </footer>
  )
}