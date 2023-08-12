import'./style.css'

function  Footer(){


    const linkGithub = 'https://github.com/jaderm1'
    const linkLinkedin = 'https://www.linkedin.com/in/jaderm1/'
    
    return(
        <>
     
     <footer>
        <h6>Desenvolvido por:</h6>
       <h6><a href={linkGithub}>© Jader Luiz Maciel do Nascimento</a></h6>
       <h6><a href={linkLinkedin}>Linkedin</a></h6>

    </footer>
          </>
    )

}
export default Footer;