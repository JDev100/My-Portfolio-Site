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
  Grid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  useColorMode
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Image from 'next/image'
import PorfolioItem from '../components/portfolioitem'
import { useState } from 'react'
import { send } from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})
const Page = () => {
  // Email functionality
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'Jesus Cazares',
    message: '',
    reply_to: ''
  })

  const onSubmit = e => {
    e.preventDefault()
    const outgoing = toSend
    setToSend({
      from_name: '',
      to_name: 'Jesus Cazares',
      message: '',
      reply_to: ''
    })
    toast.info('Sending message...', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    send(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      outgoing,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
      .then(response => {
        console.log('SUCCESS!', response.status, response.text)
        toast.success('Thank you, I got your message!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      })
      .catch(err => {
        console.log('FAILED...', err)
      })
  }

  const handleChange = e => {
    setToSend({ ...toSend, [e.target.name]: e.target.value })
  }

  return (
    <Container id="home">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme='colored'
      />
      {/* INTRODUCTION WITH PICTURE */}

      {/* Come back later to integrate cool three.js feature */}
      {/* <Box
        borderRadius="lg"
        bg={useColorModeValue('#f2f6f9', '#202023')}
        mb={6}
        p={3}
        alignContent="center"
      >
        Hello, I&apos;m a full-stack developer based in California
      </Box> */}
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
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
              src="/images/pf2.png"
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

      <Grid templateColumns={['repeat(2, 1fr)']} gap={6}>
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

      <Heading as="h3" variant="section-title" id="contact">
        Contact
      </Heading>
      <p style={{ textAlign: 'justify' }}>
        Do you need a software developer for your web project? Feel free to
        leave me a message regarding a project or any questions you may have
        about my skillset.
      </p>
      <form onSubmit={onSubmit}>
        <FormControl mt={4}>
          <VStack>
            <Input
              placeholder="Name"
              name="from_name"
              value={toSend.from_name}
              onChange={handleChange}
            />
            <Input
              placeholder="Email"
              name="reply_to"
              value={toSend.reply_to}
              onChange={handleChange}
            />
            <Textarea
              placeholder="Leave a message..."
              name="message"
              value={toSend.message}
              onChange={handleChange}
            />
            <Flex alignItems="flex-end" w="100%">
              <Spacer />
              <Button type="submit" colorScheme="blue">
                Send
              </Button>
            </Flex>
          </VStack>
        </FormControl>
      </form>
    </Container>
  )
}

export default Page
