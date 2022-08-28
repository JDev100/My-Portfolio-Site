import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center"  fontSize="sm" mt={5}>
      &copy; {new Date().getFullYear()} Jesus Cazares. All Rights Reserved.
    </Box>
  )
}

export default Footer