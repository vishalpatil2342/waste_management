import { Box, Button, Container, Flex, Group, Paper, Stack, Text, TextInput, UnstyledButton } from '@mantine/core'
import { modals } from '@mantine/modals'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
    <Paper shadow='sm'>
    <Container size='xl' >
      <Flex justify='space-between' h={60} align='center'>
            <Box>
              <Text>Logo</Text>
          </Box>
          <Box>
              <nav>
                <Group >
                  <Text component={Link} to='/'>Home</Text>
                  <Text component={Link} to="/about">About</Text>
                </Group>
              </nav>
          </Box>
        <Box>
            <Button onClick={() => {
                modals.open({
                  title: 'Log In',
                  children: (
                    <Flex gap='xl' direction='column'>
                      <TextInput label="Your email" required placeholder="Your email" data-autofocus />
                      <TextInput label="Your password" required placeholder="Your password" data-autofocus />
                      <Flex justify='space-between' align='center'>
                        <Button onClick={() => modals.closeAll()} >
                          Login
                        </Button>
                        <UnstyledButton onClick={() => {
                          navigate("/signup")
                          modals.closeAll();
                        }}>New Here ? SignUp</UnstyledButton>
                      </Flex>
                    </Flex>
                  ),
                });  
              }}>Log In</Button>
        </Box>
      </Flex>
    </Container>
    </Paper>
    </header>
  )
}

export default Header