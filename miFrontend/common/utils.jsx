import moment from 'moment-with-locales-es6';
moment.locale('es');

/**
 * Constantes de rutas para la aplicación.
 */
export const LOGIN = '/login';
export const HOME = '/';
export const PRIVATE = '/private';
export const LOGOUT = '/private/logout';
export const url = "http://localhost:3000"

/**
 * Realiza una solicitud para obtener la lista de usuarios.
 *
 * @param {string} token - Token de autenticación.
 * @returns {Promise<Array>} - Promise que se resuelve con la lista de usuarios o null si hay un error.
 */
export const fetchUsuarios = async (token) => {
  try {
    const response = await fetch(`${url}/users/listaUsuarios`, {
      method: "GET",
      headers: { "Authorization": `Bearer ${token}` }
    });
    if (response.status === 200) {
      const data = await response.json();
      return data.data;
    } else {
      console.error("Error al obtener los datos del usuario");
      return null;
    }
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
    return null;
  }
};

/**
 * Realiza una solicitud para obtener los detalles de una noticia relevante.
 *
 * @param {string} id - ID de la noticia relevante.
 * @param {function} setRelevanteDetails - Función para establecer los detalles de la noticia.
 * @param {function} setLoading - Función para cambiar el estado de carga.
 */
export const fetchRelevanteDetails = async (id, setRelevanteDetails, setLoading) => {
  try {
    const response = await fetch(`${url}/news/${id}`);
    if (response.ok) {
      const data = await response.json();
      setRelevanteDetails(data);
    } else { console.error("Error al obtener los detalles del personal.") }
  } catch (error) { console.error("Error al realizar la solicitud:", error) }
  finally { setLoading(false) }
};

/**
 * Realiza una solicitud para obtener los detalles de una noticia relevante.
 *
 * @param {string} id - ID de la noticia relevante.
 * @param {function} setSportsDetails - Función para establecer los detalles de la noticia.
 * @param {function} setLoading - Función para cambiar el estado de carga.
 */
export const fetchSportsDetails = async (id, setSportsDetails, setLoading) => {
  try {
    const response = await fetch(`${url}/sports/${id}`);
    if (response.ok) {
      const data = await response.json();
      setSportsDetails(data);
    } else { console.error("Error al obtener los detalles del personal.") }
  } catch (error) { console.error("Error al realizar la solicitud:", error) }
  finally { setLoading(false) }
};

/**
 * Realiza una solicitud para obtener los detalles de una noticia relevante.
 *
 * @param {string} id - ID de la noticia relevante.
 * @param {function} setStyleDetails - Función para establecer los detalles de la noticia.
 * @param {function} setLoading - Función para cambiar el estado de carga.
 */
export const fetchStyleDetails = async (id, setStyleDetails, setLoading) => {
  try {
    const response = await fetch(`${url}/lifestyle/${id}`);
    if (response.ok) {
      const data = await response.json();
      setStyleDetails(data);
    } else { console.error("Error al obtener los detalles del personal.") }
  } catch (error) { console.error("Error al realizar la solicitud:", error) }
  finally { setLoading(false) }
};

/**
 * Realiza una solicitud para obtener los detalles de una noticia relevante.
 *
 * @param {string} id - ID de la noticia relevante.
 * @param {function} setEntertainmentDetails - Función para establecer los detalles de la noticia.
 * @param {function} setLoading - Función para cambiar el estado de carga.
 */
export const fetchEntertainmentDetails = async (id, setEntertainmentDetails, setLoading) => {
  try {
    const response = await fetch(`${url}/entertainment/${id}`);
    if (response.ok) {
      const data = await response.json();
      setEntertainmentDetails(data);
    } else console.error("Error al obtener los detalles del personal.")
  } catch (error) { console.error("Error al realizar la solicitud:", error) }
  finally { setLoading(false) }
};

/**
 * Realiza una solicitud para obtener datos de entretenimiento desde el servidor.
 *
 * @param {function} setEntertainmentData - Función para establecer los datos de entretenimiento en el estado.
 * @throws {Error} - Lanza un error si la solicitud no es exitosa o si hay un problema al obtener los datos.
 * @returns {Promise<void>} - Una promesa que se resuelve cuando se obtienen y establecen correctamente los datos de entretenimiento.
 */
export const fetchEntertainmentData = async (setEntertainmentData) => {
  try {
    const response = await fetch(`${url}/entertainment/getEntertainment`);
    if (!response.ok) throw new Error("Error al obtener los datos de entretenimiento");
    const data = await response.json();
    setEntertainmentData(data);
  } catch (error) { console.error(error) }
};

/**
 * Realiza una solicitud para obtener datos de entretenimiento desde el servidor.
 *
 * @param {function} setSliderDetails - Función para establecer los datos de entretenimiento en el estado.
 * @throws {Error} - Lanza un error si la solicitud no es exitosa o si hay un problema al obtener los datos.
 * @returns {Promise<void>} - Una promesa que se resuelve cuando se obtienen y establecen correctamente los datos de entretenimiento.
 */
export const fetchSliderDetails = async (id, setSliderDetails, setLoading) => {
  try {
    const response = await fetch(`${url}/slider/${id}`);
    if (response.ok) {
      const data = await response.json();
      setSliderDetails(data);
    } else {
      console.error("Error al obtener los detalles del personal.");
    }
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
  } finally {
    setLoading(false);
  }
};

/**
 * Formatea una fecha y hora en el formato específico.
 *
 * @param {string} fecha - La fecha a formatear.
 * @returns {string} - La fecha y hora formateada.
 */
export const formatFechaHora = (fecha) => {
  const publishDateTime = moment(fecha);
  return publishDateTime.format('DD MMMM YYYY - h:mm a');
};

/**
 * Divide un array en bloques más pequeños de un tamaño específico.
 *
 * @param {Array} array - El array que se va a dividir.
 * @param {number} size - El tamaño de cada bloque.
 * @returns {Array} - Un nuevo array que contiene bloques del array original.
 *
 * @example
 * const arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8];
 * const tamañoDelBloque = 3;
 * const resultado = chunk(arrayOriginal, tamañoDelBloque);
 * // resultado: [[1, 2, 3], [4, 5, 6], [7, 8]]
 *
 * @throws {TypeError} - Si el primer argumento no es un array o el segundo argumento no es un número positivo.
 */
export const chunk = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) { result.push(array.slice(i, i + size)) }
  return result;
};