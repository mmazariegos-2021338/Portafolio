import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Adulting 101">
    <Container>
      <Title>
       Tienda Virtual <Badge>2023</Badge>
      </Title>
      <P>
        Desarrollo de una tienda virtual el cual lleva un proceso de organización.
      </P>
      <br></br>
      Esta trabajada a traves de rutas con su respectiva distribucion de los aspectos principales de una tienda.
      <P>

      </P>
      <List ml={4} my={4}>
      <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/mmazariegos-2021338/TIENDA-BAKEND">
          TIENDA BACKEND <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Mongo DB, Potsman, Node js, JAVASCRIPT </span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      <WorkImage src="/images/works/61.jpeg" alt="adulting101" />
      <WorkImage src="/images/works/62.jpeg" alt="adulting101" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
