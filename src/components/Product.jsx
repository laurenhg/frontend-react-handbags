import React from 'react';

const Product =({spanText, imageSrc, productName, price}) => {
    return (
        <main>
            <article>
                <span>{spanText}</span>
                <img src={imageSrc} alt={productName}/>
                <p>{productName}</p>
                <h4>{price}</h4>
            </article>
        </main>
    );
}

export default Product;