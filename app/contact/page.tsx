"use client";
import React, { useState } from "react";
import { Mail, Linkedin, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen px-6 md:px-12 py-24">
      <div className="max-w-6xl mx-auto space-y-16 animate-fade-in-up">
        {/* Header */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold">CONTACT</h1>
          <div className="h-1 w-24 bg-foreground" />
          <p className="text-xl text-foreground/80 max-w-2xl">
            Let's collaborate on your next project. Get in touch and let's make
            something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Get in Touch</h2>

              <div className="space-y-5">
                <a
                  href="mailto:khairil114@gmail.com"
                  className="flex items-start space-x-4 group"
                >
                  <Mail className="w-6 h-6 mt-1 shrink-0" />
                  <div className="space-y-1">
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground group-hover:text-foreground transition-smooth">
                      khairil114@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+60133461650"
                  className="flex items-start space-x-4 group"
                >
                  <Phone className="w-6 h-6 mt-1 shrink-0" />
                  <div className="space-y-1">
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground group-hover:text-foreground transition-smooth">
                      +60 13-346 1650
                    </p>
                  </div>
                </a>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 mt-1 shrink-0" />
                  <div className="space-y-1">
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Selangor, Malaysia</p>
                  </div>
                </div>

                <a
                  href="https://linkedin.com/in/khairilazizee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 group"
                >
                  <Linkedin className="w-6 h-6 mt-1 shrink-0" />
                  <div className="space-y-1">
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-muted-foreground group-hover:text-foreground transition-smooth">
                      linkedin.com/in/khairilazizee
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-foreground bg-transparent focus:outline-none focus:border-accent transition-smooth"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-foreground bg-transparent focus:outline-none focus:border-accent transition-smooth"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-foreground bg-transparent focus:outline-none focus:border-accent transition-smooth resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-primary-foreground font-medium hover:bg-accent hover:text-accent-foreground transition-smooth"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
