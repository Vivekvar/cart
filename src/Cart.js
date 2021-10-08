import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
    return (
        <div className="cart">
            { props.products.map((product) => {
                return <CartItem 
                    product = { product }
                    onIncrease = {props.onIncrease}
                    onDecrease = {props.onDecrease}
                    onDelete = {props.onDelete}
                />
            })}
        </div>
    );
}

export default Cart;