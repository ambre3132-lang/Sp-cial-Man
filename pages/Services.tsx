import React from 'react';
import { serviceCategories } from '../constants/data';
import { useTranslations } from '../hooks/useTranslations';

const WhatsAppIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.651 4.383 1.905 6.344l.229.352-1.232 4.493 4.625-1.211.335.205z"/>
    </svg>
);


const Services: React.FC = () => {
    const { t } = useTranslations();
    const phoneNumber = "212666678797";

    const createWhatsAppLink = (serviceName: string) => {
        const message = encodeURIComponent(`Bonjour, je veux réserver ${serviceName}`);
        return `https://wa.me/${phoneNumber}?text=${message}`;
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
            <div className="animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-amber-400 mb-12">{t('services_title')}</h1>
                <div className="space-y-16">
                    {serviceCategories.map((category) => (
                        <div key={category.title} className="bg-gray-900/50 p-6 md:p-8 rounded-lg border border-amber-500/20 shadow-xl">
                            <h2 className="text-3xl font-semibold text-amber-500 mb-8 border-b-2 border-amber-500/30 pb-4">{category.title}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.services.map((service) => (
                                    <div key={service.name} className="bg-black/40 p-5 rounded-md flex flex-col justify-between transition-transform transform hover:scale-105 duration-300">
                                        <div>
                                            <h3 className="text-xl font-medium text-neutral-200">{service.name}</h3>
                                            <p className="text-2xl font-bold text-amber-400 mt-2">{service.price} DH</p>
                                        </div>
                                        <a
                                            href={createWhatsAppLink(service.name)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-4 flex items-center justify-center bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300"
                                        >
                                            <WhatsAppIcon />
                                            {t('services_book_whatsapp')}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;