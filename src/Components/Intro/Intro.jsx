import { ArrowDownwardOutlined } from '@material-ui/icons'
import './Intro.scss'
import {init} from 'ityped'
import {useEffect, useRef} from 'react'

export default function Intro() {
    const typeRef = useRef()    

    useEffect(
        ()=>{
           init (typeRef.current,
             {showCursor:false,
                backDelay:1500,
            strings:["Fullstack developer.", "Problem Solver."]})
        } ,
        []
    )
    return (
        <div className='intro' id='intro'>
           <section className='intro-left'>
               <img src="images/programmer8.jpeg" alt="my-avatar" />
           </section> 
           <section  className='intro-right'>
               <h3> Hello,  </h3>
               <h2> I am Eze. </h2>
               <div id="skill-text"> A <span ref={typeRef}> </span></div>
               <h5> Welcome to my world!!!  </h5>
               <a href='#portfolio'><ArrowDownwardOutlined className="arrow-down"/></a>
           </section> 
        </div>
    )
}
