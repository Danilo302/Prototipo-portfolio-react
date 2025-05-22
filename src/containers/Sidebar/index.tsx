import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar></Avatar>
      <Title fontSize={20}>Danilo Felix</Title>
      <Paragraph tipo="secundario" fontSize={16}>
        Danilo302
      </Paragraph>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor FullStack
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
