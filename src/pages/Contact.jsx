import React from 'react'
import { Box, Button, Container, Fieldset, Flex, Image, Paper, SimpleGrid, Space, Stack, Text, TextInput, Textarea, Title } from '@mantine/core';
const Contact = () => {
  return (
    <Container>
      <Space h={50}/>
      <SimpleGrid cols={2} spacing="xl">
        <Stack>
          <Text>HERE TO HELP</Text>
          <Title>Contact us</Title>
          <Text>Tell us a bit about yourself, and we'll tell you a lot more about us.</Text>
          <Flex gap='md'>
            <Paper shadow='sm' withBorder p='xl'>
              <Image src={""} />
              <Title order={4}>Support</Title>
              <Text>Need Help? Find the answers to frequently asked questions here</Text>
            </Paper>
            <Paper shadow='sm' withBorder p='xl'>
              <Image src={""} />
              <Title order={4}>Support</Title>
              <Text>Need Help? Find the answers to frequently asked questions here</Text>
            </Paper>
          </Flex>
        </Stack>
        <Box>
          <Fieldset component={Stack} gap="md" py="xl">
            <TextInput label="Your name" placeholder="Your name" />
            <TextInput label="Your email" placeholder="Email" required/>
            <Textarea  required label="Your Message" />
            <Button fullWidth >Send</Button>
          </Fieldset>
        </Box>
      </SimpleGrid>
      <Space h={50}/>
    </Container>
  )
}

export default Contact