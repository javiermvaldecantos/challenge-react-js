import React from "react";

const PhoneListSpinner = ({ className }) => (
    <div className={'phone-list-spinner' + (className ? ' ' + className : '')}>
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
);

export default PhoneListSpinner;