import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure suscipit
      aperiam earum laborum, fugit ex tenetur ipsum officia voluptates odit,
      maiores a cupiditate quibusdam totam dolorum fugiat perspiciatis delectus.
      Dolorum.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats-xi-six-23.vercel.app/api?username=danijoss&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats-xi-six-23.vercel.app/api/top-langs/?username=danijoss&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
