import HeaderTop from "./Header"
import Content from './Content'
import {useState} from 'react'
import SideNav from "./Components/Sidenav/SideNav";

function App() {
  const [isSidebarOpen,setSidebar] = useState(false)
  return (
    <div className="App">
      <SideNav isSidebarOpen={isSidebarOpen}/> 
      <HeaderTop isSidebarOpen={isSidebarOpen} setSidebar={setSidebar}/>
      <Content />
    </div>
  );
}
export default App;
