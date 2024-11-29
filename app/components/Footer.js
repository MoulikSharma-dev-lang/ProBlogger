export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="text-center py-3 bg-blue-950">
            <p className="text-2xl font-bold">Copyright &copy; ProBlogger {currentYear} | All rights reserved!</p>
        </footer>
    )
}