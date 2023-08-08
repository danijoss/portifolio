import { useEffect, useState } from 'react'
import { Lista } from '../../containers/Projetos/styles'
import { Card, LinkBotao, RepositorioNome, RepositorioDesc } from './styles'

const Projeto = () => {
  const [repos, setRepos] = useState<any[]>([])
  const [estaCarregando, setEstaCarregando] = useState(true)

  useEffect(() => {
    fetch('https://api.github.com/users/danijoss/repos')
      .then((res) => res.json())
      .then((resJson) => {
        setTimeout(() => {
          setEstaCarregando(false)
          setRepos(resJson)
        }, 1300)
      })
  }, [])

  return (
    <>
      {estaCarregando && <h1>...Carregando</h1>}
      <Lista>
        {repos.map(({ id, name, language, html_url }) => (
          <li key={id}>
            <Card>
              <RepositorioNome>Nome: {name} </RepositorioNome>
              <RepositorioDesc>Linguagem: {language}</RepositorioDesc>
              <LinkBotao target="_blank" href={html_url} rel="noreferrer">
                Visitar no Github
              </LinkBotao>
            </Card>
          </li>
        ))}
      </Lista>
    </>
  )
}

export default Projeto
