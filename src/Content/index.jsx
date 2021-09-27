import './content.scss'
import Portfolio from '../Components/Portfolio/Portfolio'
import Intro from   '../Components/Intro/Intro'
import Testimonials from  '../Components/Testimonials/Testimonials'
import Contact from '../Components/Contact/Contact'
import Works from '../Components/Works/Works'

export default function Content() {
    return (
        <div className='content'>
            <Intro />
            <Portfolio />
            <Works />
            <Testimonials />
            <Contact />
        </div>
    )
}
