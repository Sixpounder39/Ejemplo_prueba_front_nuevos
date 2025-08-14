// Esta sección se deja a criterio del candidato, solo se agregan elementos 
// para probar la página
import UserForm from '../components/userForm';
import UserList from '../components/UserList';
import PostList from '../components/PostList';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
  <main className="container mx-auto max-w-6xl p-4 flex-1">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Plantilla base sugerida para demo</h2>
        <p className="text-base md:text-lg mb-6">
          Este es un ejemplo de página usando React + Tailwind CSS responsivo.
        </p>

        {/*Sección demo: Gestión de Usuarios 
        Este debe mostrar lo necesario para gestionar usuarios (crear, editar, eliminar)*/}
        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">Gestión de Usuarios</h3>
          <UserForm />
          {/*Este componente podría listar una tabla con los usuarios registrados, puede ser inventados*/}
          <UserList />
        </section>

        {/*Sección demo: Listado de Posts */}
        <section>
          <h3 className="text-xl font-bold mb-4">Posts</h3>
          <PostList />
        </section>

      </main>

    </div>
  );
}
