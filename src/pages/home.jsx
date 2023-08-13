import Footer from '../components/Footer'
import Header from '../components/Header'
import { Main } from '../components/Main'

const text = "Me chamo Jader tenho 27 anos sou da cidade de Ponta Grossa no Paraná,sempre fui apaixonado por tecnologia, jogos e musica meu primeiro contato com a area de desenvolvimento foi quando tinha 12 anos pois era louco por jogos e queria montar o meu próprio, criei então meu servidor privado, tive contato com php,sql,na época nao entendia nada sobre programação pesquisava muito em sites estrangeiros e fui aperfeiçoando meu ingles.Em 2014 fiz meu primeiro curso o de Web designer la aprendi sobre Photoshop, CorelDraw e o básico sobre HTML e CSS. Em 2018 meu filho nasceu então comecei a trabalhar como freelancer como designer gráfico me aprofundei bastante nessa área conforme meu filho crescia vi a necessidade de um emprego fixo. Em 2022 iniciei a estudar programação por conta e me apaixonei pelo desafios, hoje estou cursando Engenharia de software.Estou focado em aprender e me aprofundar cada vez mais na area de desenvolvimento Front-end, para me tornar um profissional capacitado e com as qualidades exigidas para entregar resultados e efetuar meu trabalho com eficiência e agilidade. Hoje tenho conhecimento em HTML, CSS,JavaScript e React"

function Home() {
    return (
        <>
            <Header />
            
            <Main text={text}>
                

            </Main>

            <Footer />        </>
    )
}
export { Home }