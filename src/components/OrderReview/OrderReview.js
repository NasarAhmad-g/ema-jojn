import React from 'react';
import useProducts from '../../hooks/useProducts';

const OrderReview = () => {
    const [products] = useProducts();
    return (
        <div>
            <h2>hhhhh{products.length}</h2>
        </div>
    );
};

export default OrderReview;