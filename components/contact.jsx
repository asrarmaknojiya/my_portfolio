"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("meevgwjy");

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "asrar.dev.in@gmail.com",
      href: "mailto:asrar.dev.in@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8625829857",
      href: "tel:+918625829857",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gujarat, India",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,var(--accent)_0%,transparent_40%)] opacity-10" />

      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <span className="section-subtitle">
            Get In Touch
          </span>

          <h2 className="section-title mb-5">
            Let's Connect
          </h2>

          <p className="section-description mx-auto text-center">
            Open for new opportunities, freelance work, and meaningful builds.
            If you have an idea, let's talk.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
          {/* Left Side */}
          <div className="space-y-5">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group flex items-center gap-5 glass-card !rounded-3xl p-6 hover:border-accent/30 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <item.icon size={22} className="text-accent group-hover:scale-110 transition-transform" />
                </div>

                <div>
                  <p className="text-sm text-textMuted">
                    {item.label}
                  </p>
                  <p className="text-title font-semibold">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Right Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card !rounded-[32px] p-8"
          >
            <h3 className="text-2xl font-bold text-title mb-8">
              Send Message
            </h3>

            {state.succeeded ? (
              <div className="rounded-2xl bg-accent/10 border border-accent/20 p-6 text-center">
                <p className="text-accent font-semibold text-lg">
                  Message sent successfully ✨
                </p>
                <p className="text-textMuted mt-2">
                  Thanks for reaching out. I'll reply soon.
                </p>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full rounded-2xl border border-border bg-background px-5 py-4 outline-none focus:border-accent"
                    />
                  </div>

                  <div>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="w-full rounded-2xl border border-border bg-background px-5 py-4 outline-none focus:border-accent"
                    />

                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-2"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    className="w-full rounded-2xl border border-border bg-background px-5 py-4 outline-none focus:border-accent"
                  />
                </div>

                <div className="mb-6">
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Your Message"
                    required
                    className="w-full rounded-2xl border border-border bg-background px-5 py-4 outline-none focus:border-accent resize-none"
                  />

                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-2"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="primary-btn w-full !py-4"
                >
                  <Send size={18} />
                  {state.submitting
                    ? "Sending..."
                    : "Send Message"}
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}