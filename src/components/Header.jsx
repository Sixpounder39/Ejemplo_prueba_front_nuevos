// Se valora el estilo que quiera el candidato
import { Link } from 'react-router-dom';
export default function Header() {
return (
    <header className="bg-indigo-600 text-white shadow-lg py-5">
        <nav className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
            <h1 className="font-extrabold text-2xl mb-4 sm:mb-0 text-center sm:text-left w-full sm:w-auto drop-shadow-lg tracking-wide text-white">
                Demo Reto React + Vite Jr
            </h1>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 w-full sm:w-auto items-center">
                <Link
                    to="/"
                    className="transition-colors duration-200 px-4 py-2 rounded-md border border-white text-white font-medium w-full sm:w-auto text-center hover:bg-white/10"
                >
                    Home
                </Link>
                <Link
                    to="/posts"
                    className="transition-colors duration-200 px-4 py-2 rounded-md border border-white text-white font-medium w-full sm:w-auto text-center hover:bg-white/10"
                >
                    Lista de Posts
                </Link>
                <Link
                    to="/salir"
                    className="transition-colors duration-200 px-4 py-2 rounded-md border border-white text-white font-medium w-full sm:w-auto text-center hover:bg-white/10"
                >
                    Salir
                </Link>
            </div>
        </nav>
    </header>
);
}
