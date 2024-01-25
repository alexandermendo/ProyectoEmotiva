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
    if (response.status === 200) { const data = await response.json();
      return data.data;
    } else { console.error("Error al obtener los datos del usuario");
      return null;
    }
  } catch (error) { console.error("Error al realizar la solicitud:", error);
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
  } catch (error) { console.error("Error al realizar la solicitud:", error)} 
  finally { setLoading(false)}
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