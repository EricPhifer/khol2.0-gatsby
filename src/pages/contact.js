import * as React from 'react'
import styled from 'styled-components'
import useContact from '../utils/useContact'
import useForm from '../utils/useForm'
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

const H2 = styled.h2`
  display: block;
  padding-top: 10rem;
  margin-top: -10rem;
  font-size: 5rem;
  font-variant: small-caps;
  @media only screen and (max-width: 330px) {
    font-size: 4rem;
  }
`

const HR = styled.hr`
  border: 0.5rem solid var(--orange);
`

const Form = styled.form`
  max-width: 80rem;
  width: 100%;
  margin: 2rem auto;
  transition: 0.5s all ease;
  display: flex;
  flex-flow: column nowrap;
  label {
    display: none;
  }
  input,
  textarea {
    font-size: 1.75rem;
  }
  legend {
    width: 98%;
    font-size: 5rem;
    text-align: center;
    margin-bottom: 3rem;
  }
  button {
    align-self: end;
  }
`

const InlineField = styled.fieldset`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(auto, 1fr));
  gap: 0.5rem;
  border: none;
  margin-bottom: 2rem;
  input {
    padding: 1rem;
    margin: 0 0.5rem;
    border: none;
    border-bottom: 0.2rem inset var(--gray);
    background: transparent;
  }
  @media only screen and (max-width: 900px) {
    display: flex;
    flex-flow: column nowrap;
  }
  @media only screen and (max-height: 750px) {
    margin-bottom: 1rem;
    input {
      font-size: 1.25rem;
    }
    a,
    button {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
`

const FullField = styled.fieldset`
  display: flex;
  justify-content: center;
  border: none;
  input {
    width: 100%;
    padding: 1rem;
    margin: 0 0.5rem;
    border: none;
    border-bottom: 0.2rem inset var(--gray);
    background: transparent;
  }
  textarea {
    width: 100%;
    margin-left: 0.5rem;
    padding: 1rem;
    border: none;
    border-bottom: 0.2rem inset var(--gray);
    background: transparent;
  }
`

const Submit = styled.button`
  width: 20rem;
  margin-bottom: 5rem;
  padding: 1.5rem;
  background: var(--blue);
  color: var(--white);
  border-radius: 1rem;
  font-size: 1.85rem;
  cursor: pointer;
  &:hover {
    background-color: var(--white);
    border: 0.2rem solid var(--blue);
    color: var(--blue);
  }
  &:focus {
    border: 0.2rem dotted var(--white);
  }
  @media only screen and (max-width: 900px) {
    margin-bottom: 2rem;
  }
`

export default function Contact() {
  const { values, updateValue } = useForm({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const { contact, error, loading, errMessage, submitContact } = useContact({
    values,
  })
  console.log(contact, error, loading, submitContact)
  if (errMessage) {
    return <p>{errMessage}</p>
  }
  return (
    <Main>
      <LightBlock>
        <WhiteSpace>
          <H2 id="contact">Contact Us</H2>
          <HR />
          <Form
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="contact"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <FullField className="nameEmail">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={values.name}
                onChange={updateValue}
                placeholder="Name"
                className="required"
              />
            </FullField>
            <InlineField className="emailPhone">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                value={values.email}
                onChange={updateValue}
                placeholder="Email"
                className="required"
              />
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={values.phone}
                onChange={updateValue}
                placeholder="Phone"
                className="required"
              />
            </InlineField>
            <FullField className="message">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                value={values.message}
                onChange={updateValue}
                rows="7"
                placeholder="How can we help you keep going?"
                className="required"
              />
            </FullField>
            <Submit type="submit" value="Submit">
              Submit
            </Submit>
          </Form>
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
export const Head = () => <Seo title="Contact Us" />
