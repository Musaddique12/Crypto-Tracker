import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "Why should I track cryptocurrency prices?",
      answer:
        "Tracking crypto prices helps you stay updated on market trends, identify profitable investments, and make informed decisions. Our real-time updates ensure you never miss an opportunity.",
    },
    {
      question: "How does this platform help beginners?",
      answer:
        "We provide easy-to-follow tutorials, beginner-friendly tools, and guides to help you understand the basics of cryptocurrency and blockchain technology.",
    },
    {
      question: "What features do you offer for professional traders?",
      answer:
        "Professional traders benefit from advanced analytics, customizable price alerts, historical data, and tools to optimize trading strategies.",
    },
    {
      question: "Why is Crypto App better than others?",
      answer:
        "We offer real-time data, a user-friendly interface, reliable insights, and resources tailored to both beginners and experts—all for free and with no hidden fees.",
    },
  ];

  return (
    <section className="faq">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((item, index) => (
          <div className="faq-item" key={index}>
            <h3 className="faq-question">{item.question}</h3>
            <p className="faq-answer">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
