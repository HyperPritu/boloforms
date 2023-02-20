import React from 'react';
import './faq.css';
import { FAQItem } from './FAQItem';

export const FAQ = () => {
    return (
        <section className='faq section'>
            <h2 className='section__title'>Frequently Asked Questions</h2>

            <div className="faqs">
                <div className="child">
                    <FAQItem />
                    <FAQItem />
                    <FAQItem />
                    <FAQItem />
                    <FAQItem />
                </div>
                <div className="child">
                    <FAQItem />
                    <FAQItem />
                    <FAQItem />
                    <FAQItem />
                    <FAQItem />
                </div>
            </div>
        </section>
    )
}