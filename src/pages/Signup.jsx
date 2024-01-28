import { Box, Button, Center, Checkbox, Flex, Grid, Image, PasswordInput, TextInput, Textarea, Title, rem } from '@mantine/core'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [societyName,setSocietyName] = useState("");
  const signupUser = async () => {
    const result = await fetch("http://localhost:3000/api/register", {
      method:'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        email:email,
        password:password,
        societyName:societyName
      })
    })
    console.log(email,password,societyName);
    if (result.ok) {
      console.log("user register successfully");
    }
    setEmail("");
    setPassword("");
    setSocietyName("");
    navigate("/");
  }
  return (
    <div className='sign_up'>
      <Grid m={0}>
        <Grid.Col span={5} component={Flex} direction="column" px={rem(100)} justify="center" gap="lg">
            <Center>
              <Title>Create your account</Title>
            </Center>
            <Box>
              <TextInput value={email} onChange={(e)=>setEmail(e.target.value)} size='md'  radius='lg' required label="Email address" placeholder='Example@gmail.com'/>
            </Box>
            <Box>
              <PasswordInput value={password} onChange={(e)=> setPassword(e.target.value)} size='md' radius='lg' required label="New password" placeholder='New Password'/>
            </Box>

          <TextInput value={societyName} onChange={(e)=>setSocietyName(e.target.value)} size='md' radius='lg' label="Your Society Name" placeholder='Name of Your Society' required />
            <Box>
              <Checkbox required label="I agree to the terms and conditions" />
            </Box>
            <Box>
              <Button onClick={signupUser}>Sign Up</Button>
            </Box>
      </Grid.Col>
        <Grid.Col span={7}>
          <Image src='https://png.pngtree.com/png-clipart/20200226/original/pngtree-volunteers-clean-up-garbage-in-the-forest-young-people-collect-garbage-png-image_5315130.jpg' width={500} height={900} />
      </Grid.Col>
      </Grid>
    </div>
  )
}

export default Signup