import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';
import heroImage from '../assets/yo-nobg.png';

const TypewriterText = ({ text, delay = 0 }) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= text.length) {
                setDisplayText(text.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 100); // Speed of typing

        return () => clearInterval(interval);
    }, [text]);

    return (
        <span className="inline-block">
            {displayText}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-[2px] h-[1em] bg-green-400 ml-1 align-middle"
            />
        </span>
    );
};

const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [displayText, setDisplayText] = useState("FULL STACK");

    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayText((prev) => prev === "FULL STACK" ? "AI ENGINEER" : "FULL STACK");
        }, 4000); // Change text every 4 seconds
        return () => clearInterval(interval);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const menuItems = [
        { title: "Sobre Mí", href: "#about" },
        { title: "Tecnologías", href: "#stack" },
        { title: "Proyectos", href: "#projects" },
        { title: "Contacto", href: "#contact" },
    ];

    return (
        <section className="relative w-full h-screen overflow-hidden bg-[#0a0a0a] text-white font-sans">
            {/* Navbar */}
            <nav className="absolute top-0 w-full p-8 flex justify-between items-center z-50">
                <span className="text-xl md:text-2xl font-bold tracking-tighter z-50 relative font-['Space_Grotesk']">JUAN IGNACIO VERA</span>

                <button
                    onClick={toggleMenu}
                    className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center gap-2 z-50 relative"
                >
                    {isMenuOpen ? "Cerrar" : "Menú"} <Menu size={16} />
                </button>
            </nav>

            {/* Navigation Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute inset-0 z-40 bg-zinc-950/95 backdrop-blur-md flex flex-col items-center justify-center"
                    >
                        <div className="flex flex-col gap-8 text-center">
                            {menuItems.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-4xl md:text-6xl font-black text-white hover:text-green-400 transition-colors tracking-tighter font-['Space_Grotesk']"
                                >
                                    {item.title}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Background Giant Text (Decorative) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
                <div className="relative w-full text-center">
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={displayText} // triggers animation on change
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 0.1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 1 }}
                            className="text-[10vw] md:text-[15vw] leading-none font-black text-white select-none whitespace-nowrap font-['Space_Grotesk']"
                        >
                            {displayText}
                        </motion.h1>
                    </AnimatePresence>
                </div>
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 items-center">

                {/* Left Content: Name & Description */}
                <div className="md:col-span-6 flex flex-col justify-center order-2 md:order-1 mt-10 md:mt-0 text-center md:text-left">
                    {/* Role Title with Typewriter */}
                    <div className="h-8 mb-4 flex items-center justify-center md:justify-start">
                        <h2 className="text-lg md:text-xl font-bold text-green-400 tracking-widest uppercase font-mono">
                            <TypewriterText text="Full Stack Dev / AI Engineer" />
                        </h2>
                    </div>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8 text-white mix-blend-difference font-['Space_Grotesk']"
                    >
                        JUAN <br /> IGNACIO <br /> VERA
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="text-zinc-400 text-sm md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0 font-light"
                    >
                        Desarrollador Full Stack con enfoque en automatización e integración de IA.
                        Experiencia construyendo aplicaciones web con Python, React y Flask, e
                        implementando soluciones con OpenAI y WhatsApp Business. Orientado a
                        optimizar procesos y generar impacto medible en negocios.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="mt-8 flex gap-4 justify-center md:justify-start"
                    >
                        <a href="#contact" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-green-400 transition-colors">
                            Contactar
                        </a>
                        <a href="#projects" className="px-8 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-colors">
                            Ver Proyectos
                        </a>
                    </motion.div>
                </div>

                {/* Center/Right Content: Image */}
                <div className="md:col-span-6 flex justify-center items-center order-1 md:order-2 relative h-[40vh] md:h-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-full h-full flex items-center justify-center p-4"
                    >
                        <img
                            src={heroImage}
                            alt="Juan Ignacio Vera"
                            className="max-h-full max-w-full object-contain filter drop-shadow-[0_0_60px_rgba(74,222,128,0.2)]"
                        />
                    </motion.div>
                </div>

            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 right-10 flex flex-col items-center gap-2 z-20">
                <span className="text-xs font-mono uppercase rotated-text" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
                <div className="h-16 w-[1px] bg-gray-700 relative overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 64] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        className="absolute top-0 left-0 w-full h-1/2 bg-green-400"
                    />
                </div>
            </div>

            {/* Social Contact Bottom Left */}
            <div className="absolute bottom-10 left-10 hidden md:block z-20">
                <p className="text-sm text-gray-400 font-mono">juanignaciovera15@gmail.com</p>
            </div>

        </section>
    );
};

export default Hero;
