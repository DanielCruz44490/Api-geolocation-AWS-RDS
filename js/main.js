// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    const API_ESTUDIANTE_URL = 'https://66db3da9f47a05d55be77be9.mockapi.io/api/v1/estudiante';

    // Referencia al tbody de la tabla
    const tbody = document.getElementById("table-body");

    // Función para obtener los datos de los estudiantes
    const obtenerDatosEstudiantes = async () => {
        try {
            const response = await fetch(API_ESTUDIANTE_URL); // Hacer petición a la API
            const data = await response.json(); // Convertir respuesta a JSON

            // Limpiar el tbody
            tbody.innerHTML = '';

            // Crear filas con los datos de cada estudiante
            data.forEach(estudiante => {
                const fila = document.createElement("tr");
                fila.innerHTML = `
                    <td>${estudiante.Ip}</td>
                    <td>${estudiante.Pais}</td>
                    <td>${estudiante.Continente}</td>
                    <td>${estudiante.ciudad}</td>
                `;

                // Agregar la fila al tbody
                tbody.appendChild(fila);
            });

            // Mostrar o esconder mensaje de "No hay registros"
            document.getElementById("no-records-message").style.display = data.length ? "none" : "block";

        } catch (error) {
            console.error("Error al obtener los datos de estudiantes:", error);
            alert("No se pudo obtener la información de los estudiantes.");
        }
    };

    // Llamar a la función para mostrar los datos de los estudiantes al cargar la página
    obtenerDatosEstudiantes();

    // Actualizar los datos cada 10 segundos
    setInterval(obtenerDatosEstudiantes, 10000); // 10,000 ms = 10 segundos
});

