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
              <Text c='gray'>text</Text>
          </Stack>
          <Stack gap='sm'>
            <Title order={4}>Page</Title>
            <Text c='gray'>Home</Text>
              <Text c='gray'>Service</Text>
              <Text c='gray'>About</Text>
          </Stack>
          <Stack gap='sm'>
            <Title order={4}>Founders</Title>
              <Text c='gray'>Dev</Text>
              <Text c='gray'>Kanika</Text>
              <Text c='gray'>Prince</Text>
              <Text c='gray'>Ayman</Text>
          </Stack>
          <Stack gap='sm'>
            <Title order={4}>Contact</Title>
              <Text c='gray'>Mumbai, Maharashtra</Text>
              <Text c='gray'>+918291360709</Text>
              <Text c='gray'>example@gmail.com</Text>
          </Stack>
        </Flex>
        <Flex justify='space-between' align='center'>
            <Text c='gray'>logo 2024 | All rights reserved</Text>
            <Text c='gray'>General terms and conditions of use</Text>
            <Text c='gray'>Terms and Conditions are reserved</Text>
        </Flex>
        </Stack>
      </Container>
    </footer>
  )
}

export default Footer