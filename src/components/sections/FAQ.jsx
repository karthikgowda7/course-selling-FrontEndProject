import { useState } from "react";
import Section from "../ui/Section.jsx";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is this wellness or fitness?",
      answer:
        "Both, in the honest sense. The physical and psychological are treated as inseparable.",
    },
    {
      question: "Do I need a gym?",
      answer:
        "No. The workbook requires time and honesty. Movement ranges from walking to bodyweight.",
    },
    {
      question: "Is this a recovery program?",
      answer:
        "No. It's complementary to recovery. Week 9 is handled with care; use your judgment.",
    },
    {
      question: "How much time per week?",
      answer:
        "Budget 4–6 hours for lessons, worksheets, and daily habits.",
    },
  ];

  return (
    <Section
      id="faq"
      title="Frequently Asked Questions"
      className="bg-zinc-950"
    >
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-lg border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300"
          >
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between text-left font-semibold text-white"
            >
              {faq.question}
              <span
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "grid-rows-[1fr] opacity-100 mt-4"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-zinc-300">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}