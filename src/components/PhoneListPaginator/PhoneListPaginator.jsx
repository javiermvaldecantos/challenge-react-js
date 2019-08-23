/**
 * PhoneListPaginator
 * 
 * Paginación utilizada en la lista de modelos de teléfono.
 * Permite ir alante y atrás en la lista, y además ir a una página concreta.
 */
import React from 'react';

import './PhoneListPaginator.css';

const PhoneListPaginator = ({ className, numberOfPages, currentPage, onGoToNextPage, onGoToPreviousPage, onGoToSpecificPage }) => {
    // Construimos un array con el número de páginas de longitud. Luego iteraremos sobre él.
    let pages = [];
    for (let i = 1; i <= numberOfPages; i++) {
        pages.push(i);
    }

    return (
        <div className={'phone-list-paginator' + (className ? ' ' + className : '')}>
            <nav className="phone-list-paginator--paginator" aria-label="Phone List Paginator">
                <ul className="pagination">
                    <li className={'page-item' + (currentPage === 1 ? ' disabled' : undefined)}>
                        <a
                        className="page-link"
                        href="#page-previous"
                        aria-label="Previous"
                        tabIndex={currentPage === 1 ? '-1' : undefined}
                        aria-disabled={currentPage === 1 ? 'true' : undefined}
                        onClick={onGoToPreviousPage}>
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>

                    {pages.map((element, index) =>
                        <li className="page-item" key={element}>
                            <a className="page-link" href={'#page-' + element} onClick={() => onGoToSpecificPage(element)}>
                                {currentPage === element ?
                                    <strong>{element}</strong>
                                :
                                    element
                                }
                            </a>
                        </li>
                    )}

                    <li className={'page-item' + (currentPage === numberOfPages ? ' disabled' : undefined)}>
                        <a
                        className="page-link"
                        href="#page-next"
                        aria-label="Next"
                        tabIndex={currentPage === numberOfPages ? '-1' : undefined}
                        aria-disabled={currentPage === numberOfPages ? 'true' : undefined}
                        onClick={onGoToNextPage}>
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default PhoneListPaginator;