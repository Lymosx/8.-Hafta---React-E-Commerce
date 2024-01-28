import React, { useEffect, useState } from 'react';

export default function Home() {
    const [products, setProducts] = useState([]);
    const productsPerPage = 3;

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=' + productsPerPage)
            .then(res => res.json())
            .then(json => {
                setProducts(json);
            });
    }, []);
    return (
        <>
            <div className='mt-5'>
                <div id="carouselExampleCaptions" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/250124-R-BENETTON.JPG" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/250124-SEZONSONU.JPG" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/250124-TUDORS.JPG" class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="container marketing">

                <div className="row mt-5">
                    {products.map(product => (
                        <div className="col-lg-4 " key={product.id}>
                            <img src={product.image} class="d-block w-100 bd-placeholder-img rounded-circle" width="100%" height="225"  alt="..." />
                            <h2 className="fw-normal">{product.title}</h2>
                            <p>{product.description}</p>
                        </div>

                    ))}

                </div>
            </div>
        </>
    )
}
