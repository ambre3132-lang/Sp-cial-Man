import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { Link } from 'react-router-dom';

// SVG Icons
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
);
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.651 4.383 1.905 6.344l.229.352-1.232 4.493 4.625-1.211.335.205z"/>
    </svg>
);
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-3 flex-shrink-0 text-amber-400"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-3 flex-shrink-0 text-amber-400"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-3 flex-shrink-0 text-amber-400"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);


const Footer: React.FC = () => {
  const { t } = useTranslations();
  const phoneNumber = "+212 666-678797";
  const address = "15 rue fal ouald oumeir talborjte agadir";
  const email = "ambre3132@gmail.com";
  const whatsappUrl = `https://wa.me/212666678797`;

  return (
    <footer className="bg-black border-t border-amber-500/20 text-neutral-300">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Brand & Description */}
          <div>
            <h3 className="text-2xl font-bold text-amber-400 mb-2" style={{fontFamily: "'Playfair Display', serif"}}>
              <Link to="/" className="hover:text-amber-300 transition-colors">Spécial Man</Link>
            </h3>
             <p className="text-neutral-400 max-w-xs text-center md:text-left mx-auto md:mx-0">{t('footer_description')}</p>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-bold text-lg text-amber-300 mb-4 uppercase tracking-wider">{t('footer_contact_us')}</h4>
            <div className="space-y-3">
                <p className="flex items-start justify-center md:justify-start text-neutral-400">
                    <MapPinIcon />
                    <span>{address}</span>
                </p>
                <p className="flex items-center justify-center md:justify-start text-neutral-400">
                    <PhoneIcon />
                    <span>{phoneNumber}</span>
                </p>
                <p className="flex items-center justify-center md:justify-start text-neutral-400">
                    <MailIcon />
                    <span>{email}</span>
                </p>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-bold text-lg text-amber-300 mb-4 uppercase tracking-wider">{t('footer_follow_us')}</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.instagram.com/speciale.man/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-neutral-400 hover:text-amber-400 transition-colors"><InstagramIcon /></a>
              <a href="https://web.facebook.com/profile.php?id=61572602577558" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-neutral-400 hover:text-amber-400 transition-colors"><FacebookIcon /></a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-neutral-400 hover:text-amber-400 transition-colors"><WhatsAppIcon /></a>
            </div>
          </div>

        </div>
        <div className="mt-12 pt-8 border-t border-amber-500/10 text-center text-neutral-400">
          <p>&copy; {new Date().getFullYear()} Spécial Man. {t('footer_rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;