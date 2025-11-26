import { motion } from 'framer-motion';
import { useState } from 'react';

const faqs = [
    {
        question: "정말 판매 수수료가 0%인가요?",
        answer: "네, 맞습니다. 위트는 브랜드의 성장을 지원하기 위해 12월 한정으로 판매 수수료 0% 혜택을 제공합니다. 결제 수수료(PG사)를 제외한 매출 전액을 정산해드립니다."
    },
    {
        question: "도난이나 파손 걱정은 없나요?",
        answer: "모든 제휴 카페에는 위트가 제공하는 도난 방지용 스마트캠이 설치되어 있습니다. 또한, 파손 시 보상 정책을 통해 브랜드의 자산을 안전하게 보호합니다."
    },
    {
        question: "재고 관리는 어떻게 하나요?",
        answer: "카페 매니저가 매일 재고를 확인하고 위트 시스템에 업데이트합니다. 재고 부족 시 알림을 드리며, 택배로 제품을 보내주시면 카페에서 보충 진열을 진행합니다."
    },
    {
        question: "최소 계약 기간은 어떻게 되나요?",
        answer: "기본 계약 기간은 1개월입니다. 12월 단기 팝업으로 진행해 보시고, 성과에 따라 연장 여부를 자유롭게 결정하실 수 있습니다."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-4xl font-bold mb-4"
                    >
                        FAQ
                    </motion.h2>
                    <p className="text-gray-600">
                        자주 묻는 질문을 확인해보세요.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-gray-200 rounded-lg overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center p-6 bg-gray-50 hover:bg-gray-100 transition duration-300 text-left"
                            >
                                <span className="font-bold text-gray-800">{faq.question}</span>
                                <svg
                                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {activeIndex === index && (
                                <div className="p-6 bg-white text-gray-600 border-t border-gray-100">
                                    {faq.answer}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
