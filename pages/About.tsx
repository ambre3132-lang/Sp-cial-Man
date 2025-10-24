import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslations } from '../hooks/useTranslations';

const CheckIcon = () => (
  <svg className="h-6 w-6 text-amber-400 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);


const About: React.FC = () => {
    const { t } = useTranslations();

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
            <div className="animate-fade-in space-y-16">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-amber-400">{t('about_title')}</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
                        <p>{t('about_intro_p1')}</p>
                        <p>{t('about_intro_p2')}</p>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-2xl border-2 border-amber-500/30">
                        <img 
                            src="https://i.postimg.cc/XNBW4VYz/Add-a-heading-Photo-Grid.png" 
                            alt="Special Man Salon Interior" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <section className="bg-gray-900/50 p-8 rounded-lg border border-amber-500/20 shadow-xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-300 mb-8">{t('about_why_us_title')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 max-w-4xl mx-auto">
                        <div className="flex items-start space-x-4">
                            <CheckIcon />
                            <p className="text-neutral-300">{t('about_why_us_item1')}</p>
                        </div>
                        <div className="flex items-start space-x-4">
                            <CheckIcon />
                            <p className="text-neutral-300">{t('about_why_us_item2')}</p>
                        </div>
                        <div className="flex items-start space-x-4">
                            <CheckIcon />
                            <p className="text-neutral-300">{t('about_why_us_item3')}</p>
                        </div>
                        <div className="flex items-start space-x-4">
                            <CheckIcon />
                            <p className="text-neutral-300">{t('about_why_us_item4')}</p>
                        </div>
                    </div>
                </section>
                
                <div className="text-center">
                    <Link
                        to="/services"
                        className="mt-8 inline-block bg-amber-500 text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-400 transition-transform transform hover:scale-105 duration-300"
                    >
                        {t('about_cta')}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;