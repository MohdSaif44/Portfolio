const ExperienceCard = ({ experience }) => {
    return (
        <div className="bg-darktheme rounded-lg shadow-md p-6 mb-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.position}</h3>
                <span className="text-sm font-medium text-theme">
                    {experience.startDate} - {experience.endDate || "Present"}
                </span>
            </div>

            <div className="mb-4">
                <span className="text-lg font-medium text-gray-300">{experience.company}</span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-gray-400">{experience.location}</span>
            </div>

            <ul className="list-disc list-inside text-gray-300 space-y-2">
                {experience.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            {experience.technologies && (
                <div className="mt-4 flex flex-wrap gap-2">
                    {experience.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="text-xs font-medium px-2.5 py-0.5 rounded bg-gray-800 text-white"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ExperienceCard
