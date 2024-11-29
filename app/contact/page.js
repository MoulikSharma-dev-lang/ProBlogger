export default function Contact() {
    return (
        <div>
            <main className="container mx-auto p-8 text-black">
                <section className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
                    <h1 className="text-3xl font-semibold mb-6 text-center text-blue-600">Contact Us</h1>
                    <p className="text-lg mb-6">We love hearing from our readers, whether you have a question, feedback, or just want to connect. Here’s how you can reach us:</p>

                    <h2 className="text-2xl font-semibold mb-4 text-blue-600">General Inquiries</h2>
                    <p className="text-lg mb-6">For general questions or inquiries about ProBlogger, please feel free to send us an email at:
                        <b className="text-blue-600">hello@problogger.com</b></p>

                    <h2 className="text-2xl font-semibold mb-4 text-blue-600">Advertising & Partnerships</h2>
                    <p className="text-lg">If you are interested in partnering with us or advertising on ProBlogger, please reach out to our partnership team at:
                        <b className="text-blue-600">partnerships@problogger.com</b></p>
                </section>
            </main>
        </div>
    )
}