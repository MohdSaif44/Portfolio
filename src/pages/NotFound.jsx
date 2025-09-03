import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
            <h1 className="text-9xl font-bold text-theme2">404</h1>
            <h2 className="text-3xl font-bold text-theme2 mb-4">Page Not Found</h2>
            <p className="text-xl text-darktheme/80 max-w-md mb-8">
                The page you are looking for might have been removed, had its name changed or is temporarily unavailable.
            </p>
            <Link
                to="/"
                className="inline-flex items-center px-6 py-3 bg-theme text-white font-medium rounded-md hover:bg-blue-400 transition-colors"
            >
                <Icon icon="tabler:home" width="18" height="18" className="mr-2" />
                Back to Home
            </Link>
        </div>
    )
}

export default NotFound
