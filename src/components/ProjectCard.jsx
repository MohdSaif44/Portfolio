"use client"

import { useState } from "react"
import { Icon } from "@iconify/react"
import { projectCategories } from "../data/categories"

const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false)

    const getCategoryName = (categoryId) => {
        const category = projectCategories.find(cat => cat.id === categoryId)
        return category ? category.name : categoryId
    }

    return (
        <div
            className="card group hover:transform hover:scale-105"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className={`w-full h-48 object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
                />
                <div
                    className={`absolute inset-0 bg-[var(--color-dark)]/80 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
                >
                    <div className="flex space-x-4">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-[var(--color-dark-lighter)] rounded-full text-[var(--color-text)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 transform hover:scale-110"
                                aria-label="View GitHub repository"
                            >
                                <Icon icon="tabler:brand-github" width="24" height="24" />
                            </a>
                        )}
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-[var(--color-dark-lighter)] rounded-full text-[var(--color-text)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 transform hover:scale-110"
                                aria-label="View live demo"
                            >
                                <Icon icon="tabler:external-link" width="24" height="24" />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-xl font-bold text-[var(--color-text)]">{project.title}</h3>
                <p className="text-[var(--color-text-light)]">{project.description}</p>

                <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="px-2.5 py-1 text-xs font-medium rounded-full bg-[var(--color-primary)]/20 text-[var(--color-primary)] border border-[var(--color-primary)]/30"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {project.category.map((cat, index) => (
                            <span
                                key={index}
                                className="px-2.5 py-1 text-xs font-medium rounded-full bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] border border-[var(--color-secondary)]/30"
                            >
                                {getCategoryName(cat)}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
