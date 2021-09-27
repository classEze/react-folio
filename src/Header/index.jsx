import { Close, ContactPhone, Mail, Menu } from "@material-ui/icons"
import "./Header.scss"

export default function HeaderTop({isSidebarOpen,setSidebar}) { 
    return (
        <div className="header">
            <section>
           <a href='#intro'>
               <img height='40px' width='40px' src="/images/code.jpg" alt="Logo" />
           </a>
           <ul className='header-contact'>
               <li>  <ContactPhone/><span>+2348160245148</span></li>
               <li> <Mail/><span>chibeze.ochonogor@gmail.com</span></li>
           </ul>
           </section>
           <section>
               { !isSidebarOpen ? <Menu onClick={()=>setSidebar(!isSidebarOpen)}/> : <Close onClick={()=>setSidebar(!isSidebarOpen)} />}
            </section>
        </div>
    )
}
