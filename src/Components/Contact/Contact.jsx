import './Contact.scss'
import { Facebook, GitHub, LinkedIn, Twitter, ContactPhone, Mail, WhatsApp} from '@material-ui/icons';
import FormComponent from './formComponent';

export default function Contact() {
    return (
<div className='' id="contact">
<header className="contact-head"> Contact </header>   
<main className="contact">
<div className="container illustration hidden-mobile">
    <img src="/images/contact.png" alt="" />
</div>

<div className="container the-rest">
    <FormComponent />
</div>

</main>

<footer>
<div className='resume-button'>
    <a href='#'>View My Resume</a>
</div>
        <section className='social flex-col'>
        <aside>Let's Connect </aside>
        <aside>
         <a href='https://linkedin.com'> <LinkedIn /> </a>
         <a href="https://github.com/classEze"> <GitHub /> </a>
         <a href='https://facebook.com/ochonogor.chibeze'> <Facebook /> </a>
         <a href='https://twitter.com/anymail4eze'> <Twitter /> </a>
         <a href='https://whatsapp.me/2348160245148'> <WhatsApp /> </a>
         </aside>
         </section>
         <section className='footer flex-center'>
               <span className='flex-center'>
                     <ContactPhone/><span>+2348160245148</span>
               </span>
               <span className='flex-center'> <Mail/><span>chibeze.ochonogor@gmail.com</span></span>
         </section>
</footer>
   
  
        </div>
    )
}
