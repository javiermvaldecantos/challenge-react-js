import React, {Component} from 'react';
import PhoneList from '../PhoneList/PhoneList';
import PhoneListPaginator from '../PhoneListPaginator/PhoneListPaginator';
import PhoneListSpinner from './PhoneListSpinner';

import './PhoneListContainer.css';

import phoneService from '../../services/phoneService';
import modal from '../../utils/modal';

import { connect } from 'react-redux';
import {
    getPhoneListStart,
    getPhoneListSuccess,
    getPhoneListFailure,
    loadPhoneDetails,
    goToNextPage,
    goToPreviousPage,
    goToSpecificPage
} from '../../actions/phoneCatalogAction';
const mapStateToProps = state => ({
    phoneList: state.phoneCatalogReducer.phoneList,
    fetchFailure: state.phoneCatalogReducer.fetchFailure,
    selectedPhoneDetails: state.phoneCatalogReducer.selectedPhoneDetails,
    currentPage: state.phoneCatalogReducer.page
});
const mapDispatchToProps = dispatch => ({
    onGetPhoneList: () => dispatch(getPhoneListStart()),
    onPhoneListLoaded: (phoneList) => dispatch(getPhoneListSuccess(phoneList)),
    onPhoneListFailure: () => dispatch(getPhoneListFailure()),
    onDisplayPhoneDetails: (phoneDetails) => dispatch(loadPhoneDetails(phoneDetails)),
    onGoToNextPage: (page) => dispatch(goToNextPage(page)),
    onGoToPreviousPage: (page) => dispatch(goToPreviousPage(page)),
    onGoToSpecificPage: (page) => dispatch(goToSpecificPage(page)),
});

class PhoneListContainer extends Component {
    render() {
        return (
            <div className="phone-list-container">
                <PhoneListPaginator
                    className={this.props.phoneList.length === 0 ? 'hidden' : ''}
                    numberOfPages={Math.ceil(this.props.phoneList.length / 3)}
                    currentPage={this.props.currentPage}
                    onGoToNextPage={this.goToNextPage.bind(this)}
                    onGoToPreviousPage={this.goToPreviousPage.bind(this)}
                    onGoToSpecificPage={this.goToSpecificPage.bind(this)}
                />
                <PhoneList
                    className={this.props.phoneList.length === 0 ? 'hidden' : ''}
                    currentPage={this.props.currentPage}
                    phones={this.props.phoneList}
                    onDisplayPhoneDetails={this.displayPhoneDetails.bind(this)}
                />
                <PhoneListPaginator
                    className={this.props.phoneList.length === 0 ? 'hidden' : ''}
                    numberOfPages={Math.ceil(this.props.phoneList.length / 3)}
                    currentPage={this.props.currentPage}
                    onGoToNextPage={this.goToNextPage.bind(this)}
                    onGoToPreviousPage={this.goToPreviousPage.bind(this)}
                    onGoToSpecificPage={this.goToSpecificPage.bind(this)}
                />
                <PhoneListSpinner
                    className={this.props.phoneList.length === 0 ? '' : 'hidden'}
                />
            </div>
        )
    }

    componentDidMount() {
        // Llamamos a la API para cargar la lista de móviles        
        phoneService.getPhoneList({
            success: (phones) => {
                this.props.onPhoneListLoaded({phoneList: phones});
            },
            failure: (error) => {
                this.props.onPhoneListFailure();
            },
            always: () => {

            }
        });
    }

    displayPhoneDetails(phoneDetails) {
        this.props.onDisplayPhoneDetails({phoneDetails: phoneDetails});

        // Una vez actualizados los detalles del teléfono, podemos mostrar el modal
        modal.open('phone-details-modal')
    }

    goToNextPage() {
        this.props.onGoToNextPage({ page: this.props.currentPage + 1 });
    }

    goToPreviousPage() {
        this.props.onGoToPreviousPage({ page: this.props.currentPage - 1 });
    }

    goToSpecificPage(page) {
        this.props.onGoToSpecificPage({ page: page });
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneListContainer);