import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Diseño de Aplicacion">
    <Container>
      <Title>
       Agenda Web Desarrollo de pagina web realizada en una previzualicion. <Badge>2023</Badge>
      </Title>
      <P>
      Esta desarrollada con el fin de conocer la ux de los usarios y de que manera trabajar en aspectos claves de desarrollo de la misma.
      </P>
      <br></br>
      <P>
      La composicion y tambien la vista de manera atractiva forman parte clave de este proyecto.
      </P>
      <List ml={4} my={4}>
      <ListItem>
          <Meta>HIT HUB</Meta>
          <Link href="https://github.com/mmazariegos-2021338/WEB-CONTACTOS-">
         WEB<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>PAGINA WEB </Meta>
          <span>WEB</span>
        </ListItem>
        <ListItem>
          <Meta>TECNOLOGIAS</Meta>
          <span>HTML, CSS, JAVASCRIPT</span>
        </ListItem>
  
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Previsualizacion</Center>
      </Heading>

      <WorkImage src="/images/works/14 (2).jpeg" alt="fakeface" />
      <WorkImage src="/images/works/14 (3).jpeg" alt="fakeface" />
      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
