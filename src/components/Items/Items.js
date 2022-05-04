import React from 'react';
import { useParams } from 'react-router-dom';

const Items = () => {
    const {id} = useParams();
    console.log(id);
    return (
        <div>
            Items : {id} 
        </div>
    );
};

export default Items;