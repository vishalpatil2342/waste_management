import { BackgroundImage, Box, Button, Card, Center, Container, Flex, Grid, Group, Image, Paper, Space, Stack, Tabs, Text, Title } from '@mantine/core'
import React from 'react'

const Home = () => {
  return (
    <Container className='container'>
      <Space h={20}/>
      <Card className='card_image' shadow='sm' withBorder radius='lg'>
        <Flex justify='space-evenly' align='center' h={400}>
          <Box>
            <Stack>
            <Box>
                <Title>Dispose Responsibly, Create</Title>
                <Title>Impact.</Title>
            </Box>
            <Box>
              <Text> Taking the 4R's (Reduce,Reuse,Recycle,Recover)</Text>
              <Text> to the next level</Text>
            </Box>
              <Group gap={10}> 
                <Button variant='outline'>Read More</Button>
                <Button variant='filled' bg='green.7'>Explore our Services</Button>
              </Group>
            </Stack>
            </Box>
            <Box>
            <Image width={250} height={250} src='https://media.istockphoto.com/id/1265555164/photo/portrait-of-black-woman-with-group-of-volunteers-cleaning-nature-together.jpg?s=612x612&w=0&k=20&c=tpZKrO2yMKc6aJtWZP78d8icx1niJ0BmNdgEW2ZCVoE=' radius='lg'/>
          </Box>
        </Flex>
      </Card>
      <Space h={20} />
      <Center>
        <Title order={3}>More than Just Waste disposal: <span style={{color:'green'}}>a revolution</span></Title>
      </Center>
      <Space h={20} />
      <Grid>
        <Grid.Col span={5}>
          <BackgroundImage radius='lg' style={{ backgroundSize: 'cover' }} src='https://media.istockphoto.com/id/1145183208/photo/young-volunteers-collecting-garbage-in-suumer-park.jpg?s=612x612&w=0&k=20&c=5vmn8N7X3X-1FW7leDg4N19UMjFFdHjVg_kLguEuENo=' h={400}>
            <Flex align='end' h={400} justify='center'>
            <Paper opacity={0.9} p={10} my={10} radius='lg'  w={350} h={180}>
              <Title order={3}>In a healthy environment,</Title>
                <Title order={3}>everything succeeds.</Title>
                <Text>We are convinced that success begins and</Text>
                <Text>ends in a healthy, clean environment that is</Text>
                <Text>conductive to growth</Text>
            </Paper>
            </Flex>
          </BackgroundImage>
        </Grid.Col>
        <Grid.Col span={7}>
          <BackgroundImage radius='lg' style={{ backgroundSize:'cover'}} src='https://st2.depositphotos.com/1518767/6900/i/950/depositphotos_69003827-stock-photo-happy-family-collecting-rubbish.jpg' h={400}>
            <Flex align='end' h={400} justify='center'>
              <Paper opacity={0.9} p={10} my={10} radius='lg' w={500} h={180}>
                <Title order={3}>It all start here,</Title>
                <Title order={3}>everything succeeds.</Title>
                <Text>Agents trained in waste management are ready to serve you and</Text>
                <Text>brighten up your area or society</Text>
              </Paper>
            </Flex>
          </BackgroundImage>
        </Grid.Col>
      </Grid>
        <Space h={10}/>
      <Center>
        <Title>Service to meet your needs</Title>
      </Center>
      <Center>
        <Text>For all your needs, here's a range of services tailored to you</Text>
      </Center>
      <Space h={20}/>
      <Tabs defaultValue="society" variant='pills' radius='xl'>
        <Tabs.List justify='center'>
          <Tabs.Tab value='society'>
            For Society
          </Tabs.Tab>
          <Tabs.Tab value='complex'>
            For Complex
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value='society'>
          <Grid>
            <Grid.Col span={4}></Grid.Col>
            <Grid.Col span={4}></Grid.Col>
            <Grid.Col span={4}></Grid.Col>
          </Grid>
        </Tabs.Panel>
        <Tabs.Panel value='complex'>
          <Grid>
            <Grid.Col span={4}></Grid.Col>
            <Grid.Col span={4}></Grid.Col>
            <Grid.Col span={4}></Grid.Col>
          </Grid>
        </Tabs.Panel>
      </Tabs>
    </Container>
  )
}

export default Home