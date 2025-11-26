import { motion } from 'framer-motion';

const Pricing = () => {
    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4"
                    >
                        Pricing
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600"
                    >
                        오직 12월에만 만날 수 있는 특별한 혜택
                    </motion.p>
                </div>

                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-accent mx-4"
                    >
                        <div className="bg-primary p-5 sm:p-6 text-center">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Sales Booster Package</h3>
                            <p className="text-gray-400">All-in-One Solution</p>
                        </div>
                        <div className="p-6 sm:p-8">
                            <div className="text-center mb-8">
                                <p className="text-gray-500 line-through text-lg">월 150만원</p>
                                <p className="text-3xl sm:text-4xl font-bold text-accent">12월 특가 문의</p>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center text-gray-700">
                                    <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Cafe Matching (최적의 카페 매칭)
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Display Setup (VMD 연출)
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    QR Sales System (간편 결제)
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Theft Prevention Cam (도난 방지)
                                </li>
                            </ul>
                            <button className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition duration-300">
                                지금 바로 상담하기
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
