import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSecao } from './styles'

const AboutMe = () => (
  <section>
    <Title fontSize={16}>Sobre Mim</Title>
    <Paragraph tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
      consequatur doloribus? Laudantium quaerat laborum, rerum quisquam
      distinctio labore nulla temporibus beatae aspernatur minus molestiae id.
      Voluptate sed maxime perspiciatis ipsam?
    </Paragraph>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=Danilo302&show_icons=true&theme=radical&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Danilo302&layout=compact&langs_count=7&theme=radical" />
    </GithubSecao>
  </section>
)

export default AboutMe
