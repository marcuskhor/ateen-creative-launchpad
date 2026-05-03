import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection, { TextReveal } from './AnimatedSection';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    company: '',
    brandStage: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke('send-inquiry', {
        body: formData,
      });
      if (error || !data?.success) throw new Error(error?.message || data?.error || 'Failed to send');
      toast.success('Inquiry sent. We will get back to you soon.');
      setFormData({
        fullName: '', phone: '', email: '', company: '',
        brandStage: '', budget: '', message: '',
      });
    } catch (err) {
      console.error(err);
      toast.error('Could not send your inquiry. Please try again or email hello@ateenwork.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

          <AnimatedSection delay={0.65}>
            <select
              name="brandStage"
              value={formData.brandStage}
              onChange={handleChange}
              className="form-input bg-transparent appearance-none cursor-pointer"
              required
            >
              <option value="" disabled className="bg-background text-foreground">CURRENT BRAND STAGE</option>
              <option value="new-brand" className="bg-background text-foreground">NEW BRAND — BUILDING FROM SCRATCH</option>
              <option value="existing-positioning" className="bg-background text-foreground">EXISTING BRAND — NEEDS CLEARER POSITIONING</option>
              <option value="existing-visual" className="bg-background text-foreground">EXISTING BRAND — NEEDS A VISUAL UPGRADE</option>
              <option value="existing-expanding" className="bg-background text-foreground">EXISTING BRAND — EXPANDING OR LAUNCHING NEW PRODUCTS</option>
              <option value="existing-consistency" className="bg-background text-foreground">EXISTING BRAND — NEEDS BETTER BRAND CONSISTENCY</option>
              <option value="other" className="bg-background text-foreground">NOT SURE / OTHER</option>
            </select>
          </AnimatedSection>

          <AnimatedSection delay={0.7}>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="form-input bg-transparent appearance-none cursor-pointer"
              required
            >
              <option value="" disabled className="bg-background text-foreground">BUDGET RANGE</option>
              <option value="under-10k" className="bg-background text-foreground">UNDER RM10,000</option>
              <option value="10k-30k" className="bg-background text-foreground">RM10,000 — RM30,000</option>
              <option value="30k-80k" className="bg-background text-foreground">RM30,000 — RM80,000</option>
              <option value="80k-above" className="bg-background text-foreground">RM80,000 AND ABOVE</option>
            </select>
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
                disabled={isSubmitting}
                className="text-primary tracking-[0.2em] text-sm font-medium relative group"
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span>{isSubmitting ? 'SENDING...' : 'SUBMIT →'}</span>
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
