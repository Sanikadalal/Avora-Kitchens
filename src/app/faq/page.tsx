import Navbar from '@/components/Navbar';

export default function FAQ() {
  const faqs = [
    {
      question: "How long does a modular kitchen installation take?",
      answer: "From final design approval to installation, our standard timeline is 4 to 6 weeks. The actual on-site assembly usually takes 3 to 5 days, minimizing disruption to your home."
    },
    {
      question: "Do you provide warranties on your kitchens?",
      answer: "Yes, we offer a comprehensive 10-year warranty on all our cabinetry and a lifetime warranty on premium hardware components (like Hettich or Blum hinges and channels)."
    },
    {
      question: "What is the difference between Acrylic and Laminate finishes?",
      answer: "Acrylic offers a high-gloss, ultra-reflective premium finish that gives a mirror-like look, ideal for modern luxury kitchens. Laminate is highly durable, scratch-resistant, and comes in various textures including matte, wood-grain, and gloss, making it highly versatile and cost-effective."
    },
    {
      question: "Do you handle civil work like plumbing and tiling?",
      answer: "While our core expertise is modular cabinetry, we provide complete turnkey solutions. We coordinate with our trusted partners to handle necessary civil, plumbing, and electrical modifications required for your new kitchen."
    },
    {
      question: "Can I customize the inner storage accessories?",
      answer: "Absolutely. We design the internals precisely around your cooking habits. From tall pantry units and magic corners to specialized cutlery trays and spice pull-outs, everything is tailored to your needs."
    },
    {
      question: "Is the estimate from the online Configurator final?",
      answer: "The online Configurator provides a highly accurate ballpark figure to help you plan your budget. Final pricing requires a physical site measurement and your final selection of specific materials, finishes, and accessories."
    }
  ];

  return (
    <main className="bg-[#FAFAF7] min-h-screen pt-32 pb-24">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h1 className="font-serif text-4xl md:text-5xl text-[#171717] mb-8">Frequently Asked Questions</h1>
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-16">Everything you need to know</p>
        
        <div className="space-y-12">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-serif text-[#171717] mb-4">{faq.question}</h3>
              <p className="text-gray-600 font-sans leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
