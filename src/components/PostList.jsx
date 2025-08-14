// Se debe conectar a la API https://jsonplaceholder.typicode.com/posts
// Debe mostrar una lista de posts con paginación
export default function PostList() {
	return (
		<div className="p-4 bg-gray-100 rounded shadow">
			<h4 className="font-bold mb-2">Listado de Posts</h4>
			<ul>
				<li>Post 1</li>
				<li>Post 2</li>
			</ul>
		</div>
	);
}
