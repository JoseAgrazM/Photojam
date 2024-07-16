export const downloadImage = async url => {
	const downloadUrl = url;
	try {
		const response = await fetch(downloadUrl, {
			method: 'GET',
			headers: {
				Authorization: `Client-ID ${import.meta.env.VITE_ACCESS_KEY}`,
			},
		});

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(
				`Error en la solicitud: ${response.status} ${errorText}`
			);
		}

		const contentType = response.headers.get('content-type');
		if (contentType && contentType.indexOf('application/json') !== -1) {
			const json = await response.json();
			console.error('Error JSON:', json);
			throw new Error('La respuesta es JSON en lugar de una imagen.');
		}

		const blob = await response.blob();
		console.log(blob.type); // Debería ser "image/jpeg" o similar

		const url = window.URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.setAttribute('download', 'imagen.jpg'); // Asegúrate de que el nombre del archivo tenga la extensión correcta
		document.body.appendChild(link);
		link.click();
		link.parentNode.removeChild(link);
		window.URL.revokeObjectURL(url); // Limpia la URL creada
	} catch (error) {
		console.error('Error descargando la imagen:', error);
	}
};
