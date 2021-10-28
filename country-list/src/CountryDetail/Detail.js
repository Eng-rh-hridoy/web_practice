import React from 'react';

const Detail = (props) => {
    console.log(props);
    return (
        <div>
            <p><small>{props.data.name}</small></p>
        </div>
    );
};

export default Detail;