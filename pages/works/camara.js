import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    Heading,
    Center,
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="CAMARA CON FREMORK IONIC">
      <Container>
        <Title>
        Aplicacion de Camara  <Badge>2023</Badge>
        </Title>
        <P>
       Esta aplicacion esta hecha para poder usar la camara del dispositvo y tomar fotos, Guardando imagenes y tambien compartirlas en otras plataformas.
        </P>
        <br></br>
        <P>
       La costrucion de este proyecto se baso en la funcionalidad del fremork de ionic.
        </P>
  
        <List ml={4} my={4}>
        <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/mmazariegos-2021338/CAMARA-IONIC">
           CAMARA-IONC<ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows,MacOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Typscript, JavaScript,  Capacitor, Distribucion del FREMORK</span>
          </ListItem>
          
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>VISUALIZACION</Center>
        </Heading>
  
        <WorkImage src="/images/works/11.jpeg" alt="handgesture" />
        
        <WorkImage src="/images/works/13.jpeg" alt="handgesture" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'