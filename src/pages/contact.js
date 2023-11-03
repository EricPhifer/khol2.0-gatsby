import * as React from 'react'
import styled from 'styled-components'
import useForm from '../utils/useForm'
import Seo from '../components/Seo'

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
    margin: 0.5rem 0;
    border-top: 0.2rem inset var(--black);
    border-bottom: 0.2rem inset var(--black);
    border-left: 0.1rem inset var(--black);
    border-right: 0.1rem inset var(--black);
    border-radius: 0.5rem;
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
    margin: 0.5rem 0;
    border-top: 0.2rem inset var(--black);
    border-bottom: 0.2rem inset var(--black);
    border-left: 0.1rem inset var(--black);
    border-right: 0.1rem inset var(--black);
    border-radius: 0.5rem;
    background: transparent;
  }
  textarea {
    width: 100%;
    margin: 0.5rem 0;
    padding: 1rem;
    border-top: 0.2rem inset var(--black);
    border-bottom: 0.2rem inset var(--black);
    border-left: 0.1rem inset var(--black);
    border-right: 0.1rem inset var(--black);
    border-radius: 0.5rem;
    background: transparent;
  }
`

const LabelStack = styled.fieldset`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
`

const Submit = styled.button`
  width: 20rem;
  margin-bottom: 5rem;
  padding: 1.5rem;
  background: var(--blue);
  color: var(--white);
  border-radius: 1rem;
  font-size: 2rem;
  font-weight: bold;
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
              <LabelStack>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={values.name}
                  onChange={updateValue}
                  className="required"
                />
              </LabelStack>
            </FullField>
            <InlineField className="emailPhone">
              <LabelStack>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={updateValue}
                  className="required"
                />
              </LabelStack>
              <LabelStack>
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={values.phone}
                  onChange={updateValue}
                  className="required"
                />
              </LabelStack>
            </InlineField>
            <FullField className="message">
              <LabelStack>
                <label htmlFor="message">How can we help?</label>
                <textarea
                  name="message"
                  id="message"
                  value={values.message}
                  onChange={updateValue}
                  rows="7"
                  className="required"
                />
              </LabelStack>
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
