import { useContext } from "react";
import Modal from "./UI/Modal";
import Button from "./UI/Button";
import CartItem from "./CartItem";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import UserProgressContext from '../store/UserProgressContext';


export default function Cart(){
    const userProgressCtx = useContext(UserProgressContext);
    const cartCtx = useContext(CartContext);

    const cartTotal = cartCtx.items.reduce((totalPriceCart, item) => {
        return totalPriceCart + (item.quantity * item.price);
    }, 0)

    
    function handleCloseCart(){
        userProgressCtx.hideCart();
    }

    return (
        <Modal className="cart" open={userProgressCtx.progress === 'cart'}>
            <h2>Your Cart</h2>
            <ul>
            </ul>
            <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
                {cartCtx.items.map((item) => <CartItem onDecrease={() => cartCtx.removeItem(item.id)} onIncrease={() => cartCtx.addItem(item)} key={item.id} item={item}></CartItem>)}
            <p className="modal-actions">
                <Button onClick={handleCloseCart} textOnly>Close</Button>
                <Button>Go to Checkout</Button>
            </p>
        </Modal>
    )
}