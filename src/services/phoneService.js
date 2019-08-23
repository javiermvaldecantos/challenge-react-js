/**
 * Este archivo contiene funciones para enviar y recibir datos (llamadas a APIs, etc.).
 */
import axios from 'axios';

const phoneService = {
    getPhoneList: (callbacks) => {
        axios.get('/api/phones')
            .then((response) => {
                // La lista de teléfonos se ha recibido correctamente
                callbacks.success(response.data);
            })
            .catch((error) => {
                // Ha habido un error
                callbacks.failure(error);
            })
            .finally(() => {
                // Siempre se ejecuta
                callbacks.always();
            });
    }
}

export default phoneService;