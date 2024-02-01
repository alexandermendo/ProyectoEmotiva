import { useState, useEffect } from 'react';
import { formatDateTime, startDateTimeInterval } from '../../../../../../../../common/utils';
import './fecha.css';

export const Fecha = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => { const cleanupInterval = startDateTimeInterval(setCurrentDateTime);
    return cleanupInterval;
  }, []);

  return <div className='navdate'><p>{formatDateTime(currentDateTime)}</p></div>
};
