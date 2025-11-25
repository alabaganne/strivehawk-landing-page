import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 h-20 flex items-center justify-between px-8 bg-background/80 backdrop-blur-md border-b border-border z-50">
            <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <span className="text-primary">Strivehawk</span>
                </Link>

                <div className="hidden md:flex gap-8">
                    <Link href="/#services" className="text-gray-500 text-sm hover:text-foreground transition-colors">
                        Services
                    </Link>
                    <Link href="/#portfolio" className="text-gray-500 text-sm hover:text-foreground transition-colors">
                        Portfolio
                    </Link>
                    <Link href="/#faq" className="text-gray-500 text-sm hover:text-foreground transition-colors">
                        FAQ
                    </Link>
                </div>

                <Link href="/contact" className="px-4 py-2 bg-surface border border-border rounded-md text-foreground text-sm hover:border-primary hover:text-primary transition-all">
                    Commencer
                </Link>
            </div>
        </nav>
    );
}
