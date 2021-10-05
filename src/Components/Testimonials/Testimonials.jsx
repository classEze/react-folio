import {useEffect,useRef, useState} from 'react'
import './Testimonials.scss'
import {testimonials} from '../../testimonialData'
// import gsap from 'gsap'
// import { FastForward, FastRewind, Pause, PlayArrow } from '@material-ui/icons'


export default function Testimonials() {
    const roller = useRef();
    // useEffect(() => {
    //     let slideTest = gsap.timeline();
    //     const x = -(document.querySelector('aside div.item').offsetWidth * (testimonials.length));
    //     slideTest.to(
    //         roller.current, {x,duration:10, repeat:-1,yoyo:true});
    // }, [])


    return (
        <div className='testimonials' id='testimonials'>
         <header className="testimonial-head"> Testimonials</header>
         <section className="roller" ref={roller}>
            {
             testimonials.map((oneT,index)=>{
                 return(
                    <aside key={index} className='container flex-col'>
                    <div className={(index%2===0 ? "even" : "") + " item flex-col"}>
                    <p className='bold'> {oneT.name} </p>
                    <p>{oneT.role}</p>
                    <img src={oneT.avatar} alt="avatar" />
                    <p> 
                        {oneT.body}
                    </p>
                    </div> 
                    </aside>
                 )
             })
            } 
         </section>
         {/* <figure className='controls'>
             <FastForward data-action='forward' onClick={(e)=>setPlayState('reverse')}/>
             <PlayArrow data-action='play' onClick={(e)=>setPlayState('play')}/>
             <Pause data-action='pause' onClick={(e)=>setPlayState('pause')}/>
             <FastRewind data-action='rewind' onClick={(e)=>setPlayState('reverse')}/>
         </figure> */}
        </div>
    )
}
