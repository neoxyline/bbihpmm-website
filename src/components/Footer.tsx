import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer: React.FC = () => {
    return (
        <footer className="relative bottom-0 left-0 right-0 bg-gray-900 text-white py-12">
            <div className="m-auto max-w-6xl container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 className="text-yellow-500 text-2xl font-bold">BBSPJIHPMM</h2>
                    <p className="mt-4">Balai Besar Standardisasi dan Pelayanan Jasa Industri Hasil Perkebunan Mineral Logam dan Maritim.</p>

                    <p className="text-gray-400 mt-4 text-sm">
                        Jl. Prof. Abdurahman Basalamah No.28, Karampuang, Kecamatan Panakkukang, Kota Makassar, Sulawesi Selatan 90231
                    </p>
                </div>
                <div>
                    <h3 className="text-yellow-500 text-xl font-semibold">Quick Links</h3>
                    <ul className="mt-4 space-y-2">
                        <li>
                            <a href="#" className="text-gray-400 hover:text-white transition">App SIL</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-white transition">Intranet Kemenperin</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-white transition">Intranew Kemenperin</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-white transition">Contact</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-yellow-500 text-xl font-semibold">Follow Us</h3>
                    <div className="flex flex-wra space-x-4 mt-4">
                        <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition">
                            <FontAwesomeIcon icon={faFacebook} className="mr-1" />
                            <i className="fab fa-facebook-f">Facebook</i>
                        </a>
                        <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition">
                            <FontAwesomeIcon icon={faX} className="mr-1" />
                        </a>
                        <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition">
                            <FontAwesomeIcon icon={faInstagram} className="mr-1" />
                            <i className="fab fa-instagram">Instagram</i>
                        </a>
                        <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition">
                            <FontAwesomeIcon icon={faLinkedin} className="mr-1" />
                            <i className="fab fa-linkedin-in">Linkedin</i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-700 mt-12 pt-6">
                <p className="text-center text-gray-400 text-sm">
                    &copy; 2024 <span className='text-yellow-500'>BBSPJIHPMM</span>. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
