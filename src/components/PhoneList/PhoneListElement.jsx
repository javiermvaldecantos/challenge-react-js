/**
 * Elemento que representa a un modelo de teléfono de la lista.
 * Se presenta su imagen, nombre y precio.
 * Al hacer click en el botón de "More info", se abrirá un modal con más información 
 */
import React from 'react';

import './PhoneListElement.css';

const PhoneListElement = ({ phoneId, phoneName, phonePrice, phoneImage, onDisplayMoreInfo }) => (
    <div className="phone-list-element card">
        <img src={phoneImage} className="phone-list-element--image card-img-top" alt={phoneName} onClick={onDisplayMoreInfo} />
        <div className="card-body">
            <h5 className="phone-list-element--name card-title">
                {phoneName}
            </h5>
            <p className="phone-list-element--price card-text">
                Price: {phonePrice}
            </p>
            <a href={'#' + phoneId} role="button" className="phone-list-element--more-info btn btn-primary" onClick={onDisplayMoreInfo}>
                More info
            </a>
        </div>
    </div>
);

export default PhoneListElement;