import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, LinkButton } from './styles'

const Project = () => (
  <Card>
    <Title>Projeto Lista de Tarefas</Title>
    <Paragraph tipo="secundario">Lista de Tarefas feitas com vue.js</Paragraph>
    <LinkButton>Visualizar</LinkButton>
  </Card>
)

export default Project
