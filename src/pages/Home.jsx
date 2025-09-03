import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"
import profile from '../assets/home_profile.jpg'
import projects from '../data/projects.json'
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const Home = () => {
    const CV_URL = "https://drive.google.com/file/d/19_1d3Pytu4RL_yrqf2IZEE4hL2E7TUbI/view?usp=drive_link"
    const roles = [
        "Electrical Engineer",
        "Robotic Software Developer",
        "AI & IoT Developer",
        "Embedded Systems Expert",
        "Automation & Testing Engineer"
    ]
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="bg-[var(--color-dark)] min-h-screen">
            {/* Hero Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="flex-1 space-y-8">
                            <div className="space-y-4">
                                <motion.h1
                                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-text)]"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    Hi, I'm <span className="text-[var(--color-primary)]">Mohamed Saifeldin</span>
                                </motion.h1>
                                <motion.div
                                    className="h-16 text-3xl font-bold"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={currentRoleIndex}
                                            initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: -20, scale: 0.8 }}
                                            transition={{
                                                duration: 0.7,
                                                type: "spring",
                                                stiffness: 50,
                                                damping: 15
                                            }}
                                            className="inline-block px-6 py-2 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 text-[var(--color-primary)]"
                                        >
                                            {roles[currentRoleIndex]}
                                        </motion.span>
                                    </AnimatePresence>
                                </motion.div>
                            </div>
                            <motion.p
                                className="text-xl text-[var(--color-text-light)] max-w-2xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                I build embedded and robotic systems, integrating ROS2, AI and IoT to develop intelligent, real-world technologies.
                            </motion.p>
                            <motion.div
                                className="flex flex-wrap gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                <Link
                                    to="/projects"
                                    className="btn btn-primary inline-flex items-center px-10 py-5 text-xl"
                                >
                                    <Icon icon="tabler:apps" width="24" height="24" className="mr-2" />
                                    View My Work
                                    <Icon icon="tabler:arrow-right" width="24" height="24" className="ml-2" />
                                </Link>
                                <a
                                    href={CV_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn bg-[var(--color-dark-lighter)] text-[var(--color-text)] hover:bg-[var(--color-primary)]/10 inline-flex items-center px-10 py-5 text-xl border border-[var(--color-primary)]/30"
                                >
                                    <Icon icon="tabler:file-cv" width="24" height="24" className="mr-2" />
                                    Download CV
                                    <Icon icon="tabler:download" width="24" height="24" className="ml-2" />
                                </a>
                            </motion.div>
                        </div>
                        <motion.div
                            className="flex-1 flex justify-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <div className="relative group">
                                {/* Animated background */}
                                <motion.div
                                    className="absolute -inset-3 rounded-full bg-gradient-to-br from-[var(--color-primary)]/10 via-[var(--color-secondary)]/10 to-[var(--color-primary)]/10"
                                    animate={{
                                        scale: [1, 1.02, 1],
                                        opacity: [0.5, 0.8, 0.5]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />

                                {/* Main photo container */}
                                <motion.div
                                    className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-[var(--color-primary)]/30 shadow-lg group-hover:shadow-xl group-hover:shadow-[var(--color-primary)]/20 transition-all duration-300"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.img
                                        src={profile}
                                        alt="Mohamed Saifeldin"
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    />

                                    {/* Animated gradient overlay */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent"
                                        animate={{
                                            opacity: [0.5, 0.8, 0.5]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                </motion.div>

                                {/* Animated accent elements */}
                                <motion.div
                                    className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[var(--color-primary)]/30"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.5, 0.3]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                                <motion.div
                                    className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-[var(--color-secondary)]/30"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.5, 0.3]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1
                                    }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="py-20 bg-[var(--color-dark-lighter)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            <span className="text-[var(--color-text)]">Featured</span>{" "}
                            <span className="text-[var(--color-primary)]">Projects</span>
                        </h2>
                        <p className="text-[var(--color-text-light)] text-lg max-w-2xl mx-auto">
                            Explore some of my recent work in robotics, computer vision, and embedded systems
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.slice(0, 3).map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="card p-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <motion.img
                                    src={project.image}
                                    alt={`Project ${project.title}`}
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-[var(--color-text)]">{project.title}</h3>
                                    <p className="text-[var(--color-text-light)]">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <motion.span
                                                key={techIndex}
                                                className="px-2.5 py-1 text-xs font-medium rounded-full bg-[var(--color-primary)]/20 text-[var(--color-primary)] border border-[var(--color-primary)]/30"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Link
                                            to={project.demo}
                                            className="inline-flex items-center text-[var(--color-accent)] hover:text-[var(--color-primary)] transition-colors"
                                        >
                                            View Demo
                                            <Icon icon="tabler:arrow-right" width="16" height="16" className="ml-1" />
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="text-center mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Link
                            to="/projects"
                            className="btn btn-primary inline-flex items-center px-10 py-5 text-xl"
                        >
                            <Icon icon="tabler:apps" width="24" height="24" className="mr-2" />
                            View All Projects
                            <Icon icon="tabler:arrow-right" width="24" height="24" className="ml-2" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Skills Categories Section */}
            <section className="py-20 bg-[var(--color-dark-lighter)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            <span className="text-[var(--color-text)]">Featured</span>{" "}
                            <span className="text-[var(--color-primary)]">Skills</span>
                        </h2>
                        <p className="text-[var(--color-text-light)] text-lg max-w-2xl mx-auto">
                            Specialized expertise in robotics, embedded systems and computer vision
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Embedded Systems & IoT */}
                        <motion.div
                            className="card group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="p-4 bg-[var(--color-primary)]/10 rounded-xl mb-4 inline-block">
                                <Icon icon="tabler:cpu" width="32" height="32" className="text-[var(--color-primary)]" />
                            </div>
                            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">Embedded Systems & IoT</h3>
                            <p className="text-[var(--color-text-light)] mb-6">
                                Expertise in microcontroller programming, sensor integration and IoT solutions development.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-sm">Arduino</span>
                                <span className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-sm">Raspberry Pi</span>
                                <span className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-sm">ESP32</span>
                                <span className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-sm">STM32</span>
                                <span className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-sm">Jetson Nano</span>
                                <span className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-sm">LiDAR</span>
                                <span className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-sm">IMU</span>
                            </div>
                        </motion.div>

                        {/* Robotics & Automation */}
                        <motion.div
                            className="card group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="p-4 bg-[var(--color-primary)]/10 rounded-xl mb-4 inline-block">
                                <Icon icon="tabler:robot" width="32" height="32" className="text-[var(--color-primary)]" />
                            </div>
                            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">Robotics & Automation</h3>
                            <p className="text-[var(--color-text-light)] mb-6">
                                Specialized in ROS2, robot localization and industrial automation systems.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-sm">ROS2</span>
                                <span className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-sm">SLAM</span>
                                <span className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-sm">Navigation</span>
                                <span className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-sm">Gmapping</span>
                            </div>
                        </motion.div>

                        {/* AI & Computer Vision */}
                        <motion.div
                            className="card group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="p-4 bg-[var(--color-primary)]/10 rounded-xl mb-4 inline-block">
                                <Icon icon="tabler:brain" width="32" height="32" className="text-[var(--color-primary)]" />
                            </div>
                            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4">AI & Computer Vision</h3>
                            <p className="text-[var(--color-text-light)] mb-6">
                                Proficient in machine learning and computer vision.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-sm">OpenCV</span>
                                <span className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-sm">YOLO</span>
                                <span className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-sm">TensorFlow</span>
                                <span className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-sm">PyTorch</span>
                                <span className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-sm">Image Processing</span>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="text-center mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Link
                            to="/about"
                            className="btn btn-primary inline-flex items-center px-10 py-5 text-xl"
                        >
                            <Icon icon="tabler:list" width="24" height="24" className="mr-2" />
                            View All Skills
                            <Icon icon="tabler:arrow-right" width="24" height="24" className="ml-2" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-gradient-to-br from-[var(--color-primary)]/20 via-[var(--color-secondary)]/20 to-[var(--color-primary)]/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold text-[var(--color-text)]">Let's Work Together</h2>
                        <p className="text-xl text-[var(--color-text-light)] max-w-3xl mx-auto">
                            Let's build something amazing together!
                        </p>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                className="btn btn-primary inline-flex items-center px-10 py-5 text-xl"
                                onClick={() => window.open(`http://wa.me/601129645412`, "_blank")}
                            >
                                <Icon icon="tabler:message-circle" width="24" height="24" className="mr-2" />
                                Get In Touch
                                <Icon icon="tabler:arrow-right" width="24" height="24" className="ml-2" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Home
