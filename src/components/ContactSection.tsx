import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection, { TextReveal } from './AnimatedSection';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container px-6 md:px-12">
        <AnimatedSection>
          <h2 className="text-heading font-light tracking-wide text-foreground mb-4">
            <TextReveal text="START A PROJECT" staggerDelay={0.06} />
          </h2>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <p className="text-sm text-primary tracking-[0.2em] mb-16">
            ENQUIRY FORM
          </p>
        </AnimatedSection>

        <form onSubmit={handleSubmit} className="max-w-2xl space-y-0">
          <AnimatedSection delay={0.3}>
            <input
              type="text"
              name="fullName"
              placeholder="FULL NAME"
              value={formData.fullName}
              onChange={handleChange}
              className="form-input"
              required
            />
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <input
              type="tel"
              name="phone"
              placeholder="PHONE NUMBER"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <input
              type="text"
              name="company"
              placeholder="COMPANY / INDUSTRY"
              value={formData.company}
              onChange={handleChange}
              className="form-input"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.7}>
            <textarea
              name="message"
              placeholder="TELL US ABOUT YOUR BRAND. WE WILL TAKE IT FROM THERE."
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="form-input resize-none"
              required
            />
          </AnimatedSection>

          <AnimatedSection delay={0.8}>
            <div className="flex justify-end pt-8">
              <motion.button
                type="submit"
                className="text-primary tracking-[0.2em] text-sm font-medium relative group"
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span>SUBMIT →</span>
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-px bg-primary"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{ originX: 0 }}
                />
              </motion.button>
            </div>
          </AnimatedSection>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
