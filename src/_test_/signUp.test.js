import React from 'react';
import { render,screen,waitFor,fireEvent} from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect'
import SignUp from '../components/signUp';
import {BrowserRouter} from 'react-router-dom';

describe("Testing",()=>
{
    it('it is',()=>{
        //const div = document.createElement("div");
        render(<BrowserRouter><SignUp/></BrowserRouter>);
    // await waitFor(()=>screen.getAllByPlaceholderText("Enter Password"));
        
        expect(screen.getAllByPlaceholderText("Enter your password"));
        const inputEmail = screen.getByTitle("email")
        const inputPassword = screen.getByTitle("password")
        fireEvent.change(inputEmail, { target: { value: "" } })
        fireEvent.change(inputPassword, { target: { value: "" } })
        fireEvent.click(screen.getByTitle("sign"))
       //expect(screen.getByTitle("EmailError").innerHTML).toBe("Email cannot be empty")
       expect(screen.getByTitle("PasswordError").innerHTML).toBe("password cannot be blank")
    })

    it('it is',()=>{
        //const div = document.createElement("div");
        render(<BrowserRouter><SignUp/></BrowserRouter>);

        const inputEmail = screen.getByTitle("email")
        const inputPassword = screen.getByTitle("password")
        fireEvent.change(inputEmail, { target: { value: "abc(&" } })
        fireEvent.change(inputPassword, { target: { value: ";un%" } })
        fireEvent.click(screen.getByTitle("sign"))
        expect(screen.getByTitle("EmailError").innerHTML).toBe("Email Not In Format")
        expect(screen.getByTitle("PasswordError").innerHTML).toBe("Password must be at least 8 characters with at least one lowercase,uppercase and two special characters")
    })
})