import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { url } from '../../../../../common/utils';

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [userEditing, setUserEditing] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/users/listaUsuarios`);
        if (!response.ok) throw new Error('Error al obtener los datos');
        const data = await response.json();
        console.log(data); // Verifica los datos en la consola
        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          throw new Error('Los datos no son un array');
        }
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);


  const handleUpdate = (u) => {
    setUserEditing(u);
    setIsEditModalOpen(true);
  };

  const handleCancelUpdate = () => {
    setUserEditing(null);
    setIsEditModalOpen(false);
  };

  // const handleSaveUpdate = async () => {
  //   try {
  //     const formData = new FormData();
  //     formData.append('_id', sliderEditing._id);
  //     formData.append('nombre', sliderEditing.title);
  //     formData.append('email', sliderEditing.subtitle);

  //     const response = await fetch(`${url}/slider/${sliderEditing._id}`, { method: 'PUT', body: formData });

  //     if (!response.ok) {
  //       throw new Error('Error al actualizar los datos');
  //     }

  //     // Actualizar el estado del slider después de la edición
  //     setUsers((prevUsers) => prevUsers.map((user) => user._id === sliderEditing._id ? { ...user, ...sliderEditing } : user));

  //     // Limpiar el estado de edición
  //     setSliderEditing(null);
  //     setImageFile(null);
  //     setIsEditModalOpen(false);
  //   } catch (error) {
  //     console.error('Error al guardar los cambios:', error.message);
  //   }
  // };

  // const handleDelete = async (_id) => {
  //   try {
  //     const response = await fetch(`${url}/slider/${_id}`, {
  //       method: 'DELETE',
  //     });
  //     if (!response.ok) {
  //       throw new Error('Error al eliminar el usuario');
  //     }
  //     const updatedUsers = users.filter((user) => user._id !== _id);
  //     setUsers(updatedUsers);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

  return (
    <div className='st-tab-sli'>
      <h2>Administrador de Usuarios</h2>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>País</th>
              <th>Departamento</th>
              <th>Ciudad</th>
              <th>Contraseña</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.nombre}</td>
                <td>{user.email}</td>
                <td>{user.país}</td>
                <td>{user.departamento}</td>
                <td>{user.ciudad}</td>
                <td>{user.contraseña}</td>
                <td>{user.rol}</td>
                <td>
                  <button className="edit" onClick={() => handleUpdate(user)}>
                    <FontAwesomeIcon icon={faEdit} size="1x" />
                  </button>
                  {/* <button className="trash" onClick={() => handleDelete(user._id)}>
                    <FontAwesomeIcon icon={faTrashAlt} size="1x" />
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Modal
        isOpen={isEditModalOpen}
        onRequestClose={handleCancelUpdate}
        contentLabel="Editar Usuario"
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        {userEditing && (
          <div className='form-slider'>
            <h3>Editar Usuario</h3>
            <div className="col-md-12">
              <form>
                <div className="mb-3">
                  <label htmlFor="_id" className="form-label">ID</label>
                  <input
                    type="text"
                    id="_id"
                    value={userEditing._id}
                    onChange={(e) =>
                      setUserEditing({ ...userEditing, _id: e.target.value })
                    }
                    className="form-control"
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Nombre</label>
                  <input
                    type="text"
                    id="title"
                    value={userEditing.nombre}
                    onChange={(e) =>
                      setUserEditing({ ...userEditing, nombre: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="subtitle" className="form-label">Email</label>
                  <input
                    type="text"
                    id="subtitle"
                    value={userEditing.email}
                    onChange={(e) =>
                      setUserEditing({ ...userEditing, email: e.target.value })
                    }
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">País</label>
                  <input
                    type="text"
                    id="description"
                    value={userEditing.país}
                    onChange={(e) =>
                      setUserEditing({
                        ...userEditing,
                        país: e.target.value,
                      })
                    }
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Departamento</label>
                  <input
                    type="text"
                    id="description"
                    value={userEditing.departamento}
                    onChange={(e) =>
                      setUserEditing({
                        ...userEditing,
                        departamento: e.target.value,
                      })
                    }
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Ciudad</label>
                  <input
                    type="text"
                    id="description"
                    value={userEditing.ciudad}
                    onChange={(e) =>
                      setUserEditing({
                        ...userEditing,
                        ciudad: e.target.value,
                      })
                    }
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Contraseña</label>
                  <input
                    type="text"
                    id="description"
                    value={userEditing.contraseña}
                    onChange={(e) =>
                      setUserEditing({
                        ...userEditing,
                        contraseña: e.target.value,
                      })
                    }
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Rol</label>
                  <input
                    type="text"
                    id="description"
                    value={userEditing.rol}
                    onChange={(e) =>
                      setUserEditing({
                        ...userEditing,
                        rol: e.target.value,
                      })
                    }
                    className="form-control"
                  />
                </div>

                <div className="slide d-flex justify-content-end">
                  <button type="button" onClick={handleCancelUpdate} className="btn-cancel-sli">
                    Cancelar
                  </button>
                  {/* <button type="button" onClick={handleSaveUpdate} className="btn-update-sli">
                    Guardar Cambios
                  </button> */}
                </div>
              </form>
            </div>
          </div>
        )}
      </Modal>

    </div>
  );
};
