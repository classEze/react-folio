import './Contact.scss'
import { Facebook, GitHub, LinkedIn, Twitter, ContactPhone, Mail, WhatsApp} from '@material-ui/icons';
import FormComponent from './formComponent';

export default function Contact() {
    return (
<div className='' id="contact">
       <header className="contact-head">Get in Touch </header>   
<main className="contact">
<div className="container illustration flex-center hidden-mobile">
    <img src="/images/undraw.svg" alt="" />
</div>
<div className="container the-rest">
    <FormComponent />
<aside className='resume-button'>
    <a href='#'>View My Resume</a>
</aside>
</div>
</main>
<footer className='footer'>
        <section className='social flex-col'>
        <aside>Let's Connect on Social Media</aside>
        <aside>
         <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/ochonogor-eze-6b5517195/'> <LinkedIn /> </a>
         <a target='_blank' rel='noopener noreferrer' href="https://github.com/classEze"> <GitHub /> </a>
         <a target='_blank' rel='noopener noreferrer' href='https://facebook.com/ochonogor.chibeze'> <Facebook /> </a>
         <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/anymail4eze'> <Twitter /> </a>
         <a target='_blank' rel='noopener noreferrer' href='https://wa.me/2348160245148'> <WhatsApp /> </a>
         </aside>
         </section>
         <section className='footer-contact flex-center'>
               <span className='flex-center'>
                     <ContactPhone/><span>+2348160245148</span>
               </span>
               <span className='flex-center'> <Mail/><span>chibeze.ochonogor@gmail.com</span></span>
         </section>
</footer>
        </div>
    )
}
