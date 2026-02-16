import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 px-4 max-w-6xl mx-auto text-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid md:grid-cols-2 gap-12 text-zinc-300"
            >
                {/* Bio */}
                <div>
                    <h2 className="text-3xl font-bold text-white mb-6 font-['Space_Grotesk']">Sobre Mí</h2>
                    <p className="mb-4 leading-relaxed">
                        Desarrollador con visión integral del software y capacidad para abordar proyectos de principio a fin. Me apasiona transformar necesidades complejas en aplicaciones web intuitivas y funcionales.
                    </p>
                    <p className="mb-4 leading-relaxed">
                        Soy una persona proactiva y orientada a la mejora continua, busco aportar creatividad y eficiencia en entornos colaborativos.
                    </p>
                </div>

                {/* Timeline / Education & Experience */}
                <div className="space-y-8">

                    {/* Experience Item 1 */}
                    <div className="relative pl-8 border-l border-zinc-700">
                        <span className="absolute -left-3 top-0 bg-green-500 rounded-full p-1 text-black">
                            <Briefcase size={14} />
                        </span>
                        <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">AI Engineer / Freelance</h3>
                        <span className="text-sm text-green-400 font-mono">Ago 2025 - Dic 2025</span>

                        <div className="mt-4 space-y-2 text-sm text-zinc-400">
                            <p className="text-zinc-500 italic mb-2">Stack: OpenAI, WhatsApp Business, Python, PostgreSQL</p>
                            <ul className="list-disc pl-4 space-y-1">
                                <li>Desarrollo de chatbot con OpenAI integrado a WhatsApp Business.</li>
                                <li>Automatización de atención al cliente reduciendo tiempos de respuesta.</li>
                                <li>Backend en Python + PostgreSQL para gestión de conversaciones.</li>
                                <li>Implementación de API REST para integración con sistemas externos.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Experience Item 2 */}
                    <div className="relative pl-8 border-l border-zinc-700">
                        <span className="absolute -left-3 top-0 bg-green-500 rounded-full p-1 text-black">
                            <Briefcase size={14} />
                        </span>
                        <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">Pasantías en Desarrollo</h3>
                        <span className="text-sm text-green-400 font-mono">Ago 2025 - Nov 2025</span>
                        <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wide">AVIV S.A / TOANPE S.R.L</p>

                        <div className="mt-4 space-y-2 text-sm text-zinc-400">
                            <p className="text-zinc-500 italic mb-2">Stack: Python, React, Flask, SQLite</p>
                            <ul className="list-disc pl-4 space-y-1">
                                <li>Desarrollo de plataforma web para automatizar el filtrado de candidatos.</li>
                                <li>Implementación de análisis de CV con IA para mejorar el matching.</li>
                                <li>Reducción de hasta 80% del tiempo operativo en procesos de RRHH.</li>
                                <li>Sistema de notificaciones y feedback dinámico.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Education Item */}
                    <div className="relative pl-8 border-l border-zinc-700">
                        <span className="absolute -left-3 top-0 bg-green-500 rounded-full p-1 text-black">
                            <GraduationCap size={14} />
                        </span>
                        <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">Técnico en Programación</h3>
                        <span className="text-sm text-green-400 font-mono">UTN San Rafael | Mar 2024 - Nov 2025 (Finalizado)</span>
                    </div>

                </div>
            </motion.div>
        </section>
    );
};

export default About;
