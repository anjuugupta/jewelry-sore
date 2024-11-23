// src/FAQSection.js
import React, { useState } from 'react';
import './FAQSection.css'; // Import your CSS styles
import faqImgs from '../../assets/images/products/pendants/braceletswomenfive.jpg'

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    { question: "How Will My Order Be Delivered To Me?", answer: "Delivery details..." },
    { question: "What Should I Know Before Buying Jewelry?", answer: "Important information..." },
    { question: "How Will I Know If Order Is Placed Successfully?", answer: "Order confirmation details..." },
    { question: "How Do I Check The Status Of My Order?", answer: "Order status check instructions..." },
    { question: "What Kind Of Payment Methods Do You Have?", answer: "Payment method details..." },
    { question: "Can I Pay Online?", answer: "Online payment details..." }
  ];

  return (
    <div className="faq-section">
      <div className="faq-image">
        <img src={faqImgs} alt="Jewelry" /> {/* Replace with actual image source */}
      </div>
      <div className="faq-content">
        <h2>Designs Related FAQ</h2>
        <p className="faq-description">Tristique senectus et netus et malesuada fames ac. A arcu cursus vitae congue mauris rhoncus aenean.</p>
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{item.question}</span>
              <span className="faq-icon">{activeIndex === index ? '↑' : '↓'}</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
