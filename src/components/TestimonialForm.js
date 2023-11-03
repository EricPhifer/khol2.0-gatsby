import * as React from 'react'
import styled from 'styled-components'
import useForm from '../utils/useForm'

const Form = styled.form`
  max-width: 65rem;
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
    @media only screen and (max-width: 740px) {
      font-size: 3.5rem;
    }
  }
  button.submit {
    margin: 2rem 0;
    align-self: end;
  }
`

const FullField = styled.fieldset`
  display: flex;
  justify-content: center;
  border: none;
  input {
    width: 100%;
    padding: 1rem;
    margin: 1rem 0;
    border: none;
    border-top: 0.2rem inset var(--white);
    border-bottom: 0.2rem inset var(--white);
    border-left: 0.1rem inset var(--white);
    border-right: 0.1rem inset var(--white);
    border-radius: 0.5rem;
    background: transparent;
  }
  textarea {
    width: 100%;
    margin: 1rem 0;
    padding: 1rem;
    border: none;
    border-top: 0.2rem inset var(--white);
    border-bottom: 0.2rem inset var(--white);
    border-left: 0.1rem inset var(--white);
    border-right: 0.1rem inset var(--white);
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
  font-variant: small-caps;
  font-weight: 700;
  &:focus {
    border: 0.2rem dotted var(--blue);
  }
  @media only screen and (max-width: 900px) {
    margin-bottom: 2rem;
  }
`

export default function TestimonialForm() {
  const { values, updateValue } = useForm({
    name: '',
    message: '',
  })

  return (
    <Form
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="testimonial"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="testimonial" />
      <legend>Share With Others How We Have Impacted Your Life</legend>
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
            required
          />
        </LabelStack>
      </FullField>
      <FullField className="message">
        <LabelStack>
          <label htmlFor="message">
            How has Kinna's House of Love helped you?
          </label>
          <textarea
            name="message"
            id="message"
            value={values.message}
            onChange={updateValue}
            rows="5"
            className="required"
            required
          />
        </LabelStack>
      </FullField>
      <Submit type="submit" value="Submit" className="submit">
        Submit
      </Submit>
    </Form>
  )
}
