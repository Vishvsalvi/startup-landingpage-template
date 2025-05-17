"use client"
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full bg-background border-t border-zinc-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="md:col-span-1">
            <div className="mb-2 font-medium">
              Startup
            </div>
            <p className="text-foreground text-sm mb-4">
              AI-powered music creation for everyone
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a href="#" className="text-blue-500 transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
             
              <a href="#" className="text-blue-500 transition-colors">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-foreground font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-foreground hover:text-white text-sm transition-colors">Features</Link></li>
              <li><Link href="#" className="text-foreground hover:text-white text-sm transition-colors">Pricing</Link></li>
              <li><Link href="#" className="text-foreground hover:text-white text-sm transition-colors">API</Link></li>
              <li><Link href="#" className="text-foreground hover:text-white text-sm transition-colors">Integrations</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="md:col-span-1">
            <h3 className="text-foreground font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-foreground hover:text-white text-sm transition-colors">About</Link></li>
              <li><Link href="#" className="text-foreground hover:text-white text-sm transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-foreground hover:text-white text-sm transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-foreground hover:text-white text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-1">
            <h3 className="text-foreground font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-foreground hover:text-white text-sm transition-colors">Privacy</Link></li>
              <li><Link href="#" className="text-foreground hover:text-white text-sm transition-colors">Terms</Link></li>
              <li><Link href="#" className="text-foreground hover:text-white text-sm transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className=" mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground text-sm">
            © {new Date().getFullYear()} Startup. All rights reserved.
          </p>
          <p className="text-foreground text-sm mt-4 md:mt-0">
            Made with <span className='text-red-500'>♥</span> in California
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 