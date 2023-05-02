import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin} from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
       ¡Hola, soy Informatico!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Marvin Mazariegos
          </Heading>
          <p>Actualmente estoy en mi último año de la carrera de informática. (Junior Developer)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/profile - copia.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
         Acerca de mi
        </Heading>
        <Paragraph>
        ¡Hola! 👋 Soy Marvin Mazariegos, soy estudiante de sexto perito de informatica estudio en el Colegio Centro Educativo Laboral Kinal.  Disfruto tomar problemas complejos y convertirlos en páginas web simples y geniales,
        también me encanta la lógica y la estructura de la codificación y siempre me esfuerzo por escribir código  eficiente, ya sea en HTML, CSS o JavaScript.
          <br></br>
          Cuando no estoy programando, me encontrarás viendo unas películas, pasando el rato con mis amigos y explorando nuevos lugares y siempre buscando ser mi mejor version.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Mi portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
         Biografía
        </Heading>
        <BioSection>
          <BioYear>2005</BioYear>
          Naci en  Cuidad de Guatemala, Gutemala.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Finalizo Educacion Basica
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Inicio  Estudios en la carrera de Informatica.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Comenzó a estudiar en el programa ONE next Education.
        </BioSection>
        
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          YO ♥ 
        </Heading>
        <Paragraph>
          Codificar, <text style={{ color: "teal" }}>Musica</text>,{' '}
          Peliculas, <text style={{ color: "teal" }}>Escribir</text>,{' '}Fotografia, Aprendizaje Autodidacta .
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
         Habilidades 
        </Heading>
        <li><section>Conocimiento en Metodologias Agiles</section></li>
        <li><section>Trabajo en Equipo</section></li>
        <li><section>Adaptación al cambio</section></li>
        <li><section>Comunicación</section></li>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          CONTACTAME EN LA WEB 
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/mmazariegos-2021338" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @Marvin Mazariegos
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/marvin-mazariegos-96a662264/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @Marvin Mazariegos
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/devmar_17/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @devmar_17
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="https://drive.google.com/file/d/18Z2N33iCzfDj2FcMijI62pl34TKq12cE/view?usp=share_link" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
            <a href="https://drive.google.com/file/d/18Z2N33iCzfDj2FcMijI62pl34TKq12cE/view?usp=share_link">Descargar Curriculum</a> 
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
