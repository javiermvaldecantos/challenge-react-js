/**
 * Spinner que se muestra mientras la lista de teléfonos está cargando.
 */
import React from "react";

import './PhoneListSpinner.css';

const PhoneListSpinner = ({ className }) => (
    <div className={'phone-list-spinner' + (className ? ' ' + className : '')}>
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
);

export default PhoneListSpinner;