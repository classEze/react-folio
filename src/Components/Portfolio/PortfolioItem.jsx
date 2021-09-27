import React from 'react'

const PortfolioItem = ({item}) => {
    return (
        <li className='portfolio-item' title={item.description}>
        <span className="item-header">
            {item.name}
        </span>
        <img src={item.image} alt={item.description} className="item-image" />
        </li>
    )
}
export default PortfolioItem
