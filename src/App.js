import { useState } from "react";
import Faq from "./Faq";
import Header from "./Header";

const App = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "How many programmers does it take to screw in a lightbulb?",
      answer: "None. We don't address hardware issues.",
      open: true,
    },
    {
      question: "Who is the most awesome person?",
      answer: "You, the viewer.",
      open: false,
    },
    {
      question: "FAQ?",
      answer: "Oh yeah. FAQ.",
      open: false,
    },
  ]);

  const toggleFaq = (faqIndex) => {
    setFaqs(
      faqs.map((faq, index) => {
        if (index === faqIndex) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div>
      <Header />
      <div className="faqs">
        {faqs.map((faq, index) => (
          <Faq faq={faq} index={index} toggleFaq={toggleFaq} />
        ))}
      </div>
    </div>
  );
};

export default App;
