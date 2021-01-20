import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
    const alertContext = useContext(AlertContext);

    //destructure
    const { alert } = alertContext;

    return (
        alert !== null &&(
            //insert the type of alert into the classname and alert msg
            <div className={`alert alert-${alert.type}`}>
                <i className="fas fa-info-circle"></i>{alert.msg}
            </div>
        )
    )
}

export default Alert