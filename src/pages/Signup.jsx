import { Box, Button, Center, Checkbox, Flex, Grid, Image, PasswordInput, TextInput, Textarea, Title, rem } from '@mantine/core'
import React from 'react'

const Signup = () => {
  return (
    <div className='sign_up'>
      <Grid p={0}>
        <Grid.Col span={5} component={Flex} direction="column" px={rem(100)} justify="center" gap="lg">
            <Center>
              <Title>Create your account</Title>
            </Center>
            <Box>
              <TextInput size='md'  radius='lg' required label="Email address" placeholder='Example@gmail.com'/>
            </Box>
            <Box>
              <PasswordInput size='md' radius='lg' required label="New password" placeholder='New Password'/>
            </Box>
            <Box>
              <PasswordInput size='md' radius='lg' required label="Confirm password" placeholder='Confirm Password'/>
          </Box>
            <Textarea radius='lg' label="Society Address" required autosize minRows={5}/>
            <Box>
              <Checkbox required label="I agree to the terms and conditions" />
            </Box>
            <Box>
              <Button>Sign Up</Button>
            </Box>
      </Grid.Col>
        <Grid.Col span={7}>
          <Image src='https://png.pngtree.com/png-clipart/20200226/original/pngtree-volunteers-clean-up-garbage-in-the-forest-young-people-collect-garbage-png-image_5315130.jpg' />
      </Grid.Col>
      </Grid>
    </div>
  )
}

export default Signup