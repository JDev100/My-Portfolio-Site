import {
  Link,
  Container,
  Box,
  Heading,
  useColorModeValue,
  Flex,
  SimpleGrid,
  LinkBox,
  Text,
  LinkOverlay,
  HStack,
  Stack,
  chakra,
  Spacer,
  Button,
  Badge,
  GridItem,
  Grid
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Image from 'next/image'
import PorfolioItem from '../components/portfolioitem'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})
const Page = () => {
  return (
    <Container id="home">
      {/* INTRODUCTION WITH PICTURE */}

      <Box
        borderRadius="lg"
        bg={useColorModeValue('#f2f6f9', '#202023')}
        mb={6}
        p={3}
        alignContent="center"
      >
        Hello, I&apos;m a full-stack developer based in California
      </Box>
      <Flex>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jesus Cazares
          </Heading>
          <p>Full Stack Web Development | Game Development </p>
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
              src="/images/pf.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Flex>
      {/* ABout me */}
      <Heading as="h3" variant="section-title">
        About
      </Heading>
      <p style={{ textAlign: 'justify' }}>
        I am a full stack develop ready to start on interesting projects. I have
        a passion for all kinds of digital endeavors, from websites, to
        animation and game development. Welcome to my portfolio page.
      </p>

      <Heading as="h3" variant="section-title" id="portfolio">
        Portfolio
      </Heading>
      {/* <SimpleGrid columns={[1, 1, 2]} gap={2} pt='2' alignItems='center'> */}

      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem>
          <PorfolioItem
            image="/images/portfolio1.png"
            badges={['React', 'JS', 'CSS', 'HTML']}
            title="Portfolio Manager"
            desc="Webapp employing Yahoo Finance API to view stock info"
            href="https://jesuscazares-portfolio-manager.netlify.app/"
          />
        </GridItem>
        <GridItem>
          <PorfolioItem
            image="/images/ecommerce1.png"
            badges={['Next', 'Sanity.io', 'Stripe']}
            title="Ultimate Music Store"
            desc="Ecommerce project that employs Stripe to recieve payments"
            href="https://ecommerce-next-sanity-stripe-k4bfq9vgy-jdev100.vercel.app/"
          />
        </GridItem>
        <GridItem>
          <PorfolioItem
            image="/images/game1.png"
            badges={['Unity', 'C#']}
            title="Treasure Quest"
            desc="2D Platformer made in Unity for a game jam  in CSUF"
            href="https://cazaresjmh50.itch.io/treasure-quest"
          />
        </GridItem>
        <GridItem>
          <PorfolioItem
            image="/images/chatapp1.png"
            badges={['HTML', 'CSS', 'JS', 'Socket.io']}
            title="ChatCord"
            desc="Realtime chat app employing websockets and express server"
            href="https://github.com/JDev100/Chat-App-Lite"
          />
        </GridItem>
      </Grid>

      {/* </SimpleGrid> */}
    </Container>
  )
}

export default Page
