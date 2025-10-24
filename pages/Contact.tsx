import React from 'react';
import { useTranslations } from '../hooks/useTranslations';

const WhatsAppIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.651 4.383 1.905 6.344l.229.352-1.232 4.493 4.625-1.211.335.205z"/>
    </svg>
);

const Contact: React.FC = () => {
    const { t } = useTranslations();
    const phoneNumber = "+212 666-678797";
    const address = "15 rue fal ouald oumeir talborjte agadir";
    const message = encodeURIComponent("Bonjour, je souhaite prendre contact avec Spécial Man.");
    const whatsappUrl = `https://wa.me/212666678797?text=${message}`;

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
            <div className="animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-amber-400 mb-12">{t('contact_title')}</h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="bg-gray-900/50 p-8 rounded-lg border border-amber-500/20 shadow-xl space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-amber-300 mb-2">{t('contact_phone')}</h2>
                            <p className="text-lg text-neutral-200 mb-4">{phoneNumber}</p>
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-green-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-green-600 transition-colors duration-300"
                            >
                                <WhatsAppIcon />
                                {t('contact_whatsapp_button')}
                            </a>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-amber-300 mb-2">{t('contact_address')}</h2>
                            <p className="text-lg text-neutral-200">{address}</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-amber-300 text-center lg:text-left">{t('contact_location')}</h2>
                        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl border-2 border-amber-500/30">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.455922729484!2d-9.5930618!3d30.423174899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b7d85f173427%3A0xd78b6dcb9fd4e098!2sSpecial%20Man!5e0!3m2!1sen!2sma!4v1761316065989!5m2!1sen!2sma"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;