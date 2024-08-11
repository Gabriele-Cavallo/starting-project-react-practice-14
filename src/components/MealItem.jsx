import { currencyFormatter } from '../util/formatting.js';
import Button from './UI/Button.jsx';

export default function MealItem({id, name, price, description, image, ...props }){
    return (
        <li className="meal-item" {...props}>
            <article>
                <img src={`http://localhost:3000/${image}`} alt={name} />
                <div>
                    <h3>{name}</h3>
                    <p className="meal-item-price">{currencyFormatter.format(price)}</p>
                    <p className="meal-item-description">{description}</p>
                    <Button className="meal-item-actions">Add to Cart</Button>
                </div>
            </article>
        </li>
    )
}