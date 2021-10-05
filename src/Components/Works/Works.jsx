import { ArrowLeft, ArrowRight, GitHub } from '@material-ui/icons'
import './Works.scss'
import {useState} from 'react'

const Works = () => {
    const [activeSlide, setActiveSlide] = useState(0)   
    const totalSlides = [
        {name:"Searchos", imgUrl:"/images/searchos.png", description:"An hospital Search Application I built using Google Maps and Places Api", github:"https://github.com/classEze", liveUrl:"https://searchos.herokuapp.com"},
        {name:"Draggable", imgUrl:"/images/draggable.png", description:"Drag and drop todo items, cross out completed items, a lot could be done vanilla...", github:"https://github.com/classEze/DraggableTodos", liveUrl:"https://classEze.github.io/draggableTodos"},
        {name:"Converter", imgUrl:"/images/searchos.png", description:"An hospital Search Application I built using Google Maps and Places Api", github:"https://github.com/classEze", liveUrl:"https://searchos.herokuapp.com"},
    ]

    function previousSlide(e){
      setActiveSlide(activeSlide === 0 ? totalSlides.length - 1 : activeSlide - 1);
    }
    function nextSlide(e){
    setActiveSlide(activeSlide === totalSlides.length - 1 ? 0 : activeSlide + 1);
    }

    return (
        <section className='works'>
            <h2 className="heading"> Projects </h2>
        <ArrowLeft fontSize="large" onClick={previousSlide} className='arrow arrow-left'/>
        <div className="slider" style={{transform:`translateX(-${activeSlide*100}vw)`}}>
            {totalSlides.map(slideContent=>{
         return(
            <article className="container grid-center" key={slideContent.liveUrl}>
                <div className="item flex">
                    <aside className='flex-col'>
                    <img src={slideContent.imgUrl}/>
                    <a className='anchor-button' href={slideContent.liveUrl} target="_blank" rel="noopener noreferrer"> Launch </a>
                    </aside>
                    <aside className='flex-col'>
                    <span>{slideContent.name}</span>
                    <p> {slideContent.description} </p>
                    <a className='anchor-button' href={slideContent.github} target="_blank" rel="noopener noreferrer">  <GitHub color="white" /> See Repo</a>
                    </aside>
                </div>
            </article>
         )  
        })}
            </div>
            <ArrowRight fontSize="large" onClick={nextSlide} className='arrow arrow-right'/>
            <ul>{totalSlides.map((slide,index)=>{
                return(
                    <li className={activeSlide===index ? 'active' : ""} key={index} onClick={()=>setActiveSlide(index)}> 
                    </li>
                )
            }
                )}</ul>
        </section>
    )
}
export default Works
