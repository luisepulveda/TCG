// Función para buscar libros
function searchBooks() {
    // Obtener el término de búsqueda ingresado por el usuario
    const searchTerm = document.getElementById('search-input').value;

    // Realizar la solicitud a la API de Google Books
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta de la API');
            }
            return response.json();
        })
        .then(data => {
            if (!data.items || data.items.length === 0) {
                displayNoResults();
            } else {
                // Llamar a la función para mostrar los resultados en la página
                displayResults(data.items);
            }
        })
        .catch(error => {
            console.error('Error al buscar libros:', error);
            displayError();
        });
}

// Función para mostrar los resultados de la búsqueda en la página
function displayResults(books) {
    // Obtener el contenedor de resultados
    const resultsContainer = document.getElementById('results');
    // Limpiar cualquier resultado anterior
    resultsContainer.innerHTML = '';

    // Iterar sobre cada libro y mostrar su información
    books.forEach(book => {
        // Crear un elemento de div para mostrar la información del libro
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');

        // Obtener información relevante del libro
        const title = book.volumeInfo.title || 'Título no disponible';
        const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Autor desconocido';
        const description = book.volumeInfo.description || 'Descripción no disponible';
        const thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'placeholder.png';

        // Crear elementos HTML para mostrar la información del libro
        const titleElement = document.createElement('h2');
        titleElement.textContent = title;

        const authorsElement = document.createElement('p');
        authorsElement.textContent = 'Autor(es): ' + authors;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = description;

        const thumbnailElement = document.createElement('img');
        thumbnailElement.src = thumbnail;
        thumbnailElement.alt = `Portada de ${title}`;

        // Agregar los elementos al contenedor del libro
        bookElement.appendChild(thumbnailElement);
        bookElement.appendChild(titleElement);
        bookElement.appendChild(authorsElement);
        bookElement.appendChild(descriptionElement);

        // Agregar el libro al contenedor de resultados
        resultsContainer.appendChild(bookElement);
    });
}

// Función para mostrar un mensaje cuando no hay resultados
function displayNoResults() {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '<p>No se encontraron libros para la búsqueda realizada.</p>';
}

// Función para mostrar un mensaje de error
function displayError() {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '<p>Ocurrió un error al buscar los libros. Por favor, intenta nuevamente más tarde.</p>';
}
