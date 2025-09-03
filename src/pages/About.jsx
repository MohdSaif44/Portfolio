import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import profile from '../assets/profile.jpg'

const About = () => {
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
                    <motion.div
                        className="space-y-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Introduction with Photo */}
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            <motion.div
                                className="flex-1 flex justify-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <div className="relative group">
                                    {/* Animated background */}
                                    <motion.div
                                        className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/10 via-[var(--color-secondary)]/10 to-[var(--color-primary)]/10"
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
                                        className="relative w-full h-[500px] rounded-2xl overflow-hidden border-2 border-[var(--color-primary)]/30 shadow-lg group-hover:shadow-xl group-hover:shadow-[var(--color-primary)]/20 transition-all duration-300"
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

                            <motion.div
                                className="md:w-3/5 space-y-8"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="space-y-6">
                                    <motion.h1
                                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-text)]"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    >
                                        About <span className="text-[var(--color-primary)]">Me</span>
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
                                    <motion.p
                                        className="text-xl text-[var(--color-text-light)] leading-relaxed"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.6 }}
                                    >
                                        I'm Mohamed Saifeldin, an engineer engineer who builds smart systems that think, sense and solve problems. From robotics to embedded IoT solutions, I love turning ideas into real, working technology.

                                        My background is in Electrical Engineering with a focus on robotics and automation. In UTM, I've consistently ranked among the top of my class. More than just grades, what sets me apart is my drive to explore beyond the classroom. I've developed advanced robots using ROS2 and SLAM & competed in many robotics competetitions such as Abu Robocon 2024.

                                        I stay up to date with fast-moving technologies like artificial intelligence, robotics software and embedded systems because I believe great engineers never stop learning. Whether I'm writing code for a microcontroller, designing a PCB or building an embedded system, I approach every project with curiosity, precision, and a mindset to solve real problems.

                                        I'm excited about opportunities where I can build meaningful tech, grow with a great team, and contribute to innovations that shape the future.
                                    </motion.p>

                                    {/* Contact Icons and Action Buttons */}
                                    <motion.div
                                        className="flex flex-wrap items-center gap-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.8 }}
                                    >
                                        <motion.a
                                            href="tel:+601129645412"
                                            className="p-4 rounded-xl bg-[var(--color-dark-lighter)] hover:bg-[var(--color-primary)]/10 transition-colors duration-300"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            title="Call me"
                                        >
                                            <Icon icon="tabler:phone" width="32" height="32" className="text-[var(--color-primary)]" />
                                        </motion.a>
                                        <motion.a
                                            href="mailto:mohamedali20@graduate.utm.my"
                                            className="p-4 rounded-xl bg-[var(--color-dark-lighter)] hover:bg-[var(--color-primary)]/10 transition-colors duration-300"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            title="Email me"
                                        >
                                            <Icon icon="tabler:mail" width="32" height="32" className="text-[var(--color-primary)]" />
                                        </motion.a>
                                        <motion.a
                                            href="https://www.linkedin.com/in/mohamed-ibrahim-51974b28a/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-4 rounded-xl bg-[var(--color-dark-lighter)] hover:bg-[var(--color-primary)]/10 transition-colors duration-300"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            title="Connect on LinkedIn"
                                        >
                                            <Icon icon="tabler:brand-linkedin" width="32" height="32" className="text-[var(--color-primary)]" />
                                        </motion.a>
                                        <motion.a
                                            href="https://github.com/MohdSaif44"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-4 rounded-xl bg-[var(--color-dark-lighter)] hover:bg-[var(--color-primary)]/10 transition-colors duration-300"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            title="Check my GitHub"
                                        >
                                            <Icon icon="tabler:brand-github" width="32" height="32" className="text-[var(--color-primary)]" />
                                        </motion.a>

                                        {/* Action Buttons */}
                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            <Link
                                                to="/projects"
                                                className="btn btn-primary inline-flex items-center px-6 py-3 text-base"
                                            >
                                                <Icon icon="tabler:apps" width="20" height="20" className="mr-2" />
                                                Projects
                                                <Icon icon="tabler:arrow-right" width="20" height="20" className="ml-2" />
                                            </Link>
                                        </motion.div>
                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            <Link
                                                to="/resume"
                                                className="btn bg-[var(--color-dark-lighter)] text-[var(--color-text)] hover:bg-[var(--color-primary)]/10 inline-flex items-center px-6 py-3 text-base border border-[var(--color-primary)]/30"
                                            >
                                                <Icon icon="tabler:file-cv" width="20" height="20" className="mr-2" />
                                                Resume                                                <Icon icon="tabler:arrow-right" width="20" height="20" className="ml-2" />
                                            </Link>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-16 bg-[var(--color-dark-lighter)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold text-[var(--color-text)]">Technical Skills</h2>
                        <p className="text-xl text-[var(--color-text-light)]">Technologies and tools I work with</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Programming & Development",
                                icon: "tabler:code",
                                skills: ["Python", "C", "MATLAB", "Linux", "Git"]
                            },
                            {
                                title: "Computer Vision & AI",
                                icon: "tabler:brain",
                                skills: ["OpenCV", "YOLO", "Image Processing"]
                            },
                            {
                                title: "Robotics & Autonomous",
                                icon: "tabler:robot",
                                skills: ["ROS2", "SLAM Toolbox", "Extended Kalman Filter"]
                            },
                            {
                                title: "Embedded Systems",
                                icon: "tabler:cpu",
                                skills: ["STM32", "ESP32", "Raspberry Pi", "Nvidia Jetson Xavier", "Nvidia Jetson Nano", "2D LiDAR", "IMU", "Encoders"]
                            },
                            {
                                title: "Networking & Protocols",
                                icon: "tabler:network",
                                skills: ["UART", "I2C", "Modbus TCP", "Modbus RTU", "CAN", "USB"]
                            }
                        ].map((category, index) => (
                            <motion.div
                                key={category.title}
                                className="card p-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-[var(--color-primary)]/10 rounded-lg">
                                        <Icon icon={category.icon} width="24" height="24" className="text-[var(--color-primary)]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[var(--color-text)]">{category.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.span
                                            key={skill}
                                            className="px-2.5 py-1 text-xs font-medium rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20 hover:bg-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/30 transition-colors duration-300"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
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

export default About
