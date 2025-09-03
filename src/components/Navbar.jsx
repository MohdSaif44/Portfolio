import { useState, useContext, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Icon } from "@iconify/react"
import logo from '../assets/react.svg'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [showResumeOptions, setShowResumeOptions] = useState(false)
    const location = useLocation()
    const CV_URL = "https://drive.google.com/file/d/19_1d3Pytu4RL_yrqf2IZEE4hL2E7TUbI/view?usp=drive_link"
    const CV_DOWNLOAD_URL = "https://drive.google.com/file/d/19_1d3Pytu4RL_yrqf2IZEE4hL2E7TUbI/view?usp=drive_link"
    const [isScrolled, setIsScrolled] = useState(false)

    const navLinks = [
        { name: "Home", path: "/", icon: "tabler:home" },
        { name: "About", path: "/about", icon: "tabler:user" },
        { name: "Projects", path: "/projects", icon: "tabler:apps" },
        {
            name: "Resume",
            path: CV_URL,
            isExternal: true,
            icon: "tabler:file-cv"
        }
    ]

    const socialLinks = [
        { icon: "mdi:github", link: "https://github.com/MohdSaif44" },
        { icon: "mdi:linkedin", link: "https://www.linkedin.com/in/mohamed-ibrahim-51974b28a/" },
        { icon: "ic:baseline-email", link: "mailto:mohamedali20@graduate.utm.my" }
    ]

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
        setShowResumeOptions(false)
    }

    const handleNavClick = (link) => {
        closeMenu()
        if (link.isExternal) {
            window.open(link.path, "_blank")
        }
    }

    const ResumeDropdown = () => (
        <div className="relative">
            <Link
                to="/resume"
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === "/resume"
                    ? "text-[var(--color-primary)]"
                    : "text-[var(--color-text-light)] hover:text-[var(--color-primary)]"
                    }`}
            >
                <Icon icon="tabler:file-cv" className="w-5 h-5" />
                <span>Resume</span>
            </Link>
        </div>
    )

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[var(--color-dark)] shadow-lg" : "bg-transparent"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-2">
                        <Icon icon="tabler:code" className="w-8 h-8 text-[var(--color-primary)]" />
                        <span className="text-xl font-bold text-[var(--color-text)]">Mohamed's Portfolio</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            link.name === "Resume" ? (
                                <ResumeDropdown key={link.name} />
                            ) : (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === link.path
                                        ? "text-[var(--color-primary)]"
                                        : "text-[var(--color-text-light)] hover:text-[var(--color-primary)]"
                                        }`}
                                >
                                    <Icon icon={link.icon} className="w-5 h-5" />
                                    <span>{link.name}</span>
                                </Link>
                            )
                        ))}
                        <div className="flex items-center space-x-4 pl-4 border-l border-[var(--color-gray-700)]">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.icon}
                                    href={link.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors p-2 rounded-full hover:bg-[var(--color-dark)]"
                                >
                                    <Icon icon={link.icon} className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Navigation Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-[var(--color-text-light)] hover:text-[var(--color-primary)] focus:outline-none"
                        >
                            <Icon icon={isMenuOpen ? "tabler:x" : "tabler:menu-2"} className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 bg-[var(--color-dark)] shadow-lg">
                    {navLinks.map((link) => (
                        link.name === "Resume" ? (
                            <div key={link.name} className="space-y-1">
                                <Link
                                    to="/resume"
                                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                                >
                                    Resume
                                </Link>
                            </div>
                        ) : (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path
                                    ? "text-[var(--color-primary)]"
                                    : "text-[var(--color-text-light)] hover:text-[var(--color-primary)]"
                                    }`}
                                onClick={closeMenu}
                            >
                                <Icon icon={link.icon} className="w-5 h-5" />
                                <span>{link.name}</span>
                            </Link>
                        )
                    ))}
                    <div className="flex items-center space-x-3 px-3 py-3 border-t border-[var(--color-gray-700)] mt-2">
                        {socialLinks.map((link) => (
                            <a
                                key={link.icon}
                                href={link.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors p-2 rounded-full hover:bg-[var(--color-dark)]"
                            >
                                <Icon icon={link.icon} className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
