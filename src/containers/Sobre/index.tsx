import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim:</Titulo>
    <Paragrafo tipo="principal">
      Formado em Analise de Sistemas pela Fatec em 2016 e estudando Egenharia
      Fron-end pela EBAC em 2023, tenho 7 anos de experiencia na area de
      consultoria de TI e estou iniciando a migração da minha carreira para dev
      front-end. Veja abaixo alguns repositórios do meu perfil no GitHub com
      projetos pessoais e de estudos realizados no curso da EBAC:
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats-xi-six-23.vercel.app/api?username=danijoss&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats-xi-six-23.vercel.app/api/top-langs/?username=danijoss&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
