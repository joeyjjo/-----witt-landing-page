import { motion } from 'framer-motion';
import heroImage from '../assets/hero.png';

const Hero = () => {
    return (
        <section className="relative bg-primary text-white py-20 lg:py-32 overflow-hidden">
            <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center">
                <div className="w-full lg:w-1/2 lg:pr-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl lg:text-6xl font-bold leading-tight mb-6"
                    >
                        12월 한 달, <br className="hidden lg:block" />
                        서울 핫플레이스 카페가 <br />
                        <span className="text-accent">우리 브랜드의 '무인 판매점'</span>이 됩니다.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg lg:text-xl text-gray-300 mb-10"
                    >
                        인테리어비 NO, 상주인력 NO. <br className="lg:hidden" />
                        제품만 보내주세요. 판매는 위트가 합니다.
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-accent text-primary font-bold py-4 px-10 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300 text-lg"
                    >
                        12월 판매 입점 상담하기
                    </motion.button>
                </div>
                <div className="w-full lg:w-1/2 mb-12 lg:mb-0 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-800"
                    >
                        {/* Cafe table with gift products */}
                        <img
                            src={heroImage}
                            alt="Cafe table with gift products"
                            className="w-full h-auto object-cover"
                        />

                        {/* Smartphone scanning QR code overlay */}
                        <div className="absolute bottom-[-20px] right-[-20px] w-40 h-64 bg-black rounded-3xl border-4 border-gray-700 shadow-2xl transform rotate-[-10deg] flex items-center justify-center overflow-hidden">
                            <div className="w-full h-full bg-gray-800 relative">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-24 h-24 bg-white p-2 rounded-lg">
                                        <div className="w-full h-full bg-black opacity-20"></div>
                                    </div>
                                </div>
                                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-black rounded-full"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
