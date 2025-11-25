import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Navbar />

            <div className="flex-grow pt-32 pb-16 px-8">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">Contactez-nous</h1>
                    <p className="text-gray-600 text-center mb-12 text-lg">
                        Parlez-nous de votre projet. Nous vous répondrons sous 24 heures.
                    </p>

                    <form className="space-y-6 bg-surface p-8 rounded-xl border border-border shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-700">Nom</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                    placeholder="Votre nom"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                    placeholder="votre@email.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-gray-700">Sujet</label>
                            <select
                                id="subject"
                                className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none"
                            >
                                <option>Développement Web</option>
                                <option>Montage Vidéo</option>
                                <option>Data Science / IA</option>
                                <option>Autre</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                rows={6}
                                className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                                placeholder="Détaillez votre projet..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary text-white font-bold py-4 rounded-md hover:bg-primary-hover transition-colors"
                        >
                            Envoyer le message
                        </button>
                    </form>
                </div>
            </div>

            <Footer />
        </main>
    );
}
