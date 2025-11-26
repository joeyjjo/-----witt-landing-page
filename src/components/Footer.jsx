const Footer = () => {
    return (
        <footer className="bg-primary text-white py-10">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-2xl font-bold mb-4">WITT</h2>
                <p className="text-gray-400 mb-6">
                    서울시 강남구 테헤란로 123 위트빌딩 <br />
                    Contact: contact@witt.com | 02-1234-5678
                </p>
                <p className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} WITT. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
