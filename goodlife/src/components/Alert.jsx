import React from 'react';

const Alert = ({ errors }) => {
    return (
        <div class={`alert alert-${errors.status}`} role="alert">
            {errors.msg}

        </div>
    );
}

export default Alert;
