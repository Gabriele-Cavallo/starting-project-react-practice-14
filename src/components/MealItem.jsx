export default function MealItem({id, name, price, description, image, ...props }){
    return (
        <li className="meal-item" {...props}>
            <article>
                <img src={`http://localhost:3000/${image}`} alt={name} />
                <div>
                    <h3>{name}</h3>
                    <p className="meal-item-price">{price}</p>
                    <p className="meal-item-description">{description}</p>
                    <button className="meal-item-actions">Add to Cart</button>
                </div>
            </article>
        </li>
    )
}