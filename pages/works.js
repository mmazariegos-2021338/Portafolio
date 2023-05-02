import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbComs from '../public/images/works/76.jpeg'
import thumbadulting101 from '../public/images/works/61.jpeg'
import thumbFakeFace from '../public/images/works/14 (1).jpeg'
import thumbHandGesture from '../public/images/works/13495.jpeg' 


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Proyectos  2023
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="COMS" title="WEB BUSCADOR REACT" thumbnail={thumbComs}>
            Pagina web con cosumo de api trabajada con el framework REACT 
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="Adulting101"
            title="BACKEND APP"
            thumbnail={thumbadulting101}
          >
            Desarrollo de codigo Backend para  un control  de (Tienda Virtual)
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fakeface"
            title="DISEÑO  AGENDA WEB"
            thumbnail={thumbFakeFace}
          >
           Prediseño de una aplicacion de agenda web como maquetacion (red de contactos).
          </WorkGridItem>
        </Section>
        
        
        
        
        <Section delay={0.1}>
          <WorkGridItem id="camara" thumbnail={thumbHandGesture} title="CAMARA WEB">
          Un proyecto realizado con el framework angular en combinacion con Ionic
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
