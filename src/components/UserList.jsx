// Se valora el estilo que quiera aplicar el usuario
// Este componente podría listar una tabla con los usuarios registrados, puede ser inventados
export default function UserList() {
	return (
		<div className="p-4 bg-gray-100 rounded shadow">
			<h4 className="font-bold mb-2">Listado de Usuarios</h4>
			<ul>
				<li>Usuario 1</li>
				<li>Usuario 2</li>
			</ul>
		</div>
	);
}