// Faq.js
import React from 'react';
import FaqItem from './FaqItem';

const faqData = [
  {
    question: 'What is your return policy?',
    answer: 'Our return policy allows returns within 30 days of purchase.',
  },
  {
    question: 'How do I track my order?',
    answer: 'Once your order is shipped, you will receive a tracking link via email.',
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes, we ship to multiple countries worldwide.',
  },
  // Add more FAQs as needed
];

const Faqs = () => {
  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <FaqItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default Faqs;
