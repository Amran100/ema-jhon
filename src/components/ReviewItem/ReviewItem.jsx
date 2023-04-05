import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({product , handleRemoveFromCart}) => {
    const {name , id , img , quantity, price} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price : <span className='orange-text'>${price}</span>
                </p>
                <p>Order Quantity : <span className='orange-text'>{quantity}</span>
                </p>
                
            </div>
            <button onClick={()=>handleRemoveFromCart(id)} className='btn-delete'>
                <FontAwesomeIcon className='btn-icon' icon={faTrashCan} />
                </button>
        </div>
    );
};

export default ReviewItem;