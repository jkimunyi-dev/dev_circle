"use client"

import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Menu, X } from "lucide-react";
import { useState } from 'react';

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Documentation', href: '#docs' },
    { name: 'Community', href: '#community' },
    { name: 'Pricing', href: '#pricing' },
	
  ];

  const partners = [
    { name: 'Meta', logo: 'M', color: '#0668E1' },
    { name: 'Apple', logo: 'A', color: '#555555' },
    { name: 'Amazon', logo: 'A', color: '#FF9900' },
    { name: 'Netflix', logo: 'N', color: '#E50914' },
    { name: 'Google', logo: 'G', color: '#4285F4' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-gray-900">DevHub</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <Button variant="default">
                  <Github className="mr-2 h-4 w-4" />
                  Sign In
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900"
                >
                  {item.name}
                </a>
              ))}
              <Button className="w-full mt-4" variant="default">
                <Github className="mr-2 h-4 w-4" />
                Sign In
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="pt-24 pb-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900">
                  Where Developers Unite
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Build, collaborate, and ship amazing products with our developer-first platform. Join thousands of developers who trust our tools.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
                  Get Started
                </Button>
                <Button size="lg" variant="outline">
                  View Documentation
                </Button>
              </div>

              <div className="pt-16">
                <p className="text-sm text-gray-500 mb-8">
                  Trusted by developers at leading companies
                </p>
                <div className="flex justify-center flex-wrap gap-8">
                  {partners.map((partner) => (
                    <div
                      key={partner.name}
                      className="group relative"
                    >
                      <span
                        className="text-3xl font-bold transition-colors duration-300 filter grayscale group-hover:filter-none"
                        style={{ color: partner.color }}
                      >
                        {partner.logo}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;