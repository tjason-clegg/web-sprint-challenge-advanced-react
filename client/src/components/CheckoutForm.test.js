import React, {getElementByClassName} from "react";
import { render, fireEvent, screen, getLabelByTestId, getByLabelText, getByText, getByTestId } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />)

    const header = getByText(/Checkout Form/i)

    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    const firstNameInput = screen.getByLabelText(/First Name:/i)
    const lastNameInput = screen.getByLabelText(/Last Name:/i)
    const addressInput = screen.getByLabelText(/Address:/i)
    const cityInput = screen.getByLabelText(/City:/i)
    const stateInput = screen.getByLabelText(/State:/i)
    const zipInput = screen.getByLabelText(/Zip:/i)
    const checkoutButton = screen.getByTestId(/checkout/i)

    fireEvent.change(firstNameInput, {target: {value: 'Jason'}})
    fireEvent.change(lastNameInput, {target: {value: 'Clegg'}})
    fireEvent.change(addressInput, {target: {value: '1234 W. 56789 N.'}})
    fireEvent.change(cityInput, {target: {value: 'SomePlace'}})
    fireEvent.change(stateInput, {target: {value: 'Utah'}})
    fireEvent.change(zipInput, {target: {value: '12345'}})

    fireEvent.click(checkoutButton)


    if(screen.getByTestId(/successMessage/i) !== true) {
        throw "Message did not show up"
    }
    
});
