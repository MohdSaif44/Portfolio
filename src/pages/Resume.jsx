import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"
import ExperienceCard from "../components/ExperienceCard"
import EducationCard from "../components/EducationCard"
import experienceData from "../data/experience.json"
import educationData from "../data/education.json"
import { motion } from "framer-motion"

const Resume = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    }

    const timelineItem = {
        initial: { opacity: 0, x: -50 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 }
    }

    return (
        <div className="bg-[var(--color-dark)] min-h-screen">
            {/* Hero Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center space-y-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block px-4 py-2 text-sm font-medium text-[var(--color-text)] bg-[var(--color-primary)]/20 border border-[var(--color-primary)]/30 rounded-full">
                                Professional Experience
                            </span>
                        </motion.div>
                        <motion.h1
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-text)]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            My <span className="text-[var(--color-primary)]">Resume</span>
                        </motion.h1>
                        <motion.p
                            className="text-xl text-[var(--color-text-light)] max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            A detailed overview of my professional experience, education, and skills
                        </motion.p>
                        <motion.div
                            className="flex flex-wrap justify-center gap-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <motion.a
                                href="tel:+601129645412"
                                className="flex items-center gap-2 text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon icon="tabler:phone" width="20" height="20" />
                                +601129645412
                            </motion.a>
                            <motion.a
                                href="mailto:mohamedali20@graduate.utm.my"
                                className="flex items-center gap-2 text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon icon="tabler:mail" width="20" height="20" />
                                mohamedali20@graduate.utm.my
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/mohamed-ibrahim-51974b28a/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon icon="tabler:brand-linkedin" width="20" height="20" />
                                LinkedIn
                            </motion.a>
                            <motion.a
                                href="https://github.com/MohdSaif44"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon icon="tabler:brand-github" width="20" height="20" />
                                GitHub
                            </motion.a>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <a
                                href="https://drive.google.com/file/d/19_1d3Pytu4RL_yrqf2IZEE4hL2E7TUbI/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary inline-flex items-center px-10 py-5 text-xl"
                            >
                                <Icon icon="tabler:file-cv" width="24" height="24" className="mr-2" />
                                Download CV
                                <Icon icon="tabler:download" width="24" height="24" className="ml-2" />
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Education Section */}
            <section className="py-16 bg-[var(--color-dark-lighter)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold text-[var(--color-text)] mb-8 text-center">Education</h2>
                        <motion.div
                            className="card p-8"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-[var(--color-primary)]/10 rounded-xl">
                                    <Icon icon="tabler:school" width="32" height="32" className="text-[var(--color-primary)]" />
                                </div>
                                <div className="flex-1 space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-[var(--color-text)]">UTM Malaysia</h3>
                                        <p className="text-[var(--color-primary)] text-lg font-medium mt-1">Bachelor of Electrical Engineering with hounors</p>
                                        <p className="text-[var(--color-text-light)] mt-2">Oct 2022 – Oct 2026</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="text-[var(--color-text)] font-medium mb-2">Specialization</h4>
                                                <div className="flex items-center gap-2 text-[var(--color-text-light)]">
                                                    <Icon icon="tabler:cpu" className="text-[var(--color-primary)]" />
                                                    Robotics & Automation Engineering
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-[var(--color-text)] font-medium mb-2">Academic Performance</h4>
                                                <div className="flex items-center gap-2 text-[var(--color-text-light)]">
                                                    <Icon icon="tabler:chart-bar" className="text-[var(--color-primary)]" />
                                                    CGPA: 3.95 / 4.00
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="text-[var(--color-text)] font-medium mb-2">Achievements</h4>
                                                <ul className="space-y-2">
                                                    <li className="flex items-center gap-2 text-[var(--color-text-light)]">
                                                        <Icon icon="tabler:trophy" className="text-[var(--color-primary)]" />
                                                        6× Dean's List Honoree
                                                    </li>
                                                    <li className="flex items-center gap-2 text-[var(--color-text-light)]">
                                                        <Icon icon="tabler:book" className="text-[var(--color-primary)]" />
                                                        Abu Robocon Malaysia National Champion 2025
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Experience Timeline */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        className="text-3xl font-bold text-[var(--color-text)] mb-12 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Professional Experience
                    </motion.h2>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--color-primary)]/30" />

                        {/* Timeline Items */}
                        <div className="space-y-12">
                            {/* A2Tech */}
                            <motion.div
                                className="relative pl-20"
                                {...timelineItem}
                            >
                                <div className="absolute left-0 w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center">
                                    <Icon icon="tabler:robot" width="24" height="24" className="text-[var(--color-primary)]" />
                                </div>
                                <div className="card p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-[var(--color-text)]">Automation & Testing Engineer</h3>
                                            <p className="text-[var(--color-primary)]">TSH Contract Manifacturing</p>
                                        </div>
                                        <span className="text-[var(--color-text-light)]">April 2025 – July 2025</span>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 text-sm font-medium rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/30">
                                                <Icon icon="tabler:code" className="inline-block mr-1" /> FOCAS2
                                            </span>
                                            <span className="px-3 py-1 text-sm font-medium rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/30">
                                                <Icon icon="tabler:map" className="inline-block mr-1" /> Python
                                            </span>
                                            <span className="px-3 py-1 text-sm font-medium rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/30">
                                                <Icon icon="tabler:react" className="inline-block mr-1" /> Modbus RTU
                                            </span>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-3">
                                                <Icon icon="tabler:check-circle" className="text-[var(--color-primary)] mt-1 flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-medium text-[var(--color-text)]">CNC Machine Testing</h4>
                                                    <p className="text-[var(--color-text-light)]">Developed a custom hardware signal testing system for Makino F-series machines.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <Icon icon="tabler:check-circle" className="text-[var(--color-primary)] mt-1 flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-medium text-[var(--color-text)]">Testing Application Development</h4>
                                                    <p className="text-[var(--color-text-light)]">Extended a PySide2-based GUI for real-time signal inspection, result logging, and test automation.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Aonic */}
                            <motion.div
                                className="relative pl-20"
                                {...timelineItem}
                            >
                                <div className="absolute left-0 w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center">
                                    <Icon icon="tabler:robot" width="24" height="24" className="text-[var(--color-primary)]" />
                                </div>
                                <div className="card p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-[var(--color-text)]">Senior Robot Programmer</h3>
                                            <p className="text-[var(--color-primary)]">UTM Robocon Club</p>
                                        </div>
                                        <span className="text-[var(--color-text-light)]">Nov 2023 – May 2025</span>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 text-sm font-medium rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/30">
                                                <Icon icon="tabler:car" className="inline-block mr-1" /> ROS2
                                            </span>
                                            <span className="px-3 py-1 text-sm font-medium rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/30">
                                                <Icon icon="tabler:map" className="inline-block mr-1" /> SLAM
                                            </span>
                                            <span className="px-3 py-1 text-sm font-medium rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/30">
                                                <Icon icon="tabler:route" className="inline-block mr-1" /> STM32
                                            </span>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-3">
                                                <Icon icon="tabler:check-circle" className="text-[var(--color-primary)] mt-1 flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-medium text-[var(--color-text)]">Robot Development</h4>
                                                    <p className="text-[var(--color-text-light)]">Developed control software to navigate a game field, interact with game objects, and execute mission-critical tasks under tight timing constraints.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <Icon icon="tabler:check-circle" className="text-[var(--color-primary)] mt-1 flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-medium text-[var(--color-text)]">Navigation System Integration</h4>
                                                    <p className="text-[var(--color-text-light)]">Integrated SLAM & distance sensors (Lasers, encoders, and LiDAR) for real-time localization and obstacle awareness. Thus improving the robot's position accuracy by 50%.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* UTM FKE Lab */}
                            
                            {/* Airost Club */}
                           
                            {/* SNS AD HQ */}
                            
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications & Activities */}
            <section className="py-16 bg-[var(--color-dark-lighter)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        className="text-3xl font-bold text-[var(--color-text)] mb-12 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Certifications & Activities
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Certifications */}
                        <motion.div
                            className="card p-6"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-[var(--color-primary)]/10 rounded-lg">
                                    <Icon icon="tabler:certificate" width="24" height="24" className="text-[var(--color-primary)]" />
                                </div>
                                <h3 className="text-xl font-bold text-[var(--color-text)]">Certifications</h3>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    
                                ].map((cert, index) => (
                                    <motion.li
                                        key={cert.name}
                                        className="flex items-center gap-2 text-[var(--color-text-light)]"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <Icon icon="tabler:check" width="16" height="16" className="text-[var(--color-primary)]" />
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-[var(--color-primary)] transition-colors"
                                        >
                                            {cert.name}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Activities */}
                        <motion.div
                            className="card p-6"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-[var(--color-primary)]/10 rounded-lg">
                                    <Icon icon="tabler:users" width="24" height="24" className="text-[var(--color-primary)]" />
                                </div>
                                <h3 className="text-xl font-bold text-[var(--color-text)]">Extracurricular Activities</h3>
                            </div>
                            <ul className="space-y-3">
                                {[
                                   
                                ].map((activity, index) => (
                                    <motion.li
                                        key={activity.name}
                                        className="flex items-center gap-2 text-[var(--color-text-light)]"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <Icon icon="tabler:check" width="16" height="16" className="text-[var(--color-primary)]" />
                                        {activity.link ? (
                                            <a
                                                href={activity.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-[var(--color-primary)] transition-colors"
                                            >
                                                {activity.name}
                                            </a>
                                        ) : (
                                            activity.name
                                        )}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
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
                            <a
                                href="http://wa.me/601129645412"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary inline-flex items-center px-10 py-5 text-xl"
                            >
                                <Icon icon="tabler:message-circle" width="24" height="24" className="mr-2" />
                                Get In Touch
                                <Icon icon="tabler:arrow-right" width="24" height="24" className="ml-2" />
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Resume
