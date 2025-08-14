// Se valora el estilo que quiera el candidato
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-10">
      <div className="container mx-auto text-center sm:text-left">
        &copy; {new Date().getFullYear()} Reto React + Vite Jr. Plantilla ejemplo
      </div>
    </footer>
  );
}
