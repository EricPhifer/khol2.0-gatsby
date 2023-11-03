import * as React from 'react'
import styled from 'styled-components'
import Seo from '../components/Seo'
import Layout from '../components/Layout'

// Body Components
import Volunteer from '../components/Volunteer'

const Main = styled.main`
  width: 80vw;
  height: 100%;
  margin: 0 auto;
  padding: 12rem 0 20rem;
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
  fieldset {
    padding: 0;
  }
  @media only screen and (max-width: 500px) {
    width: 98vw;
  }
`

const H2 = styled.h2`
  display: block;
  margin-bottom: 1rem;
  font-size: 5rem;
  font-variant: small-caps;
  @media only screen and (max-width: 330px) {
    font-size: 4rem;
  }
`

const HR = styled.hr`
  border: 0.5rem solid var(--orange);
  margin-bottom: 2rem;
`

export default function VolunteerPage() {
  return (
    <Layout>
      <Main>
        <H2>Volunteer</H2>
        <HR />
        <Volunteer />
      </Main>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export const Head = () => <Seo title="Volunteer Form" />
