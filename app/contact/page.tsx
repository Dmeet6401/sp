"use client"

import type React from "react"

import { useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    country: "",
    message: "",
  })
  const [feedback, setFeedback] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setFeedback('Your message has been sent successfully!');
      } else {
        setFeedback('There was an error submitting your message.');
      }
    } catch (error) {
      setFeedback('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=400&width=1200"
            alt="Ceramic Tiles Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
          <nav className="text-blue-200">
            <span className="hover:text-white cursor-pointer">HOME</span>
            <span className="mx-2">&gt;</span>
            <span className="text-white">CONTACT US</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Get in Touch Section */}
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">GET IN TOUCH</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">CORPORATE ADDRESS</h3>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div className="text-gray-700">
                      <p>Star Plaza, Ground Floor, Shop No.3,
                      B/h. Vishal Furniture,</p>
                      <p>8-A, National Highway, MORBI - 363 642</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">+91 99980 22554</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">export@starporselano.com</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">Mon - Sat : 10:00 - 20:00 IST</span>
                  </div>
                </div>

                {/* Additional Contact Information */}
                <div className="mt-8 pt-6 border-t border-blue-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Other Departments</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>e-mail Us: </strong>starporselano@gmail.com
                    </p>
                    
                    
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">CONNECT WITH US?</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="YOUR NAME"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="PHONE NO."
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="YOUR EMAIL"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="company"
                    placeholder="COMPANY NAME"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Input
                    type="text"
                    name="country"
                    placeholder="COUNTRY NAME"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="YOUR MESSAGE"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-md font-semibold flex items-center"
                >
                  <Send className="mr-2 h-4 w-4" />
                  SEND MESSAGE
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our showroom and manufacturing facility to see our premium ceramic and porcelain tiles collection
            </p>
          </div>

          <div className="bg-gray-200 rounded-lg overflow-hidden" style={{ height: "400px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.5684917518806!2d70.86128357476423!3d22.818447723915895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39598dcfbdc39d41%3A0x6ca9f78926f19f81!2sVishal%20Furniture!5e0!3m2!1sen!2sin!4v1749814351191!5m2!1sen!2sin" 
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent>
                <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600 mb-2">+91 985 982 4444</p>
                <p className="text-sm text-gray-500">Mon - Sat: 10:00 - 20:00 IST</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent>
                <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600 mb-2">export@starporselano.com</p>
                <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent>
                <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-2">Star Ceramic Plaza, Gujarat</p>
                <p className="text-sm text-gray-500">See our showroom collection</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
