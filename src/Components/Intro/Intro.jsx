import { KeyboardArrowDownOutlined } from '@material-ui/icons'
import './Intro.scss'
import {React, useEffect, useRef} from 'react'
import {gsap} from 'gsap'
import TextPlugin from 'gsap/TextPlugin'

export default function Intro() {
    const typeRef = useRef();
    const parentRef = gsap.utils.selector(typeRef)
    gsap.registerPlugin(TextPlugin)
    const tl = useRef()

    useEffect(
        ()=>{
            tl.current = gsap.timeline({duration:2, delay:0})
            .from(parentRef('.one'), {opacity:0, delay:1,y:-30})
            .from(parentRef('.two'), {opacity:0, delay:2,y:-20})
            .to(parentRef('.three'), {text:{value:"A fullstack developer and problem solver."}, duration:4,delay:2})
            .from(parentRef('.four'), {opacity:0, delay:1,x:-30})
        } ,
        []
    )
    return (
        <div className='intro' id='intro'>
           <section className='intro-top'>
               <img src="images/programmer3.jpg" alt="my-avatar" />
               <img src="/images/eze2.png" alt="Myavatar" />
           </section> 
           <section  className='intro-bottom flex-center'>
           <aside ref={typeRef} className='bold'>
               <p  className='one'> Hi there...  </p>
               <p className='two'> I am Eze. </p>
               <p className='three'></p>
               <p  className='four'><a target='blank' rel='noopener noreferrer' href="mailto:chibeze.ochonogor@gmail.com?subject=Hey Eze" className="anchor-button"> Hire Me</a></p>
            </aside>
            <a href='#portfolio'  className="arrow-down" >
                <KeyboardArrowDownOutlined />
                </a>
           </section> 
        </div>
    )
}
