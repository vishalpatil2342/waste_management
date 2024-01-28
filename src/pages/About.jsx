import { Box, Container, Flex, Image, Paper, SimpleGrid, Space, Stack, Text, Title } from '@mantine/core'
import React from 'react'
import aboutUsImg from '../assets/about_page_image-modified.png';
import Chart from '../components/Chart';


const About = () => {
  return (
    <Container>
      <Space h={30} />
      <SimpleGrid cols={2} spacing={80} component={Flex} align="center">
        <Image radius='md' src={aboutUsImg} fit/>
        <Stack>
          <Title>Mission</Title>
          <Text>we are committed to transforming waste management and promoting a sustainable future. Our innovative project focuses on efficient waste treatment and recycling, which facilitates the central role of individuals and communities in environmental protection.</Text>
        </Stack>
      </SimpleGrid>
      <Space h={30} /> 
      <SimpleGrid cols={2} spacing={80}>
        <Stack>
        <Title>Our Responsibility</Title>
        <Text>At the core of our initiative is the integration of cutting-edge technology. Equipped with state-of-the-art sensors, our smart bins are designed to revolutionize waste management. These smart sensors detect when the bin reaches capacity and trigger an automatic notification to our dedicated waste collectors. This seamless communication ensures fast and efficient waste collection, prevents waste overflow and promotes a cleaner environment.</Text>
        </Stack>
        <Chart/>
      </SimpleGrid>
      <Space h={30}/>
    </Container>
  )
}

export default About


  // < Stack >
  //         <Title>About Our Company</Title>
  //         <Text>Welcome to WOW (Waste on Wheels), where we are committed to transforming waste management and promoting a sustainable future. Our innovative project focuses on efficient waste treatment and recycling, which facilitates the central role of individuals and communities in environmental protection.</Text>
  //         <Text>At the core of our initiative is the integration of cutting-edge technology. Equipped with state-of-the-art sensors, our smart bins are designed to revolutionize waste management. These smart sensors detect when the bin reaches capacity and trigger an automatic notification to our dedicated waste collectors. This seamless communication ensures fast and efficient waste collection, prevents waste overflow and promotes a cleaner environment.</Text>
  //         <Text>But we don't stop there. Our responsibility goes beyond waste collection. We believe that recycling has a positive impact on the planet. After collection, the waste is carefully sorted and delivered to recycling points. This comprehensive approach aims to minimize the use of landfills and promote responsible use of resources.</Text>
  //         <Text>At WOW, we understand that everyone's contributions matter. That's why we offer different plans and services tailored to different needs. Whether you are an individual looking for a convenient management solution or a community that wants to work together, we have plans that fit your lifestyle perfectly.</Text>
  //         <Text>Join us on our journey to a greener and cleaner world. Collect and reuse as much as possible in Latvia. By working together, we can significantly influence the preservation of our environment for future generations.</Text>
  //       </ >