import React from 'react';
import useProducts from '../../hooks/useProducts';

const Manage = () => {
    const [product] = useProducts();
    console.log(product);
    
    return (
        <div>
            Manage
        </div>
    );
};

export default Manage;