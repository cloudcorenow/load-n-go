import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: 'How do I get a Load N-GO card?',
      answer: 'Simply visit our Value Add Center at our location. Purchase a card and load it with your desired amount. You can pay with cash or card.'
    },
    {
      question: 'What happens if I lose my card?',
      answer: 'Unfortunately, Load N-GO is not responsible for lost or stolen cards. Please treat your card like cash and keep it in a safe place. We recommend not throwing it away after each use!'
    },
    {
      question: 'Can I reload my card?',
      answer: 'Yes! Your Load N-GO card is reusable and reloadable. Simply visit the Value Add Center to add more funds whenever you need.'
    },
    {
      question: 'What forms of payment do you accept for reloading?',
      answer: 'You can reload your card using cash or credit/debit cards at our Value Add Center.'
    },
    {
      question: 'How do I use the card with the machines?',
      answer: 'Place your card on the card reader located on the washer or dryer, then follow the display instructions. The cost will be automatically deducted from your card balance.'
    },
    {
      question: 'Can I check my card balance?',
      answer: 'Yes, you can check your remaining balance at the Value Add Center or on the display when you place your card on a machine reader.'
    },
    {
      question: 'Do you provide laundry supplies?',
      answer: 'Yes, we have detergent and fabric softener available for purchase at our facility.'
    },
    {
      question: 'Is there parking available?',
      answer: 'Yes, we have convenient parking available for our customers.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about Load N-GO and our card system.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="collapse collapse-plus bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-100 shadow-md mb-4 hover:shadow-lg transition-shadow">
              <input type="radio" name="faq-accordion" defaultChecked={index === 0} />
              <div className="collapse-title text-xl font-semibold pr-12 text-gray-900">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p className="text-gray-800 pt-2">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn bg-[#2B7BBF] hover:bg-[#1E5A8F] text-white border-0"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
