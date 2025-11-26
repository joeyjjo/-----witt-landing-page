import { motion } from 'framer-motion';

const cafes = [
    {
        name: "Millium Bakery",
        location: "서울 노원구",
        stats: "월 평균 18,000명 방문",
        tags: ["Modern Natural", "40s Female"],
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        name: "Nudge",
        location: "경기도 수원시",
        stats: "월 평균 3,200명 방문",
        tags: ["Minimal Modern", "20s Female"],
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        name: "Estia",
        location: "경기 용인시",
        stats: "월 평균 3,500명 방문",
        tags: ["Minimal Natural", "40s Male"],
        image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        name: "Intense 491",
        location: "인천 중구",
        stats: "월 평균 5,000명 방문",
        tags: ["Minimal Modern", "30s Female"],
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        name: "Cafe Dasoni",
        location: "서울 서초구",
        stats: "월 평균 3,500명 방문",
        tags: ["Modern Minimal", "30s Female"],
        image: "https://images.unsplash.com/photo-1507133750069-bef72f3710f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        name: "Rainbow Cafe",
        location: "서울 동작구",
        stats: "월 평균 4,000명 방문",
        tags: ["Modern Minimal", "20s Female"],
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
];

const CafeCard = ({ cafe }) => (
    <div className="min-w-[280px] sm:min-w-[320px] md:min-w-[400px] bg-white rounded-xl overflow-hidden shadow-lg flex-shrink-0">
        <div className="h-48 overflow-hidden">
            <img
                src={cafe.image}
                alt={cafe.name}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
            />
        </div>
        <div className="p-6">
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900">{cafe.name}</h3>
                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                    {cafe.location}
                </span>
            </div>
            <p className="text-accent font-medium mb-4">{cafe.stats}</p>
            <div className="flex flex-wrap gap-2">
                {cafe.tags.map((tag, i) => (
                    <span key={i} className="text-xs border border-gray-200 text-gray-500 px-2 py-1 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

const CafeShowcase = () => {
    // Triple the array for seamless looping
    const duplicatedCafes = [...cafes, ...cafes, ...cafes];

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-primary overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 mb-8 sm:mb-12 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4"
                >
                    Curated Cafe Partners
                </motion.h2>
                <p className="text-sm sm:text-base text-gray-400">
                    위트가 엄선한 서울/경기 핫플레이스 카페들을 만나보세요.
                </p>
            </div>

            <div className="relative">
                <motion.div
                    className="flex gap-6"
                    animate={{
                        x: [0, -((300 + 24) * cafes.length)] // card width (300) + gap (24) * number of cafes
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {duplicatedCafes.map((cafe, index) => (
                        <CafeCard key={`${cafe.name}-${index}`} cafe={cafe} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CafeShowcase;
