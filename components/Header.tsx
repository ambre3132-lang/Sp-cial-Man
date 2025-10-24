
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTranslations } from '../hooks/useTranslations';
import type { Language } from '../types';

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    const languages: { code: Language; name: string }[] = [
        { code: 'en', name: 'EN' },
        { code: 'fr', name: 'FR' },
        { code: 'ar', name: 'AR' },
    ];

    return (
        <div className="flex items-center bg-gray-800 rounded-full">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-3 py-1 text-sm font-medium rounded-full transition-colors duration-300 ${language === lang.code ? 'bg-amber-500 text-black' : 'text-neutral-300 hover:bg-gray-700'}`}
                >
                    {lang.name}
                </button>
            ))}
        </div>
    );
};

const ReservationIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);


const Header: React.FC = () => {
  const { t } = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', text: t('nav_home') },
    { to: '/about', text: t('nav_about') },
    { to: '/services', text: t('nav_services') },
    { to: '/gallery', text: t('nav_gallery') },
    { to: '/contact', text: t('nav_contact') },
  ];

  const linkClass = "text-neutral-300 hover:text-amber-400 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium";
  const activeLinkClass = "text-amber-400";

  return (
    <header className="bg-black/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-amber-500/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
             <NavLink to="/" className="flex-shrink-0">
              <img className="h-16 w-auto" src="https://i.postimg.cc/y8SP19Xd/augdfv.png" alt="Spécial Man Logo" />
            </NavLink>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map(link => (
              <NavLink key={link.to} to={link.to} className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ''}`}>
                {link.text}
              </NavLink>
            ))}
             <NavLink to="/reservation" className="text-neutral-300 hover:text-amber-400 transition-colors duration-300 p-2 rounded-full hover:bg-gray-700" aria-label={t('nav_reservation')}>
                <ReservationIcon />
            </NavLink>
            <LanguageSwitcher />
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
              <NavLink key={link.to} to={link.to} onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `block ${linkClass} ${isActive ? activeLinkClass : ''}`}>
                {link.text}
              </NavLink>
            ))}
            <NavLink to="/reservation" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `block ${linkClass} ${isActive ? activeLinkClass : ''}`}>
                {t('nav_reservation')}
            </NavLink>
            <hr className="border-gray-700 my-3" />
            <div className="px-2 flex justify-center">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
