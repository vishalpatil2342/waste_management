import { Box, Container, Flex, Stack, Text, Title } from '@mantine/core'
import React from 'react'
import { useLocation } from 'react-router-dom'

const Footer = () => {
  const location = useLocation();
  return (
    <footer className={location.pathname === "/signup" ? "display_none" :""} style={{ backgroundColor:'white',padding:20}}>
      <Container>
        <Stack>
        <Flex justify="space-around">
          <Stack gap='sm'>
            <Title>Logo</Title>
            <Text>text</Text>
          </Stack>
          <Stack gap='sm'>
            <Title order={4}>Page</Title>
            <Text>Home</Text>
            <Text>Service</Text>
            <Text>About</Text>
          </Stack>
          <Stack gap='sm'>
            <Title order={4}>Founders</Title>
            <Text>Dev</Text>
            <Text>Kanika</Text>
            <Text>Prince</Text>
            <Text>Ayman</Text>
          </Stack>
          <Stack gap='sm'>
            <Title order={4}>Contact</Title>
            <Text>Mumbai, Maharashtra</Text>
            <Text>+918291360709</Text>
            <Text>example@gmail.com</Text>
          </Stack>
        </Flex>
        <Flex justify='space-between' align='center'>
          <Text>logo 2024 | All rights reserved</Text>
          <Text>General terms and conditions of use</Text>
          <Text>Terms and Conditions are reserved</Text>
        </Flex>
        </Stack>
      </Container>
    </footer>
  )
}

export default Footer