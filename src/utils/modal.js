/**
 * modal.js
 * 
 * Este archivo contiene funciones que nos permiten controlar los modals de Bootstrap.
 * De esta manera nuestra aplicación es independiente de Bootstrap, que sólo es usado por este módulo.
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