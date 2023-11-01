import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Seo from '../components/Seo'

const Main = styled.main`
  width: 100vw;
  height: 100%;
  padding: 12rem 0;
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

// const DarkBlock = styled.section`
//   width: 100%;
//   min-height: 50rem;
//   padding: 5rem 2rem;
//   background-color: rgba(0, 0, 0, 0.8);
//   color: var(--white);
//   input,
//   textarea {
//     color: var(--white);
//   }
//   a {
//     color: var(--white);
//     text-decoration: underline;
//     &:hover {
//       color: var(--blue);
//     }
//   }
//   .cta {
//     text-decoration: none;
//     align-self: end;
//   }
//   #nav-dots {
//     color: var(--black);
//     background-color: var(--white);
//     text-decoration: none;
//     &:hover {
//       color: var(--white);
//       background-color: var(--blue);
//     }
//     &:active {
//       border: 0.1rem dotted var(--blue);
//       color: var(--white);
//     }
//     &:focus {
//       background-color: var(--blue);
//       color: var(--white);
//     }
//     &[aria-current='page'] {
//       background-color: var(--blue);
//     }
//   }
// `

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

export default function IndexPage() {
  return (
    <Main>
      <LightBlock>
        <WhiteSpace>
          <Link to="/contact">Go to Contact Page</Link>
        </WhiteSpace>
      </LightBlock>
    </Main>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />
