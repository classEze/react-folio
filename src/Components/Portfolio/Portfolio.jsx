import './Portfolio.scss'
import PortfolioHeading from './PortfolioHeading'
import {useState, useEffect} from 'react'
import {mobile,web,design,featured} from '../../portfolioData'
import PortfolioItem from './PortfolioItem'


export default function Portfolio() {
    const [aTab, setATab] = useState('web')
    const [dataArray, setDataArray] = useState([])
    useEffect(
        ()=>{
            switch(aTab){
                case "web" :
                setDataArray(web)
                break;

                case "mobile" :
                setDataArray(mobile)
                break;

                case "design" :
                setDataArray(design)
                break;

                case "featured" :
                setDataArray(featured)
                break;

                default:
                    setDataArray([])
            }
            },
        [aTab]
    )

    const headings = [
        {title:"Web", content: "web"},
        {title:"Mobile", content: "mobile"},
        {title:"Featured", content: "featured"},
        {title:"Design", content: "design"},
    ]

    return (
        <section className='portfolio' id='portfolio'>
        <div className="portfolio-head"> Portfolio</div>
        <ul className='portfolio-tabs'>
            {headings.map(item=><PortfolioHeading aTab={aTab} setATab={setATab} item={item} />)}
        </ul>
        <ul className="items-container">
           { dataArray.map(item=> <PortfolioItem item={item}/>)}
        </ul>
        </section>
    )
}
