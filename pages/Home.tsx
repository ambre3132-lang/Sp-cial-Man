import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslations } from '../hooks/useTranslations';
import { serviceCategories } from '../constants/data';
import { db } from '../lib/firebase';
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp, limit } from 'firebase/firestore';
import type { Review } from '../types';

const desktopImage = 'https://i.postimg.cc/QMzShbvT/srh.png';
const mobileImage = 'https://i.postimg.cc/9XL0MnLV/bay.png';

const Home: React.FC = () => {
    const { t } = useTranslations();
    const [reviews, setReviews] = useState<Review[]>([]);
    const [newName, setNewName] = useState('');
    const [newComment, setNewComment] = useState('');
    const [loading, setLoading] = useState(true);
    const [backgroundImage, setBackgroundImage] = useState('');

    // Effect for reviews
    useEffect(() => {
        const q = query(collection(db, 'reviews'), orderBy('timestamp', 'desc'), limit(3));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const reviewsData: Review[] = [];
            querySnapshot.forEach((doc) => {
                reviewsData.push({ ...doc.data(), id: doc.id } as Review);
            });
            setReviews(reviewsData);
            setLoading(false);
        }, (error) => {
            console.error("Error fetching reviews: ", error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // Effect for background image based on screen size
    useEffect(() => {
        const handleResize = () => {
            const newImage = window.innerWidth >= 768 ? desktopImage : mobileImage;
            setBackgroundImage(newImage);
        };

        handleResize(); // Set image on initial load
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleReviewSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (newName.trim() === '' || newComment.trim() === '') return;

        try {
            await addDoc(collection(db, 'reviews'), {
                name: newName,
                comment: newComment,
                timestamp: serverTimestamp(),
            });
            setNewName('');
            setNewComment('');
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };


    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <div className="relative flex items-center justify-center text-center min-h-screen -mt-20 overflow-hidden">
                {/* Background image */}
                <div className="absolute top-0 left-0 w-full h-full -z-10">
                    {backgroundImage && (
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
                            style={{
                                backgroundImage: `url('${backgroundImage}')`,
                                opacity: 1,
                            }}
                        />
                    )}
                </div>

                {/* Hero Content */}
                <div className="relative z-10 p-8 rounded-lg max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold text-amber-400 leading-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>
                        {t('home_title')}
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
                        {t('home_subtitle')}
                    </p>
                    <Link
                        to="/reservation"
                        className="mt-8 inline-block bg-amber-500 text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-400 transition-transform transform hover:scale-105 duration-300"
                    >
                        {t('home_cta')}
                    </Link>
                </div>
            </div>

            {/* Main Content Sections */}
            <div className="bg-black py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-20 md:space-y-28">

                        {/* Services Section */}
                        <section id="services">
                            <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-400 mb-12">{t('home_services_title')}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {serviceCategories.map(category => (
                                    <div key={category.title} className="bg-gray-900/50 p-6 rounded-lg border border-amber-500/20 text-center flex flex-col">
                                        <h3 className="text-2xl font-semibold text-amber-500 mb-4 flex-grow">{category.title}</h3>
                                        <ul className="space-y-2 text-neutral-300">
                                            {category.services.slice(0, 2).map(service => (
                                                <li key={service.name}>{service.name} - <span className="font-semibold text-amber-400">{service.price} DH</span></li>
                                            ))}
                                            <li>...</li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            <div className="text-center mt-12">
                                <Link to="/services" className="bg-amber-500 text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-400 transition-transform transform hover:scale-105 duration-300 inline-block">
                                    {t('home_services_view_all')}
                                </Link>
                            </div>
                        </section>
                        
                        {/* Location Section */}
                        <section id="location">
                            <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-400 mb-12">{t('home_location_title')}</h2>
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
                             <div className="text-center mt-8">
                                <a href="https://maps.app.goo.gl/wJkL6HqkLd9sYxM3A" target="_blank" rel="noopener noreferrer" className="bg-amber-500 text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-400 transition-transform transform hover:scale-105 duration-300 inline-block">
                                    {t('home_location_cta')}
                                </a>
                            </div>
                        </section>

                        {/* Reviews Section */}
                        <section id="reviews">
                             <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-400 mb-12">{t('home_reviews_title')}</h2>
                             <div className="grid lg:grid-cols-2 gap-12 items-start">
                                <div className="space-y-6">
                                    {loading ? (
                                        <p className="text-center text-neutral-400">Loading reviews...</p>
                                    ) : reviews.length > 0 ? (
                                        reviews.map((review) => (
                                            <div key={review.id} className="bg-gray-900/50 p-6 rounded-lg border-l-4 border-amber-500">
                                                <p className="text-neutral-200 mb-2">"{review.comment}"</p>
                                                <p className="text-right font-semibold text-amber-400">- {review.name}</p>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-center text-neutral-400">{t('reviews_no_reviews')}</p>
                                    )}
                                </div>
                                <div className="bg-gray-900/50 p-8 rounded-lg border border-amber-500/20 shadow-xl">
                                    <h3 className="text-2xl font-bold text-amber-300 mb-4">{t('reviews_add_title')}</h3>
                                    <form onSubmit={handleReviewSubmit} className="space-y-4">
                                        <input
                                            type="text"
                                            value={newName}
                                            onChange={(e) => setNewName(e.target.value)}
                                            placeholder={t('reviews_name_placeholder')}
                                            className="w-full bg-gray-800 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                                            required
                                        />
                                        <textarea
                                            value={newComment}
                                            onChange={(e) => setNewComment(e.target.value)}
                                            placeholder={t('reviews_comment_placeholder')}
                                            rows={4}
                                            className="w-full bg-gray-800 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                                            required
                                        ></textarea>
                                        <button type="submit" className="w-full bg-amber-500 text-black font-bold py-2 px-4 rounded-md hover:bg-amber-400 transition-colors">
                                            {t('reviews_submit')}
                                        </button>
                                    </form>
                                </div>
                             </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;