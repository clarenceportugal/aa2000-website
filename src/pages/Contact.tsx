import { useState, ChangeEvent, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { PageHead } from '../components/ui/PageHead';
import { contactSchema, type ContactFormData } from '../lib/validations';

const initialFormData: ContactFormData = { name: '', email: '', subject: '', message: '' };

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target;
    setFormData({ ...formData, [target.name]: target.value });
    if (errors[target.name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [target.name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const path = err.path[0] as keyof ContactFormData;
        fieldErrors[path] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    alert('Message sent! We will contact you shortly.');
  };

  return (
    <article className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <PageHead
        title="Contact"
        description="Get in touch with AA2000 Security. Request a free quote or site assessment today."
      />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h1>
            <p className="text-slate-600 text-lg">
              Ready to secure your property? Request a free quote or site assessment today.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { icon: <Phone className="h-6 w-6 text-aa-blue" />, title: "Phone", content: "+1 (555) 123-4567" },
              { icon: <MessageCircle className="h-6 w-6 text-aa-blue" />, title: "Viber", content: "+1 (555) 123-4567" },
              { icon: <Mail className="h-6 w-6 text-aa-blue" />, title: "Email", content: "info@aa2000security.com" },
              { icon: <MapPin className="h-6 w-6 text-aa-blue" />, title: "Office", content: "DMG Streets, Unit 2C Norkis Building 11, Cor Calbayog St, Mandaluyong City, 1550" },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="p-3 bg-white-light rounded-lg">{item.icon}</div>
                <div>
                  <h3 className="text-slate-900 font-bold">{item.title}</h3>
                  <p className="text-slate-600">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white-light p-8 rounded-2xl border border-slate-200/50 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                className={`w-full bg-white border rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-1 transition-all ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-slate-200-light focus:border-aa-blue focus:ring-aa-blue'}`}
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                className={`w-full bg-white border rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-1 transition-all ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-slate-200-light focus:border-aa-blue focus:ring-aa-blue'}`}
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">Subject</label>
              <select
                name="subject"
                className={`w-full bg-white border rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-1 transition-all ${errors.subject ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-slate-200-light focus:border-aa-blue focus:ring-aa-blue'}`}
                value={formData.subject}
                onChange={handleChange}
              >
                <option value="">Select a topic</option>
                <option value="Quote">Request Free Quote</option>
                <option value="Assessment">Request Site Assessment</option>
                <option value="Support">Technical Support</option>
                <option value="Other">Other</option>
              </select>
              {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">Message</label>
              <textarea
                name="message"
                rows={4}
                className={`w-full bg-white border rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-1 transition-all ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-slate-200-light focus:border-aa-blue focus:ring-aa-blue'}`}
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-aa-blue text-slate-900 rounded-lg font-bold hover:bg-aa-blue-dark transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-aa-blue/20"
            >
              <span>Send Message</span>
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </article>
  );
};

export default Contact;
