import { motion } from 'framer-motion';
import {
    Code2, Database, Layout, Server, BatteryCharging,
    Cpu, Globe, Settings, Cloud, Brain, Layers, GitBranch,
    Terminal, ShieldCheck
} from 'lucide-react';

const TechStack = () => {
    const skillCategories = [
        {
            title: "Backend & Core",
            icon: <Server className="text-green-400" />,
            skills: [
                { name: "Python", level: "Advanced" },
                { name: "Flask", level: "Framework" },
                { name: "Java", level: "Core" },
                { name: "Spring Boot", level: "Framework" },
                { name: "PostgreSQL", level: "Database" },
                { name: "SQLite", level: "Database" },
            ]
        },
        {
            title: "Frontend",
            icon: <Layout className="text-blue-400" />,
            skills: [
                { name: "React", level: "Library" },
                { name: "JavaScript", level: "Core" },
                { name: "HTML/CSS", level: "Structure" },
                { name: "TypeScript", level: "Superset" },
                { name: "Tailwind", level: "Styling" },
            ]
        },
        {
            title: "AI & Tools",
            icon: <Brain className="text-purple-400" />,
            skills: [
                { name: "OpenAI API", level: "Integration" },
                { name: "Git / GitHub", level: "Version Control" },
                { name: "Figma", level: "Design" },
                { name: "Google Cloud", level: "Platform" },
                { name: "Scrum / Trello", level: "Methodology" },
            ]
        }
    ];

    return (
        <section id="stack" className="py-20 bg-zinc-900/50 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(4,255,116,0.05),transparent_70%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight font-['Space_Grotesk']">
                        Arsenal Tecnológico
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        Stack completo para el desarrollo de soluciones escalables, desde el backend hasta la interfaz de usuario e integración de IA.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-zinc-950/80 border border-zinc-800 p-8 rounded-2xl hover:border-green-500/30 transition-colors group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-zinc-900 rounded-xl group-hover:scale-110 transition-transform">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">{category.title}</h3>
                            </div>

                            <div className="space-y-4">
                                {category.skills.map((skill, idx) => (
                                    <div key={idx} className="flex justify-between items-center p-2 hover:bg-zinc-900/50 rounded-lg transition-colors">
                                        <span className="text-zinc-200 font-medium">{skill.name}</span>
                                        <span className="text-xs text-zinc-500 bg-zinc-900 px-2 py-1 rounded border border-zinc-800">
                                            {skill.level}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications Badge */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 flex flex-wrap justify-center gap-4"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-900/20 text-green-400 border border-green-900/50 text-sm font-medium">
                        <ShieldCheck size={16} /> Google AI Essentials Certificate
                    </span>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/20 text-blue-400 border border-blue-900/50 text-sm font-medium">
                        <ShieldCheck size={16} /> Google Cybersecurity Certificate
                    </span>
                </motion.div>

            </div>
        </section>
    );
};

export default TechStack;
