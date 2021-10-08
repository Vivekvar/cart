import React from 'react';

const CartItem = (props) => {
     const {
          title, 
          price, 
          qty, 
          img
     } = props.product;
     const {
          product, 
          onIncrease, 
          onDecrease, 
          onDelete
     } = props;
     return (
          <div className="cart-item">
               <div className="left-block">
                    <img src={ img } alt="" style={styles.images}/>
               </div>
               <div className="right-block">
                    <div style={{ fontSize: 25}}>{title}</div>
                    <div style={{ color: '#777'}}>Rs : {price}</div>
                    <div style={{ color: '#777'}}>Quantity : {qty}</div>
                    <div className="cart-item-actions">
                         <img 
                              alt="increase" 
                              className="action-icons" 
                              src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                              style={{ cursor: 'pointer'}}
                              onClick={() => onIncrease(product)}
                         />
                         <img 
                              alt="decrease" 
                              className="action-icons" 
                              src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                              style={{ cursor: 'pointer'}}
                              onClick={() => onDecrease(product)}
                         />
                         <img 
                              alt="delete" 
                              className="action-icons" 
                              src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png" 
                              style={{ cursor: 'pointer'}}
                              onClick={() => onDelete(product.id)}
                         />
                    </div>
               </div>
          </div>
     )
}

const styles= {
     images: {
          height: 150,
          width: 150,
          borderRadius: 4,
          background: '#ccc',
     },
}
export default CartItem;