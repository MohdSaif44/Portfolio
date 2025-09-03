import socialData from "../data/social.json"
import { Icon } from "@iconify/react"

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <div className="bg-[var(--color-dark-lighter)] border-t border-[var(--color-gray-700)] py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-[var(--color-text-light)]">
                            &copy; {currentYear} Mohamed Saifeldin. All rights reserved.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        {socialData.map((item) => (
                            <a
                                key={item.name}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--color-text-light)] hover:text-[var(--color-accent)] hover:scale-110 transition-all duration-300"
                                aria-label={item.name}
                            >
                                <Icon icon={item.icon} className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
