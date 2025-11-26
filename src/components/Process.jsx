import { motion } from 'framer-motion';

const steps = [
    {
        number: "01",
        title: "Cafe Matching",
        description: "브랜드의 타겟 고객과 분위기에 맞는 최적의 카페를 매칭해드립니다."
    },
    {
        number: "02",
        title: "Display Setup",
        description: "제품만 보내주세요. VMD 전문가가 카페 내 최적의 공간에 디스플레이를 연출합니다."
    },
    {
        number: "03",
        title: "QR Sales",
        description: "고객은 QR코드로 간편하게 결제하고 현장에서 바로 제품을 픽업합니다."
    },
    {
        number: "04",
        title: "Settlement",
        description: "판매 수수료 0%. 매월 정산 리포트와 함께 판매 수익금 전액을 입금해드립니다."
    }
];

const Process = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-4xl font-bold mb-4"
                    >
                        How It Works
                    </motion.h2>
                    <p className="text-gray-600">
                        복잡한 입점 절차 없이, 쉽고 빠르게 시작하세요.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300"
                        >
                            <div className="text-5xl font-bold text-gray-100 absolute top-4 right-4">
                                {step.number}
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-3 text-primary">{step.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
