/**
 * Este es el contenedor de toda la app, y además contiene el título de la aplicación.
 */
import React from 'react';
import PhoneListContainer from '../PhoneListContainer';
import PhoneDetails from '../PhoneDetails';

import './PhoneCatalog.css';

const PhoneCatalog = () => (
    <div className="phone-catalog">
        <header>
            <div className="jumbotron">
                <h1 className="display-4">Phone Catalog</h1>
            </div>
        </header>
        
        <PhoneListContainer />
        <PhoneDetails />
    </div>
);

export default PhoneCatalog;
