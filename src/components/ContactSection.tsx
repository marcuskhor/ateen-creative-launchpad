import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AnimatedSection, { LineReveal, TextReveal } from './AnimatedSection';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    company: '',
    message: '',
  });

  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: false, amount: 0.2 });

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

  const inputFields = [
    { name: 'fullName', type: 'text', placeholder: 'FULL NAME', required: true },
    { name: 'phone', type: 'tel', placeholder: 'PHONE NUMBER', required: false },
    { name: 'email', type: 'email', placeholder: 'EMAIL', required: true },
    { name: 'company', type: 'text', placeholder: 'COMPANY / INDUSTRY', required: false },
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container px-6 md:px-12">
        <AnimatedSection>
          <h2 className="text-heading font-light tracking-wide text-foreground mb-4">
            <TextReveal text="START A PROJECT" staggerDelay={0.04} />
          </h2>
        </AnimatedSection>
        
        <AnimatedSection delay={0.1}>
          <p className="text-sm text-primary tracking-[0.2em] mb-16">
            ENQUIRY FORM
          </p>
        </AnimatedSection>

        <form ref={formRef} onSubmit={handleSubmit} className="max-w-2xl space-y-0">
          {inputFields.map((field, index) => (
            <motion.div
              key={field.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.5, 
                delay: isFormInView ? index * 0.08 : 0,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                className="form-input"
                required={field.required}
              />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ 
              duration: 0.5, 
              delay: isFormInView ? 0.32 : 0,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <textarea
              name="message"
              placeholder="TELL US ABOUT YOUR BRAND. WE WILL TAKE IT FROM THERE."
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="form-input resize-none"
              required
            />
          </motion.div>

          <motion.div 
            className="flex justify-end pt-8"
            initial={{ opacity: 0 }}
            animate={isFormInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.button
              type="submit"
              className="text-primary tracking-[0.2em] text-sm font-medium relative group overflow-hidden"
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <span className="relative z-10">SUBMIT →</span>
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-px bg-primary"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0 }}
              />
            </motion.button>
          </motion.div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
