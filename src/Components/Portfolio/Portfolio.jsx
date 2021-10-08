import './Portfolio.scss'
import PortfolioHeading from './PortfolioHeading'
import {useState, useEffect} from 'react'
import {mobile,backend,design,frontend} from '../../portfolioData'
import PortfolioItem from './PortfolioItem'
import { KeyboardArrowDownOutlined } from '@material-ui/icons'


export default function Portfolio() {
    const [aTab, setATab] = useState('frontend')
    const [dataArray, setDataArray] = useState([])
    useEffect(
        ()=>{
            switch(aTab){
                case "frontend" :
                setDataArray(frontend)
                break;

                case "backend" :
                setDataArray(backend)
                break;

                case "design" :
                setDataArray(design)
                break;

                case "mobile" :
                setDataArray(mobile)
                break;

                default:
                    setDataArray([])
            }
            },
        [aTab]
    )

    const headings = [
        {title:"Frontend", content: "frontend"},
        {title:"Mobile", content: "mobile"},
        {title:"Backend", content: "backend"},
        {title:"Design", content: "design"},
    ]

    return (
    <section className='portfolio' id='portfolio'>
        <div className="portfolio-head"> Skills</div>
        <ul className='portfolio-tabs'>
            {headings.map((item, index)=><PortfolioHeading key={index} aTab={aTab} setATab={setATab} item={item} />)}
        </ul>
        <ul className="items-container">
           { dataArray.map((item,index)=><PortfolioItem key={index} item={item}/>)}
        </ul>
        <a href='#works' className="arrow-down" >
            <KeyboardArrowDownOutlined />
        </a>
        </section>
    )
}
