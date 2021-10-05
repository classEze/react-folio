import './SideNav.scss'

export default function SideNav({isSidebarOpen}) {
    return (
        <div className={"sidenav grid-center " + (isSidebarOpen?"active":"inactive")} >
            <ul>
                <li> <a href="#intro"> intro </a></li>
                <li><a href="#portfolio"> Portfolio </a></li>
                <li><a href="#testimonials"> Testimonials</a> </li>
                <li><a href="#contact"> Contact Me </a></li>

            </ul>  
        </div>
    )
}
