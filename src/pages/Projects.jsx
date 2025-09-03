"use client"

import { useState, useEffect } from "react"
import ProjectCard from "../components/ProjectCard"
import projectsData from "../data/projects.json"
import { projectCategories } from "../data/categories"
import { motion } from "framer-motion"
import { Icon } from "@iconify/react"

const Projects = () => {
    const [projects, setProjects] = useState([])
    const [filteredProjects, setFilteredProjects] = useState([])
    const [activeFilter, setActiveFilter] = useState("all")

    useEffect(() => {
        setProjects(projectsData)
        setFilteredProjects(projectsData)
    }, [])

    const handleFilterChange = (categoryId) => {
        setActiveFilter(categoryId)

        if (categoryId === "all") {
            setFilteredProjects(projects)
        } else {
            const filtered = projects.filter((project) =>
                project.category.includes(categoryId)
            )
            setFilteredProjects(filtered)
        }
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
                                Portfolio Showcase
                            </span>
                        </motion.div>
                        <motion.h1
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-text)]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            My <span className="text-[var(--color-primary)]">Projects</span>
                        </motion.h1>
                        <motion.p
                            className="text-xl text-[var(--color-text-light)] max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            A collection of my work in robotics, AI, IoT and embedded systems. Each project represents a unique solution to real-world challenges.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-16 bg-[var(--color-dark-lighter)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="flex flex-wrap justify-center gap-4 mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {projectCategories.map((category, index) => (
                            <motion.button
                                key={category.id}
                                onClick={() => handleFilterChange(category.id)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === category.id
                                    ? "bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/20"
                                    : "bg-[var(--color-dark)] text-[var(--color-text-light)] hover:text-[var(--color-text)] border border-[var(--color-primary)]/30"
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <div className="flex items-center gap-2">
                                    <Icon icon={category.icon} width="16" height="16" />
                                    {category.name}
                                </div>
                            </motion.button>
                        ))}
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                        {filteredProjects.length === 0 && (
                            <motion.div
                                className="col-span-full text-center py-12"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="inline-block bg-[var(--color-dark)] text-[var(--color-text)] px-6 py-3 rounded-lg border border-[var(--color-primary)]/30">
                                    No projects found in this category.
                                </div>
                            </motion.div>
                        )}
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

export default Projects
