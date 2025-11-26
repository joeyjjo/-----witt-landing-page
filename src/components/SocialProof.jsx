import { motion } from 'framer-motion';
import soldoutImage from '../assets/soldout.png';

const cases = [
    {
        name: "Cafe Little Paulo",
        description: "주말 이틀 만에 준비된 50세트 완판!",
        image: soldoutImage,
        tag: "Sold Out"
    },
    {
        name: "Cafe Oreum",
        description: "팝업 스토어 오픈 3시간 만에 매출 100만원 달성",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", // Keep placeholder for now or reuse
        tag: "Hot Place"
    }
];

const SocialProof = () => {
    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-4xl font-bold mb-4"
                    >
                        Success Stories
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600"
                    >
                        이미 많은 브랜드가 위트와 함께 성공을 경험하고 있습니다.
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {cases.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
                        >
                            <div className="relative h-64">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-accent text-primary font-bold px-4 py-1 rounded-full text-sm">
                                    {item.tag}
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                                <p className="text-lg text-gray-600 font-medium">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
