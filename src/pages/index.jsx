import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Matt Fisher.
        </BigTitle>
        <Subtitle>This site will be home to my portfolio in the near future, for now, please check out my <a href="https://www.linkedin.com/in/matthew-r-fisher/">LinkedIn profile</a> </Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Todo Demo App"
            link="https://quizzical-pasteur-3118bb.netlify.com/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            This is a demo todo app using Gatsby.js and google Firebase.
          </ProjectCard>
          <ProjectCard
            title="Github issue tracker demo app"
            link="https://hopeful-borg-d95a5b.netlify.com/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            This is a Github issue tracker app using Gatsby.js and Github's api.
          </ProjectCard>
          <ProjectCard
            title="Demo app using react"
            link="https://compassionate-poitras-281cbd.netlify.com/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            This is a demo app built to display information from JSON in card format. It was built using react create app and styled components.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Matt Fisher" />
          <AboutSub>
            Hi everyone, my name is Matt and I am a web developer / software engineer based in Tokyo Japan.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I'm a trained linguist who found his way into the software world. I love building things across multiple stacks and languages and I'm always looking for a way return
          to include ideas from linguistics in my applications.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            <a href="mailto:m.r.f.48215@gmail.com">Shoot me an email</a> or find me on other platforms:{' '}
            <a href="https://www.linkedin.com/in/matthew-r-fisher/">LinkedIn</a>{' '}
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 Matthew Fisher
          <a href="https://github.com/Karstagg/personal-site">Github Repository</a>. Made by{' '}
          <a href="www.matt-fisher.software">Matthew Fisher</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
