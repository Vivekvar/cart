import React from 'react';

const CartItem = (props) => {
    return (
        <div className="CartItem" style={{display: 'flex', padding: 20}}>
            <div className="left-part">
                <img src={ props.product.img } alt="" style={ {height: 150, width: 150, borderRadius: 4, background: '#ccc'} } />
            </div>
            <div className="right-part" style={{paddingLeft: 20}}>
                <div style={{ fontSize: 25}}>{props.product.title}</div>
                <div style={{ color: '#777'}}>Rs : {props.product.price}</div>
                <div style={{ color: '#777'}}>Quantity : {props.product.qty}</div>
                <div className="cart-item-actions">
                    <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                        style={{ cursor: 'pointer'}}
                        onClick={() => props.onIncrease(props.product)}
                    />
                    <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                        style={{ cursor: 'pointer'}}
                        onClick={() => props.onDecrease(props.product)}
                    />
                    <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png" 
                        style={{ cursor: 'pointer'}}
                        onClick={() => props.onDelete(props.product.id)}
                    />
                    </div>
            </div>
        </div>
    );
}

export default CartItem;