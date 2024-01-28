import React, { useEffect, useState } from 'react';

export default function Products() {
    const [products, setProducts] = useState([]);
    const productsPerPage = 8;

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=' + productsPerPage)
            .then(res => res.json())
            .then(json => {
                setProducts(json);
            });
    }, []);
    return (
        <>
            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3">
                        {products.map(product => (
                            <div className="col" key={product.id}>
                                <div className="card shadow-sm">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        width="100%"
                                        height="225"
                                    />
                                    <div className="card-body">
                                        <p className="card-text clamp">{product.description}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-primary">
                                                    Buy Now
                                                </button>
                                                <button type="button" className="btn btn-sm btn-warning">
                                                    Add Card
                                                </button>
                                            </div>
                                            <small className="text-body-secondary">${product.price}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}