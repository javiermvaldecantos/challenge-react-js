/**
 * Este componente presenta informacón detallada sobre un modelo de teléfono.
 * Contiene la imagen, nombre, marca, descripción, color y precio.
 */
import React from 'react';

import './PhoneDetails.css';

import { connect } from 'react-redux';

const mapStateToProps = state => ({
    phoneName: state.phoneCatalogReducer.selectedPhoneDetails.name,
    phoneBrand: state.phoneCatalogReducer.selectedPhoneDetails.brand,
    phoneDescription: state.phoneCatalogReducer.selectedPhoneDetails.description,
    phoneColor: state.phoneCatalogReducer.selectedPhoneDetails.color,
    phoneImage: state.phoneCatalogReducer.selectedPhoneDetails.imageSrc,
    phonePrice: state.phoneCatalogReducer.selectedPhoneDetails.price,
});

const PhoneDetails = ({phoneName, phoneBrand, phoneDescription, phoneColor, phoneImage, phonePrice}) => (
    <div className="phone-details modal fade" id="phone-details-modal" tabIndex="-1" role="dialog" aria-labelledby="phone-details-modal--title" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
            <div className="modal-content">
                
                <div className="modal-header">
                    <h5 className="phone-details--name modal-title" id="phone-details-modal--title">
                        {phoneName}
                    </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            
                <div className="modal-body">
                    <div className="row">
                        <div className="col-sm-6">
                            <img className="phone-details--image" src={phoneImage} alt={phoneName}/>
                        </div>
                        <div className="col-sm-6">
                            <p className="phone-details--description">
                                {phoneDescription}
                            </p>
                            <p className="phone-description--brand">
                                Manufacturer: <strong>{phoneBrand}</strong>
                            </p>
                            <p className="phone-description--color">
                                Color: <strong>{phoneColor}</strong>
                            </p>
                            <p className="phone-description--price">
                                Price: <strong>{phonePrice}</strong>
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-dismiss="modal">Back</button>
                </div>

            </div>
        </div>
    </div>
);

export default connect(mapStateToProps)(PhoneDetails);