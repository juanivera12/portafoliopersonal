import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

// Import images for E-ToolMerce Builder
import etLoginImg from '../assets/etoolmerce capturas/logineetol.png';
import etComponentsImg from '../assets/etoolmerce capturas/componentes.png';
import etCommunityImg from '../assets/etoolmerce capturas/comunidad.png';
import etEditorImg from '../assets/etoolmerce capturas/editordecomponentes.png';
import etExportImg from '../assets/etoolmerce capturas/exportar.png';
import etInterfaceImg from '../assets/etoolmerce capturas/interfaz.png';

// Import images for Billetera Neexa
import loginImg from '../assets/login.png';
import walletImg from '../assets/mibilletera.png';
import analysisImg from '../assets/analisis.png';
import goalsImg from '../assets/metas.png';
import challengesImg from '../assets/retosahorro.png';
import converterImg from '../assets/conversordemoneda.png';
import darkModeImg from '../assets/modooscuro.png';
import calculatorImg from '../assets/calculadora.png';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const projects = [
        {
            title: "E-ToolMerce Builder",
            category: "SaaS / No-Code Editor",
            desc: "Constructor visual de tiendas online con sistema Drag & Drop avanzado, gestión de estado global y componentes e-commerce dinámicos.",
            details: "E-ToolMerce Builder es una plataforma No-Code diseñada para democratizar la creación de e-commerce profesionales. Permite a los usuarios arrastrar y soltar componentes como carritos, botones de pago y galerías interactivas.\n\nPrincipales desafíos resueltos:\n• Motor de renderizado dinámico para estructuras JSON complejas.\n• Sistema de redimensionamiento inteligente y auto-fit.\n• Persistencia de estado local para evitar pérdida de datos.\n• Optimización de rendimiento para manipular cientos de nodos en tiempo real.",
            tags: ["React", "Vite", "Tailwind CSS", "Zustand", "Framer Motion"],
            color: "from-blue-600 to-cyan-500",
            images: [
                etLoginImg,
                etInterfaceImg,
                etEditorImg,
                etComponentsImg,
                etExportImg,
                etCommunityImg
            ]
        },
        {
            title: "Billetera Neexa",
            category: "FinTech / Full Stack",
            desc: "Billetera digital inteligente con gestión de ahorros, presupuestos gamificados y conversión de divisas en tiempo real.",
            details: "Simulación completa de una banca digital moderna. Ofrece un dashboard interactivo para visualizar saldos, sistema de ahorros con metas personalizables y análisis financiero inteligente basado en patrones de gasto.\n\nEl sistema cuenta con autenticación segura JWT y encriptación. El backend está construido en Python (Flask) utilizando SQLite para la gestión eficiente de transacciones, mientras que el frontend en React + TypeScript asegura una experiencia fluida y responsiva.",
            tags: ["React", "TypeScript", "Python", "Flask", "SQLite", "JWT"],
            color: "from-purple-500 to-indigo-700",
            images: [
                loginImg,
                walletImg,
                analysisImg,
                goalsImg,
                challengesImg,
                converterImg,
                darkModeImg,
                calculatorImg
            ]
        }
    ];

    // Auto-slide effect
    useEffect(() => {
        if (!selectedProject || !selectedProject.images || selectedProject.images.length === 0) return;

        const interval = setInterval(() => {
            nextImage();
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [selectedProject, currentImageIndex]);

    const openProject = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        if (!selectedProject?.images) return;
        setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    };

    const prevImage = () => {
        if (!selectedProject?.images) return;
        setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    };

    return (
        <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-16 text-center font-['Space_Grotesk']">
                Proyectos Destacados
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="group relative bg-zinc-900/50 rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-all hover:shadow-2xl hover:shadow-green-900/10 flex flex-col"
                    >
                        {/* Abstract Visual Header */}
                        <div className={`h-64 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30 mix-blend-overlay"></div>
                            <h3 className="text-4xl font-black text-white/20 uppercase tracking-tighter transform group-hover:scale-110 transition-transform duration-500 select-none">
                                {project.category.split(' ')[0]}
                            </h3>
                        </div>

                        <div className="p-8 flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <span className="text-xs font-bold text-green-400 uppercase tracking-widest">{project.category}</span>
                                    <h3 className="text-2xl font-bold text-white mt-2 font-['Space_Grotesk'] leading-tight">{project.title}</h3>
                                </div>
                            </div>

                            <p className="text-zinc-400 mb-6 line-clamp-3 leading-relaxed">
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="text-xs bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full border border-zinc-700">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <button
                                onClick={() => openProject(project)}
                                className="w-full bg-white text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-400 hover:scale-[1.02] transition-all"
                            >
                                Ver Más <ArrowRight size={18} />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal for "Ver Más" */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-zinc-900 border border-zinc-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 bg-zinc-800 rounded-full text-white hover:bg-zinc-700 transition-colors z-10"
                            >
                                <X size={20} />
                            </button>

                            <div className={`h-40 bg-gradient-to-r ${selectedProject.color} p-8 flex items-end`}>
                                <h3 className="text-3xl font-bold text-white font-['Space_Grotesk']">{selectedProject.title}</h3>
                            </div>

                            <div className="p-8">
                                {/* Stack Tecnológico FIRST */}
                                <div className="mb-8">
                                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        Stack Tecnológico
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tags.map((tag, i) => (
                                            <span key={i} className="text-sm bg-zinc-800 text-green-400 px-3 py-1 rounded-md border border-zinc-700/50">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Description / Details SECOND */}
                                <p className="text-zinc-300 leading-relaxed mb-8 whitespace-pre-line">
                                    {selectedProject.details}
                                </p>

                                {/* Image Carousel */}
                                {selectedProject.images && selectedProject.images.length > 0 && (
                                    <div className="space-y-4">
                                        <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                            Galería del Proyecto
                                        </h4>

                                        <div className="relative w-full aspect-video bg-black/50 rounded-xl overflow-hidden group">
                                            <AnimatePresence mode="wait">
                                                <motion.img
                                                    key={currentImageIndex}
                                                    src={selectedProject.images[currentImageIndex]}
                                                    alt={`Screenshot ${currentImageIndex + 1}`}
                                                    initial={{ opacity: 0, x: 100 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -100 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="w-full h-full object-contain"
                                                />
                                            </AnimatePresence>

                                            {/* Navigation Buttons */}
                                            <button
                                                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                <ChevronLeft size={24} />
                                            </button>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                <ChevronRight size={24} />
                                            </button>

                                            {/* Indicators */}
                                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                                {selectedProject.images.map((_, idx) => (
                                                    <div
                                                        key={idx}
                                                        className={`w-2 h-2 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-white' : 'bg-white/30'}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="flex gap-4 mt-8">
                                    {/* Demo buttons could go here if links existed */}
                                    {/* <button className="flex-1 bg-white text-black py-3 rounded-lg font-bold">Ver Demo</button> */}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
};

export default Projects;
