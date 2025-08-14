// Se valora el estilo que quiera el candidato para el formulario
export default function UserForm() {
	return (
		<form className="p-4 bg-white rounded shadow mb-4">
			<h4 className="font-bold mb-2">Formulario de Usuario</h4>
			<div className="mb-2">
				<input
					type="text"
					placeholder="Nombre"
					className="border p-2 rounded w-full"
				/>
			</div>
			<button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
				Guardar
			</button>
		</form>
	);
}
