document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registroForm");

    // Intento generar un id individual a para cada objeto, sin exito 
    let objetoID =  1;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const fechaNacimiento = document.getElementById("fechaNacimiento").value;

        const data = {
            id: objetoID, // Asigna el ID secuencial
            nombre: nombre,
            apellido: apellido,
            fechaNacimiento: fechaNacimiento
        };

        // Incrementa el contador de IDs para el siguiente objeto
        objetoID++;

        // Guarda el nuevo valor de objetoID en el almacenamiento local
        localStorage.setItem("objetoID", objetoID);

        // Realiza la solicitud HTTP POST utilizando fetch
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            // Aquí puedes manejar la respuesta del servidor
            console.log(data);
            alert('Datos enviados exitosamente');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Ha ocurrido un error al enviar los datos');
        });
    });
});
