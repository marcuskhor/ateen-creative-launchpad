import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

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
    // Handle form submission
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
            START A PROJECT
          </h2>
          <p className="text-sm text-primary tracking-[0.2em] mb-12">
            ENQUIRY FORM
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <form onSubmit={handleSubmit} className="max-w-2xl space-y-8">
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="FULL NAME"
                value={formData.fullName}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="PHONE NUMBER"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div>
              <input
                type="text"
                name="company"
                placeholder="COMPANY / INDUSTRY"
                value={formData.company}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="TELL US ABOUT YOUR BRAND. WE WILL TAKE IT FROM THERE."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="form-input resize-none"
                required
              />
            </div>

            <div className="flex justify-end">
              <motion.button
                type="submit"
                className="text-primary tracking-[0.2em] text-sm font-medium relative group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                SUBMIT
                <span className="absolute -bottom-1 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.button>
            </div>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
