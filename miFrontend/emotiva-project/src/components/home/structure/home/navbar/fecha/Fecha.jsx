import { useState, useEffect } from 'react';
import './fecha.css';

export const Fecha = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Actualizar la fecha y hora cada segundo
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Limpieza del intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  const formatDateTime = (date) => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
    return date.toLocaleDateString('es-ES', options);
  };

  return (
    <div className='navdate'>
      <p>{formatDateTime(currentDateTime)}</p>
    </div>
  );
};
