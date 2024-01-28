import { Box, Button, Container, Flex, Group, Paper, PasswordInput, Text, TextInput, UnstyledButton } from '@mantine/core'
import { modals } from '@mantine/modals'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = async () => {
    const result = await fetch("http://localhost:3000/api/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    console.log(email, password);
    if (result.ok) {
      console.log("user login successfully");
    }
    setEmail("");
    setPassword("");
    navigate("/");
  }
  return (
    <header className={location.pathname === "/signup" ? 'display_none': ""}>
    <Paper shadow='sm'>
    <Container size='xl' >
      <Flex justify='space-between' h={60} align='center'>
            <Box>
              <Text>Logo</Text>
          </Box>
          <Box>
              <nav>
                <Group >
                  <Text fw={location.pathname == '/' ? 'bold' : ''} component={Link} to='/'>Home</Text>
                  <Text fw={location.pathname == '/about' ? 'bold' : ''}  component={Link} to="/about">About</Text>
                  <Text fw={location.pathname == '/contact' ? 'bold' : ''}  component={Link} to="/contact">Contact</Text>
                </Group>
              </nav>
          </Box>
        <Box>
            <Button onClick={() => {
                modals.open({
                  centered:true,
                  title: 'Log In',
                  children: (
                    <Flex gap='md' direction='column'>
                      <TextInput 
                      onChange={(e)=>setEmail(e.target.value)}  label="Your email" required placeholder="Your email" data-autofocus />
                      <PasswordInput onChange={(e)=>setPassword(e.target.value)} label="Your password" required placeholder="Your password" data-autofocus />
                      <Flex justify='space-between' align='center'>
                        <Button onClick={() => {
                          loginUser();
                          modals.closeAll()
                        }} >
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