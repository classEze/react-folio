const PortfolioHeading = ({item,aTab,setATab}) => {

    return (
        <li className={aTab==item.content && "active"} onClick={()=>setATab(item.content)}> 
         {item.title}
        </li>
    )
}

export default PortfolioHeading
