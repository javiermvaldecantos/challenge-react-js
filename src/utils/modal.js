/**
 * modal.js
 * 
 * Este archivo contiene funciones que nos permiten controlar los modals de Bootstrap.
 */
import $ from 'jquery';
window.jQuery = window.$ = $;
require('bootstrap');

const modal = {
    currentModal: {},

    open: (modalId) => {
        modal.currentModal = $('#' + modalId);
        modal.currentModal.modal('show');
    },

    closeCurrent: () => {
        modal.currentModal.modal('hide');
    }
};

export default modal;