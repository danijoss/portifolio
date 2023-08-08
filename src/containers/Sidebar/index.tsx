import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import linkedinLogo from '../../assets/linkedin.svg'
import githubLogo from '../../assets/github.svg'
import emailLogo from '../../assets/mail.svg'

import { Descricao, BotaoTema, SidebarContainer, LinksSociais } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Daniel Silva</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        danijoss
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Front-end
      </Descricao>
      <LinksSociais>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/daniel-silva-d3v/"
            rel="noreferrer"
          >
            <img src={linkedinLogo} alt="Linkedin" title="Ir para o Linkedin" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://github.com/danijoss"
            rel="noreferrer"
          >
            <img src={githubLogo} alt="" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="mailto:dan.henrri@gmail.com"
            rel="noreferrer"
          >
            <img src={emailLogo} alt="" />
          </a>
        </li>
      </LinksSociais>
      <br />
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
