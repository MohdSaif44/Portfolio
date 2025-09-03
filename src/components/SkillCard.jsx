const SkillCard = ({ title, skills }) => {
    return (
        <div className="bg-gray-500 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 rounded-full text-white bg-darktheme text-sm font-medium"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SkillCard;