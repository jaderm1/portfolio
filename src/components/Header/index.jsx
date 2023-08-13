import "./style.css";
import Button from "../Button";
import { Link } from "react-router-dom";

function Header (props){
    const pages=[{
      route:"/",
      name:"Home"
    },
  {
    route:"/portfolio",
    name:"Portfolio"
  },
  { 
    route:"/aboutme",
    name:"Sobre Mim"

  }] 

    return(
     <>
     <header>

      {pages.map((page)=>{
        return(
          <Link key={page.name} to={page.route}> <Button pagina={page.name}/></Link>
          )
      }
      )}
        
     </header>

        </>
    )
}
export default Header;