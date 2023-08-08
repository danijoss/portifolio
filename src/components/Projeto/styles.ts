import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
`

export const LinkBotao = styled.a`
  color: ${(props) => props.theme.corDeFundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
`
export const RepositorioNome = styled.h3`
  color: ${(props) => props.theme.corPrincipal};
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`
export const RepositorioDesc = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.corPrincipal};
  line-height: 22px;
`
