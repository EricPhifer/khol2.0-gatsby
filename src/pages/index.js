import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Seo from '../components/Seo'
import TestimonialForm from '../components/TestimonialForm'
import StoryHero from '../components/StoryHero'
import Testimonials from '../components/Testimonials'

const Hero = styled.div`
  display: block;
  height: 100vh;
  position: relative;
  top: 4rem;
  z-index: 10;
`

const Main = styled.main`
  width: 100vw;
  height: 100%;
  .source {
    text-decoration: none;
    &:hover {
      color: orange;
    }
  }
  .eventNav {
    color: var(--black);
    text-decoration: none;
    &:hover {
      color: var(--white);
    }
  }
`

const LightBlock = styled.section`
  width: 100%;
  min-height: 25rem;
  padding: 5rem 2rem;
  color: var(--black);
  p {
    color: var(--black);
  }
`

const DarkBlock = styled.section`
  width: 100%;
  min-height: 50rem;
  padding: 5rem 2rem;
  background-color: rgba(0, 0, 0, 0.8);
  color: var(--white);
  input,
  textarea,
  label {
    color: var(--white);
  }
  a {
    color: var(--white);
    text-decoration: underline;
    &:hover {
      color: var(--blue);
    }
  }
  .cta {
    text-decoration: none;
    align-self: end;
  }
  #nav-dots {
    color: var(--black);
    background-color: var(--white);
    text-decoration: none;
    &:hover {
      color: var(--white);
      background-color: var(--blue);
    }
    &:active {
      border: 0.1rem dotted var(--blue);
      color: var(--white);
    }
    &:focus {
      background-color: var(--blue);
      color: var(--white);
    }
    &[aria-current='page'] {
      background-color: var(--blue);
    }
  }
`

const WhiteSpace = styled.div`
  width: 80%;
  max-width: 98rem;
  margin: 10rem auto;
  display: flex;
  flex-flow: column nowrap;
  @media only screen and (max-width: 500px) {
    width: 100%;
    margin: 0;
  }
`

const H2 = styled.h2`
  display: block;
  padding-top: 10rem;
  margin-top: -10rem;
  margin: 5rem 0 1rem;
  font-size: 5rem;
  font-variant: small-caps;
  @media only screen and (max-width: 330px) {
    font-size: 4rem;
  }
`

const HR = styled.hr`
  border: 0.5rem solid var(--orange);
`

export default function IndexPage() {
  return (
    <>
      <Hero id="top">
        <StoryHero />
      </Hero>
      <Main>
        <LightBlock>
          <WhiteSpace>
            <Link to="/contact">Go to Contact Page</Link>
          </WhiteSpace>
        </LightBlock>
        <DarkBlock>
          <WhiteSpace>
            <H2 id="testimonials">Testimonials</H2>
            <HR />
            <Testimonials />
            <TestimonialForm />
          </WhiteSpace>
        </DarkBlock>
      </Main>
    </>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />
