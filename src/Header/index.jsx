import { Close, Menu } from "@material-ui/icons"
import "./Header.scss"

export default function HeaderTop({isSidebarOpen,setSidebar}) { 
    return (
        <div className="header flex-center">
        <section>
           <a href='#intro'>
               <img height='40px' width='40px' src="/images/code.jpg" alt="Logo" />
           </a>
        </section>
           <ul className='header-links'>
                <li> <a href="#intro"> Home </a></li>
                <li><a href="#portfolio"> Portfolio </a></li>
                <li><a href="#testimonials"> Testimonials</a> </li>
                <li><a href="#contact"> Contact Me </a></li>
            </ul>  

           <section className='menu-icon'>
               { !isSidebarOpen ? <Menu onClick={()=>setSidebar(!isSidebarOpen)}/> : <Close onClick={()=>setSidebar(!isSidebarOpen)} />}
            </section>
        </div>
    )
}
