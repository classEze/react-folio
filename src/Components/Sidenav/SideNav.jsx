import './SideNav.scss'

export default function SideNav({isSidebarOpen, closeSideBar}) {
    return (
        <section className={"nav-container flex " + (isSidebarOpen?"active":"inactive")} onClick={closeSideBar}>
        <div></div>
        <nav className="sidenav grid-center" >
            <ul>
                <li> <a href="#intro"> Home </a></li>
                <li><a href="#portfolio"> Skills </a></li>
                <li><a href="#works"> Projects</a> </li>
                <li><a href="#testimonials"> Testimonials</a> </li>
                <li><a href="#contact"> Contact Me </a></li>
            </ul>  
        </nav>
        </section>
    )
}
