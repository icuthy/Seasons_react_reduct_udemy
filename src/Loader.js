import React from "react";

const Loader = (props) => {
    return (
        <div className='ui active dimmer'>
            <div className='ui big text loader'>
                {props.message}
            </div>
        </div>
    )
}
// Way to provide default props, could also use { props.message || 'Loading...'} in function above
Loader.defaultProps = {
    message: 'Loading...'
};

export default Loader;