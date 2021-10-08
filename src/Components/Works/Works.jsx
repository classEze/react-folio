import { ArrowLeft, ArrowRight, GitHub } from '@material-ui/icons'
import './Works.scss'
import {useState} from 'react'

const Works = () => {
    const [activeSlide, setActiveSlide] = useState(0)   
    const totalSlides = [
        {name:"Draggable", imgUrl:"/images/draggable.png", description:"Drag and drop todo items, cross out completed items, a lot could be done vanilla you know...", github:"https://github.com/classEze/DraggableTodos", liveUrl:"https://classEze.github.io/draggableTodos"},
        {name:"HealthTrack", imgUrl:"/images/healthtrack.png", description:"A hospital Management System built with Nextjs and TailwindCSS.", github:"https://github.com/classEze", liveUrl:"https://health-sure.vercel.app"},
        {name:"Telepota", imgUrl:"/images/telepota.png", description:"A taxi booking Progressive Web Application built with Nodejs, Express, Google Places Api, GeoJson and Handlebars.", github:"https://github.com/classEze", liveUrl:"https://telepota.herokuapp.com"},
        {name:"Searchos", imgUrl:"/images/searchos.png", description:"An hospital Search Application built with Vanilla Js, Google Maps and Places Api", github:"https://github.com/classEze/searchos", liveUrl:"https://searchos.herokuapp.com"},
        {name:"Middletrust", imgUrl:"/images/middletrust.png", description:"An Escrow platform built with the MERN stack.", github:"https://github.com/classEze", liveUrl:"https://middletrust.com"},
        {name:"CryptoSpor", imgUrl:"/images/crypto.png", description:"A Crypto Trading Platform built with Laravel, Livewire and Bootstrap.", github:"https://github.com/classEze", liveUrl:"https://cryptospor.com"},
    ]

    function previousSlide(e){
      setActiveSlide(activeSlide === 0 ? totalSlides.length - 1 : activeSlide - 1);
    }
    function nextSlide(e){
    setActiveSlide(activeSlide === totalSlides.length - 1 ? 0 : activeSlide + 1);
    }

    return (
        <section className='works' id='works'>
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
                    <span className='project-name bold'>{slideContent.name}</span>
                    <p className='project-description'> {slideContent.description} </p>
                    <a className='anchor-button flex-center' href={slideContent.github} target="_blank" rel="noopener noreferrer">  <GitHub color="white" /> See Repo</a>
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
