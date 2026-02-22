import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { FOOTER_QUICK_LINKS } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-aa-navy border-t border-aa-navy/50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <ShieldCheck className="h-8 w-8 text-aa-blue" />
              <span className="text-xl font-bold text-white">AA2000</span>
            </div>
            <p className="text-aa-slate text-sm leading-relaxed">
              Leading provider of CCTV, Fire Alarm, and Burglar Alarm systems.
              Securing your future with advanced technology solutions.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-aa-slate hover:text-aa-cyan text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li className="text-aa-slate text-sm">CCTV Surveillance</li>
              <li className="text-aa-slate text-sm">Fire Detection</li>
              <li className="text-aa-slate text-sm">Burglar Alarms</li>
              <li className="text-aa-slate text-sm">Access Control</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-aa-blue shrink-0" />
                <span className="text-aa-slate text-sm">DMG Streets, Unit 2C Norkis Building 11, Cor Calbayog St, Mandaluyong City, 1550</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-aa-blue shrink-0" />
                <span className="text-aa-slate text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-aa-blue shrink-0" />
                <span className="text-aa-slate text-sm">Viber: +1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-aa-blue shrink-0" />
                <span className="text-aa-slate text-sm">info@aa2000security.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-aa-navy/30 text-center">
          <p className="text-aa-slate text-sm">
            &copy; {new Date().getFullYear()} AA2000 Security and Technology Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
