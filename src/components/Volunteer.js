import * as React from 'react'
import styled from 'styled-components'
import useForm from '../utils/useForm'

const Form = styled.form`
  max-width: 80rem;
  width: 100%;
  transition: 0.5s all ease;
  display: flex;
  flex-flow: column nowrap;
  .required {
    color: var(--red);
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
  button.submit {
    margin: 2rem 0;
    align-self: end;
  }
  .show {
    display: block;
  }
`

const InlineField = styled.fieldset`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(auto, 1fr));
  gap: 0.5rem;
  border: none;
  margin-bottom: 2rem;
  label {
    padding-left: 1rem;
  }
  input {
    height: 5rem;
    margin: 1rem 0.5rem;
    padding-left: 1rem;
    border: none;
    border-top: 0.2rem inset var(--darkgray);
    border-bottom: 0.2rem inset var(--darkgray);
    border-left: 0.1rem inset var(--darkgray);
    border-right: 0.1rem inset var(--darkgray);
    border-radius: 0.5rem;
    background: transparent;
    font-family: inherit;
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
  gap: 0.5rem;
  border: none;

  label {
    padding-left: 1rem;
  }
  input {
    height: 5rem;
    margin: 1rem 0.5rem;
    padding-left: 1rem;
    border: none;
    border-top: 0.2rem inset var(--darkgray);
    border-bottom: 0.2rem inset var(--darkgray);
    border-left: 0.1rem inset var(--darkgray);
    border-right: 0.1rem inset var(--darkgray);
    border-radius: 0.5rem;
    background: transparent;
    font-family: inherit;
  }
  textarea {
    padding: 1rem;
    margin: 1rem 0.5rem;
    border: none;
    border-top: 0.2rem inset var(--darkgray);
    border-bottom: 0.2rem inset var(--darkgray);
    border-left: 0.1rem inset var(--darkgray);
    border-right: 0.1rem inset var(--darkgray);
    border-radius: 0.5rem;
    background: transparent;
    font-family: inherit;
  }
  p {
    margin-left: 2rem;
    margin-top: 3rem;
    font-size: 2rem;
    color: var(--red);
    @media only screen and (max-width: 500px) {
      margin-left: 1rem;
    }
  }
  .show {
    align-self: start;
    font-size: 1.85rem;
  }
  select {
    background-color: transparent;
    border: none;
    padding: 0 1rem 0 0;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
    outline: none;
    &::-ms-expand {
      display: none;
    }
  }
  .select {
    select {
      width: 98%;
      min-width: 15rem;
      max-width: 30rem;
      margin: 2rem 0;
      padding: 1rem 2rem;
      font-size: 1.85rem;
      cursor: pointer;
      line-height: 1.1;
      background-color: var(--red);
      color: var(--white);
      &::after {
        content: '&or;';
        width: 0.8rem;
        height: 0.5rem;
        background-color: var(--white);
      }
      @media only screen and (max-width: 535px) {
        font-size: 1.5rem;
      }
      @media only screen and (max-width: 390px) {
        font-size: 1.1rem;
      }
    }
    @media only screen and (max-width: 312px) {
      padding-left: 0;
      width: 100%;
      max-width: 100%;
    }
  }
  .full select {
    min-width: 30rem;
    max-width: 100%;
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

export default function Volunteer() {
  const { values, updateValue } = useForm({
    name: '',
    email: '',
    phone: '',
    message: '',
    over18: '',
    referredby: '',
    company: '',
    organization: '',
    members: '',
    event: '',
    consent: '',
  })

  return (
    <Form
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="volunteers"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="volunteers" />
      <FullField className="nameField">
        <LabelStack>
          <label htmlFor="name">Full Name</label>
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
            required
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
            required
          />
        </LabelStack>
      </InlineField>
      <FullField>
        <LabelStack>
          <label htmlFor="18" className="select show inline required">
            Are you 18 years or older?
            <select name="over18" required>
              <option value="">---</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
        </LabelStack>
      </FullField>
      <FullField className="referredBy">
        <LabelStack>
          <label htmlFor="referredby">Where did you hear about us?</label>
          <input
            type="text"
            name="referredby"
            id="referredby"
            value={values.referredby}
            onChange={updateValue}
            className="required"
            required
          />
        </LabelStack>
      </FullField>
      <FullField>
        <label htmlFor="company" className="select show inline required">
          Are you a company, organization or group?
          <select name="company">
            <option value="">---</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
      </FullField>
      <InlineField className="orgMembers">
        <LabelStack>
          <label htmlFor="organization">Name of Organization</label>
          <input
            type="text"
            name="organization"
            id="organization"
            value={values.organization}
            onChange={updateValue}
          />
        </LabelStack>
        <LabelStack>
          <label htmlFor="members">How many members volunteering?</label>
          <input
            type="number"
            name="members"
            id="members"
            value={values.members}
            onChange={updateValue}
          />
        </LabelStack>
      </InlineField>
      <FullField className="event">
        <LabelStack>
          <label htmlFor="event">
            What event are you interested in volunteering for?
          </label>
          <textarea
            name="event"
            id="event"
            value={values.event}
            onChange={updateValue}
            rows="7"
          />
        </LabelStack>
      </FullField>
      <FullField>
        <p>
          We take protection of children seriously. To work on projects with
          children we require a background check.
        </p>
      </FullField>
      <FullField>
        <label htmlFor="backgroundcheck" className="select show required full">
          <select name="consent">
            <option value="notparticipating">
              I will not be participating in programs with children.
            </option>
            <option value="willprovide">
              I agree to provide a background check when required.
            </option>
          </select>
        </label>
      </FullField>
      <Submit type="submit" value="Submit" className="submit">
        Submit
      </Submit>
    </Form>
  )
}
