import { BackgroundImage, Box, Button, Card, Center, Container, Flex, Grid, Group, Image, List, Paper, Space, Stack, Tabs, Text, Title } from '@mantine/core'
import React, { useEffect } from 'react'
import { useAnimate } from 'framer-motion'
const Home = () => {
  const [scope,animate] = useAnimate(); 
  function customScrollDownAnimationInfo() {
    const targetPosition = 350; // Set your target scroll position in pixels
    const duration = 1000; // Set the duration of the animation in milliseconds
    const framesPerSecond = 60;
    const increment = targetPosition / (duration / 1000 * framesPerSecond);

    function animateScroll(currentPosition, startTime) {
      const currentTime = new Date().getTime();
      const elapsed = currentTime - startTime;
      const newPosition = currentPosition + increment;

      window.scrollTo(0, newPosition);

      if (elapsed < duration) {
        requestAnimationFrame(() => animateScroll(newPosition, startTime));
      }
    }

    animateScroll(window.scrollY, new Date().getTime());
  }
  function customScrollDownAnimationService() {
    const targetPosition = 900; // Set your target scroll position in pixels
    const duration = 500; // Set the duration of the animation in milliseconds
    const framesPerSecond = 60;
    const increment = targetPosition / (duration / 1000 * framesPerSecond);

    function animateScroll(currentPosition, startTime) {
      const currentTime = new Date().getTime();
      const elapsed = currentTime - startTime;
      const newPosition = currentPosition + increment;

      window.scrollTo(0, newPosition);

      if (elapsed < duration) {
        requestAnimationFrame(() => animateScroll(newPosition, startTime));
      }
    }

    animateScroll(window.scrollY, new Date().getTime());
  }


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
                <Button variant='outline' onClick={customScrollDownAnimationInfo}>Read More</Button>
                <Button variant='filled' bg='green.7' onClick={customScrollDownAnimationService}>Explore our Services</Button>
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
        <Space h={30}/>
      <Center>
        <Title>Service to meet your needs</Title>
      </Center>
      <Center>
        <Text>For all your needs, here's a range of services tailored to you</Text>
      </Center>
      <Space h={40}/>
      <Tabs defaultValue="society" variant='pills' radius='xl' className='home_services'>
        <Tabs.List justify='center'>
          <Tabs.Tab value='society'>
            <Title order={4}>For Society</Title>
          </Tabs.Tab>
          <Tabs.Tab value='complex'>
            <Title order={4}>For Complex</Title>
          </Tabs.Tab>
        </Tabs.List>
        <Space h={30}/>
        <Tabs.Panel value='society'>
          <Grid>
            <Grid.Col span={4} ref={scope}>
              <Card
                h={400}
                shadow='sm'
                radius='lg'
                withBorder
                className='card_box'
                component='div'
              >
                <Card.Section>
                  <Box bg="green.5" h={100} component={Center}>
                    <Title c='white'>Monthly Plan</Title>
                  </Box>
                  <Paper shadow='sm' m='xl' className='card_price' component={Center}>
                    <Title order={3}>₹ 3699</Title>
                  </Paper>
                  <Space h={60} />
                  <Center>
                    <List component={Stack} spacing={5}>
                    <List.Item>Access to Basic Features</List.Item>
                    <List.Item>Customer Support</List.Item>
                    <List.Item>Regular Updates</List.Item>
                    <List.Item>Usage Limit</List.Item>
                    <Button className='card_btn'>Buy</Button>
                    </List>
                  </Center>
                </Card.Section>
              </Card>
            </Grid.Col>
            <Grid.Col span={4}>
              <Card
                h={400}
                shadow='sm'
                radius='lg'
                withBorder
                className='card_box'
              >
                <Card.Section>
                  <Box bg="green.5" h={100} component={Center}>
                    <Title c='white'>Quaterly Plan</Title>
                  </Box>
                  <Paper shadow='sm' m='xl' className='card_price' component={Center}>
                    <Title order={3}>₹ 9899</Title>
                  </Paper>
                  <Space h={60} />
                  <Center>
                  <List component={Stack} spacing={5}>
                  <List.Item>All Monthly Plan Features</List.Item>
                  <List.Item>Enhanced Customer Support</List.Item>
                  <List.Item>Extended Usage Limits</List.Item>
                      <List.Item>Exclusive Features</List.Item>
                      <Button className='card_btn'>Buy</Button>
                  </List>
                  </Center>
                </Card.Section>
              </Card>
            </Grid.Col>
            <Grid.Col span={4}>
              <Card component='div'
                h={400}
                shadow='sm'
                radius='lg'
                withBorder
                className='card_box'
              >
                <Card.Section>
                  <Box bg="green.5" h={100} component={Center}>
                    <Title c='white'>Yearly Plan</Title>
                  </Box>
                  <Paper shadow='sm' m='xl' className='card_price' component={Center}>
                    <Title order={4}>₹ 15999</Title>
                  </Paper>
                  <Space h={60} />
                  <Center>
                    <List component={Stack} spacing={-6} >
                      <List.Item>All Quarterly Plan Features</List.Item>
                      <List.Item>Premium Customer Support</List.Item>
                      <List.Item>Unlimited Usage</List.Item>
                      <List.Item>VIP Access</List.Item>
                      <List.Item>Customization Options</List.Item>
                      <Button className='card_btn'>Buy</Button>
                    </List>
                  </Center>
                </Card.Section>
              </Card>
            </Grid.Col>
          </Grid>
        </Tabs.Panel>
        <Tabs.Panel value='complex'>
          <Grid>
            <Grid.Col span={4}>
                <Card
                  h={400}
                  shadow='sm'
                  radius='lg'
                  withBorder
                  className='card_box'
                >
                  <Card.Section>
                    <Box bg="green.5" h={100} component={Center}>
                      <Title c='white'>Monthly Plan</Title>
                    </Box>
                    <Paper shadow='sm' m='xl' className='card_price' component={Center}>
                      <Title order={4}>₹ 5699</Title>
                    </Paper>
                    <Space h={60} />
                    <Center>
                      <List component={Stack} spacing={-6} >
                        <List.Item>Regular Waste Collection</List.Item>
                        <List.Item>Basic Sorting</List.Item>
                        <List.Item>Customer Support</List.Item>
                        <Button className='card_btn'>Buy</Button>
                      </List>
                    </Center>
                  </Card.Section>
                </Card>
            </Grid.Col>
            <Grid.Col span={4}>
              <Card
                h={400}
                shadow='sm'
                radius='lg'
                withBorder
                className='card_box'
              >
                <Card.Section>
                  <Box bg="green.5" h={100} component={Center}>
                    <Title c='white'>Monthly Plan</Title>
                  </Box>
                  <Paper shadow='sm' m='xl' className='card_price' component={Center}>
                    <Title order={4}>₹ 13,899</Title>
                  </Paper>
                  <Space h={60} />
                  <Center>
                    <List component={Stack} spacing={-6} >
                      <List.Item>All Monthly Plan Services</List.Item>
                      <List.Item>Extended Bin Maintenance</List.Item>
                      <List.Item>Exclusive Recycling Reports</List.Item>
                      <Button className='card_btn'>Buy</Button>
                    </List>
                  </Center>
                </Card.Section>
              </Card>
            </Grid.Col>
            <Grid.Col span={4}>
              <Card
                h={400}
                shadow='sm'
                radius='lg'
                withBorder
                className='card_box'
              >
                <Card.Section>
                  <Box bg="green.5" h={100} component={Center}>
                    <Title c='white'>Yearly Plan</Title>
                  </Box>
                  <Paper shadow='sm' m='xl' className='card_price' component={Center}>
                    <Title order={4}>₹ 20,999</Title>
                  </Paper>
                  <Space h={60} />
                  <Center>
                    <List component={Stack} spacing={-6} >
                      <List.Item>All Monthly and <br/> Quarterly Plan Services</List.Item>
                      <List.Item>Premium Bin Features</List.Item>
                      <List.Item>Customized Sustainability Plan</List.Item>
                      <List.Item>Educational Workshops</List.Item>
                      <Button className='card_btn'>Buy</Button>
                    </List>
                  </Center>
                </Card.Section>
              </Card>
            </Grid.Col>
          </Grid>
        </Tabs.Panel>
      </Tabs>
      <Space h={30}/>
    </Container>
  )
}

export default Home