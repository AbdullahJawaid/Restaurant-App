import React from 'react'

function MenuList({ menuData }) {
    console.log(menuData)
    return (
        <>
            <section className="main-card--cointainer">
                {menuData.map((currElem) => {
                 return (
                 <>
                    <div className="card-container">
                    <div className="card">
                        <div className="card-body">
                            <span className="card-number card-circle subtitle">{currElem.id}</span>
                            <span className="card-author subtitle">{currElem.category}</span>
                            <h2 className="card-title">{currElem.name}</h2>
                            <span className="card-description subtitle">{currElem.description}</span>
                            <span className="card-description subtitle">{currElem.price}</span>
                            <div className="card-read">Read</div>
                            <img src={currElem.image} alt="image" className="card-media" />
                        </div>
                        <span className='card-tag subtitle'> Order Now</span>
                    </div>
                </div>
                </>
                );
                })}
            </section>
        </>
    )
}

export default MenuList
