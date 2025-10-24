import React from 'react';
import { generalGalleryImages, beforeAfterImages } from '../constants/data';
import { useTranslations } from '../hooks/useTranslations';

const Gallery: React.FC = () => {
  const { t } = useTranslations();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="animate-fade-in space-y-16">
        {/* Main Title */}
        <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-400">{t('gallery_title')}</h1>
            <p className="mt-4 text-lg text-neutral-300">{t('gallery_subtitle')}</p>
        </div>

        {/* Our Gallery Section */}
        <section>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-300 mb-8">{t('gallery_our_gallery_title')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {generalGalleryImages.map((src, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
                <img
                    src={src}
                    alt={`Salon view ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
                </div>
            ))}
            </div>
        </section>

        {/* Before & After Section */}
        <section>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-300 mb-8">{t('gallery_before_after_title')}</h2>
            <div className="space-y-8 max-w-4xl mx-auto">
            {beforeAfterImages.map((pair, index) => (
                <div key={index} className="bg-gray-900/50 p-4 md:p-6 rounded-lg border border-amber-500/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Before Image */}
                    <div className="relative group">
                    <img src={pair.before} alt={`Before ${index + 1}`} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-md" />
                    <div className="absolute bottom-0 left-0 bg-black/70 text-white px-3 py-1 rounded-tr-lg rounded-bl-lg font-semibold">{t('gallery_before')}</div>
                    </div>
                    {/* After Image */}
                    <div className="relative group">
                    <img src={pair.after} alt={`After ${index + 1}`} loading="lazy" className="w-full h-full object-cover rounded-lg shadow-md" />
                    <div className="absolute bottom-0 left-0 bg-amber-500/80 text-black px-3 py-1 rounded-tr-lg rounded-bl-lg font-semibold">{t('gallery_after')}</div>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </section>
        </div>
    </div>
  );
};

export default Gallery;