const EducationCard = ({ education }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-bold text-darktheme">{education.degree}</h3>
                <span className="text-sm font-medium text-theme">
                    {education.startDate} - {education.endDate || "Present"}
                </span>
            </div>

            <div className="mb-4">
                <span className="text-lg font-medium text-gray-700 ">{education.institution}</span>
                <span className="mx-2 text-gray-500">•</span>
                <span className="text-gray-600">{education.location}</span>
            </div>

            {education.description && <p className="text-gray-600 mb-4">{education.description}</p>}

            {education.achievements && education.achievements.length > 0 && (
                <div className="mt-2">
                    <h4 className="text-md font-medium text-gray-800 mb-2">Achievements:</h4>
                    <ul className="list-disc list-inside text-gray-600  space-y-1">
                        {education.achievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default EducationCard
