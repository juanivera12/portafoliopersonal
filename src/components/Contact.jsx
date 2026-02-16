import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState(null); // null, 'sending', 'success', 'error'

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch("https://formsubmit.co/ajax/juanignaciovera15@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-20 px-6 bg-black border-t border-zinc-900 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid md:grid-cols-2 gap-16 items-start"
                >
                    {/* Left Col: Info */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-['Space_Grotesk'] leading-tight">
                            ¿Hablamos?
                        </h2>
                        <p className="text-zinc-400 text-lg mb-12 max-w-md leading-relaxed">
                            Estoy siempre abierto a nuevas oportunidades, colaboraciones o simplemente para charlar sobre tecnología e innovación.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4 group">
                                <div className="p-3 bg-zinc-900 rounded-lg group-hover:bg-green-500/20 transition-colors">
                                    <Mail className="text-green-400 group-hover:scale-110 transition-transform" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-1">Email</h3>
                                    <a href="mailto:juanignaciovera15@gmail.com" className="text-zinc-400 hover:text-green-400 transition-colors">
                                        juanignaciovera15@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="p-3 bg-zinc-900 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                                    <Linkedin className="text-blue-400 group-hover:scale-110 transition-transform" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-1">LinkedIn</h3>
                                    <a
                                        href="https://www.linkedin.com/in/juan-ignacio-vera-540825246/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-zinc-400 hover:text-blue-400 transition-colors"
                                    >
                                        Ver Perfil
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="p-3 bg-zinc-900 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                                    <MapPin className="text-purple-400 group-hover:scale-110 transition-transform" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-1">Ubicación</h3>
                                    <span className="text-zinc-400">Mendoza, Argentina</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Col: Form */}
                    <div className="bg-zinc-900/50 p-8 md:p-10 rounded-3xl border border-zinc-800 backdrop-blur-sm">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-zinc-400 mb-2 uppercase tracking-wide">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder:text-zinc-700"
                                    placeholder="Tu Nombre"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-zinc-400 mb-2 uppercase tracking-wide">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder:text-zinc-700"
                                    placeholder="tu@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-zinc-400 mb-2 uppercase tracking-wide">Mensaje</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all resize-none placeholder:text-zinc-700"
                                    placeholder="¿En qué puedo ayudarte?"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending' || status === 'success'}
                                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${status === 'success'
                                        ? 'bg-green-500 text-black cursor-default'
                                        : 'bg-white text-black hover:bg-zinc-200'
                                    }`}
                            >
                                {status === 'sending' ? (
                                    <Loader2 className="animate-spin" />
                                ) : status === 'success' ? (
                                    <>
                                        <CheckCircle2 /> Mensaje Enviado
                                    </>
                                ) : (
                                    <>
                                        Enviar Mensaje <Send size={18} />
                                    </>
                                )}
                            </button>

                            {status === 'error' && (
                                <p className="text-red-400 text-sm text-center mt-2">
                                    Hubo un error al enviar. Intenta contactarme por LinkedIn o mail directo.
                                </p>
                            )}
                        </form>
                    </div>

                </motion.div>

                <div className="mt-20 pt-8 border-t border-zinc-900 text-center">
                    <p className="text-zinc-600 text-sm">
                        © 2026 Juan Ignacio Vera. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
