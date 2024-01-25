import moment from 'moment-with-locales-es6';
moment.locale('es');

export const LOGIN = '/login';
export const HOME = '/';
export const PRIVATE = '/private';
export const LOGOUT = '/private/logout';
export const url = "http://localhost:3000"

export const fetchUsuarios = async (token) => {
  try {
    const response = await fetch(`${url}/users/listaUsuarios`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
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

export const fetchRelevanteDetails = async (id, setRelevanteDetails, setLoading) => {
  try {
    const response = await fetch(`${url}/news/${id}`);
    if (response.ok) {
      const data = await response.json();
      setRelevanteDetails(data);
    } else {
      console.error("Error al obtener los detalles del personal.");
    }
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
  } finally {
    setLoading(false);
  }
};

export const formatFechaHora = (fecha) => {
  const publishDateTime = moment(fecha);
  return publishDateTime.format('DD MMMM YYYY - h:mm a');
};