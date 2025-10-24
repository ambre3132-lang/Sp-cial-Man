
import React, { useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore';
import { useTranslations } from '../hooks/useTranslations';
import type { Review } from '../types';

const Reviews: React.FC = () => {
    const { t } = useTranslations();
    const [reviews, setReviews] = useState<Review[]>([]);
    const [newName, setNewName] = useState('');
    const [newComment, setNewComment] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(db, 'reviews'), orderBy('timestamp', 'desc'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const reviewsData: Review[] = [];
            querySnapshot.forEach((doc) => {
                reviewsData.push({ ...doc.data(), id: doc.id } as Review);
            });
            setReviews(reviewsData);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
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
        <div className="max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-amber-400 mb-12">{t('reviews_title')}</h1>
            
            <div className="bg-gray-900/50 p-8 rounded-lg border border-amber-500/20 shadow-xl mb-12">
                <h2 className="text-2xl font-bold text-amber-300 mb-4">{t('reviews_add_title')}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
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

            <div className="space-y-6">
                {loading ? (
                    <p className="text-center text-neutral-400">Loading reviews...</p>
                ) : reviews.length > 0 ? (
                    reviews.map((review) => (
                        <div key={review.id} className="bg-black/40 p-6 rounded-lg border-l-4 border-amber-500">
                            <p className="text-neutral-200 mb-2">"{review.comment}"</p>
                            <p className="text-right font-semibold text-amber-400">- {review.name}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-neutral-400">{t('reviews_no_reviews')}</p>
                )}
            </div>
        </div>
    );
};

export default Reviews;
