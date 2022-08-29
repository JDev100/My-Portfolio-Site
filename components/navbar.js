import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  useColorMode,
  Button,
  Icon,
  HStack
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggler from './themetoggler'
import { AiFillGithub } from 'react-icons/ai'
import { HiDocumentText } from 'react-icons/hi'

const LinkItem = ({ href, path, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#202023')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <NextLink href="/" passHref>
              <Logo />
            </NextLink>
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="#portfolio" path={path}>
            Portfolio
          </LinkItem>
          <LinkItem href="#contact" path={path}>
            Contact
          </LinkItem>
          <LinkItem
            href="/resume.pdf"
            path={path}
            display="inline-flex"
            alignItems="center"
            gap={1}
          >
            <HiDocumentText /> Resume
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <ThemeToggler />
          <NextLink href="https://github.com/JDev100" passHref>
            <a target="_blank">
              <IconButton ml={2} icon={<AiFillGithub />} fontSize="larger" />
            </a>
          </NextLink>
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href="#portfolio" passHref>
                  <MenuItem as={Link}>Portfolio</MenuItem>
                </NextLink>
                <NextLink href="#contact" passHref>
                  <MenuItem as={Link}>Contact</MenuItem>
                </NextLink>
                <NextLink href="/resume.pdf">
                  <MenuItem as={Link}>
                    <HiDocumentText /> Resume
                  </MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
