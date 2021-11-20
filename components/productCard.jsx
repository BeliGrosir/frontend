export default function ProductCard({image, title, retail, price, location  }) {
    return (
        <div>
            <div>
                {image}
            </div>
            <div>
                {title}
                Retail: Rp{retail}/kg
                Rp{price}/kg
                <button>Add to Cart</button>
            </div>
            <div>
                {location}
            </div>
        </div>
    )
}