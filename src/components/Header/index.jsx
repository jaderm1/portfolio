import { Button  } from "reactstrap";
import "./style.css";

function Header (){


    return(
     <>
     <header>
        
        <Button className="btn" color="secondary">Sobre Mim</Button>
        <Button className="btn" color="secondary">Projetos</Button>
        <Button className="btn" color="secondary">Contato</Button>
        <Button className="btn" color="secondary">Curriculo</Button>
     </header>

        </>
    )
}
export default Header;