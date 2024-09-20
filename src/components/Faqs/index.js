// Write your code here.
import React from 'react';
import FaqItem from '../FaqItem';
import './index.css';

const Faqs = (props) => {
  const { faqsList } = props;

  return (
    <div className="faqs-container">
      <ul className="faqs-list">
        {faqsList.map((faq) => (
          <FaqItem
            key={faq.id}
            questionText={faq.questionText}
            answerText={faq.answerText}
          />
        ))}
      </ul>
    </div>
  );
};

export default Faqs;
