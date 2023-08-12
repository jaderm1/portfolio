import "./style.css";
import Button from "../Button";

function Header (props){


    return(
     <>
     <header>
        
        <Button pagina="Sobre mim"/>
        <Button pagina="Portfolio"/>
        <Button pagina="Contato"/>


       
     </header>

        </>
    )
}
export default Header;