// Script principal para el sitio web de Agreste

/**
 * Inicializa el sitio web
 * Esta función se ejecuta cuando el DOM está completamente cargado
 */
function initializeSite() {
    // Función de inicialización
    // Agrega aquí tu código JavaScript personalizado
    console.log('Sitio web de Agreste inicializado');
}

/**
 * Función de utilidad para mostrar mensajes
 * @param {string} message - El mensaje a mostrar
 */
function showMessage(message) {
    console.log(message);
}

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sitio web de Agreste cargado correctamente');
    
    // Inicializar el sitio
    initializeSite();
});
