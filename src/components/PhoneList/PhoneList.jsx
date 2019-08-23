import React from 'react';
import PhoneListElement from './PhoneListElement';

import './PhoneList.css';

const PhoneList = ({ className, currentPage, phones, onDisplayPhoneDetails }) => {

    const canElementBeDisplayed = (page, elementIndex) => {
        let elementsThatCanBeDisplayed = {};
        elementsThatCanBeDisplayed[(page-1)*3 + 1] = true;
        elementsThatCanBeDisplayed[(page-1)*3 + 2] = true;
        elementsThatCanBeDisplayed[(page-1)*3 + 3] = true;

        return !!elementsThatCanBeDisplayed[elementIndex + 1];
    }

    return (
        <div className={'phone-list row' + (className ? ' ' + className : '')}>
            {phones && phones.map((element, index) =>
                <div className={'phone-list--element-wrapper col-sm-4' + (canElementBeDisplayed(currentPage,index) ? '' : ' hidden')} key={element.id}>
                    <PhoneListElement
                        phoneId={element.id}
                        phoneName={element.name}
                        phonePrice={element.price}
                        phoneImage={element.imageSrc}
                        onDisplayMoreInfo={() => {onDisplayPhoneDetails(element)}}
                    />
                </div>
            )}
        </div>
    );
}

export default PhoneList;