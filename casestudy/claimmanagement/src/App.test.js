import React from 'react';
import { render, fireEvent, queryByTestId, queryAllByPlaceholderText, queryByPlaceholderText } from '@testing-library/react';
import App from './App';
import Login from './components/Login';

it("renders correctly", () =>{
  const {queryByTestId, queryByPlaceholderText} = render(<Login/>)

  expect(queryByTestId("login")).toBeTruthy()
  expect(queryByTestId("username")).toBeTruthy()
  expect(queryByTestId("password")).toBeTruthy()
  expect(queryByPlaceholderText('Enter User Name')).toBeTruthy()
  expect(queryByPlaceholderText('Password')).toBeTruthy()
})

describe("Input value", () =>{
  it("update on change", () =>{
    const {queryByPlaceholderText} = render(<Login/>)
    const username  = queryByPlaceholderText('Enter User Name');
    fireEvent.change(username, {target: {value: "thiru"}})
    expect(username.value).toBe("thiru")
  })
})

// describe("Login Button ", ()=>{
//   describe("with username", ()=>{
//     it("trigger handle submit function with name ", ()=>{

//       const submitForm = jest.fn();
//       const handleSubmitt = jest.fn();

//       const{ queryByTestId, queryByPlaceholderText } = render(<Login submitForm={submitForm}/>);
//       const username = queryByPlaceholderText('Enter User Name');
//       fireEvent.change(username, {target: {value: "thiru"}})
      
//       const password = queryByPlaceholderText('Password');
//       fireEvent.change(password, {target: {value: "As2@"}})
      
//       fireEvent.click(queryByTestId("login"))
//       expect(handleSubmitt).toHaveBeenCalled();
//     })
//   })
// })



