import React from 'react'
import NextLink from 'next/link'
import {
  Box,
  Stack,
  Text,
  Button,
  Badge,
  Wrap,
  WrapItem
} from '@chakra-ui/react'

const PorfolioItem = ({ image, badges, title, desc, href }) => {
  return (
    <Box w="225px" >
      <Box w="225px" h="127px">
        <img src={image} alt={image} />
      </Box>
      <Box p={0} pt="0">
        <Wrap alignItems="center" mt={2}>
          {badges.map(badge => (
            <WrapItem>
              <Badge variant="solid" colorScheme="blue" rounded="full" px={2}>
                {badge}
              </Badge>
            </WrapItem>
          ))}
        </Wrap>
        <Stack align="center">
          <Text as="h2" fontWeight="normal" mb={0} mt={2}>
            {title}
          </Text>
          <Text fontWeight="light" mb="0" textAlign={'center'}>
            {desc}
          </Text>
          <NextLink href={href} passHref>
            <a target="_blank">
              <Button variant="solid" size="sm" colorScheme="blue">
                Demo
              </Button>
            </a>
          </NextLink>
        </Stack>
      </Box>
    </Box>
  )
}

export default PorfolioItem
