import React, { useState } from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { serviceCategories } from '../constants/data';

const Reservation: React.FC = () => {
  const { t } = useTranslations();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const phoneNumber = "212666678797";
  
  const allServices = serviceCategories.flatMap(category => category.services.map(s => s.name));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Bonjour, je souhaite réserver un rendez-vous.\nNom: ${name}\nTéléphone: ${phone}\nService: ${service}\nDate: ${date}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="max-w-2xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-amber-400 mb-8">{t('reservation_title')}</h1>
        <form onSubmit={handleSubmit} className="bg-gray-900/50 p-8 rounded-lg border border-amber-500/20 shadow-xl space-y-6">
            <div>
            <label htmlFor="name" className="block text-sm font-medium text-amber-300">{t('reservation_name')}</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full bg-gray-800 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-amber-500 focus:border-amber-500"
            />
            </div>
            <div>
            <label htmlFor="phone" className="block text-sm font-medium text-amber-300">{t('reservation_phone')}</label>
            <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="mt-1 block w-full bg-gray-800 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-amber-500 focus:border-amber-500"
            />
            </div>
            <div>
            <label htmlFor="service" className="block text-sm font-medium text-amber-300">{t('reservation_service')}</label>
            <select
                id="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
                className="mt-1 block w-full bg-gray-800 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-amber-500 focus:border-amber-500"
            >
                <option value="">{t('reservation_service_placeholder')}</option>
                {allServices.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            </div>
            <div>
            <label htmlFor="date" className="block text-sm font-medium text-amber-300">{t('reservation_date')}</label>
            <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="mt-1 block w-full bg-gray-800 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-amber-500 focus:border-amber-500"
            />
            </div>
            <button
            type="submit"
            className="w-full bg-amber-500 text-black font-bold py-3 px-4 rounded-md text-lg hover:bg-amber-400 transition-colors duration-300"
            >
            {t('reservation_submit')}
            </button>
        </form>
        </div>
    </div>
  );
};

export default Reservation;