import React from 'react';
import './PlaceForm.css';
import Button from '../../shared/components/FormElements/Button';
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import Input from '../../shared/components/FormElements/Input';



const NewPlace = () => {
    const [formState, inputHandler] = useForm({
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        },
        address: {
            value: '',
            isValid: false
        }
    }, 
    false);


    const placeSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs); // send this to the backend later!
    };


return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
        <Input 
        element="input" 
        id="title"
        type="text" 
        label="Title"
         validators={[VALIDATOR_REQUIRE()]} 
         errorText="Please enter a valid title." 
         onInput={inputHandler} />

         <Input 
        element="textarea" 
        id="description"
        label="Description"
         validators={[VALIDATOR_MINLENGTH(5)]} 
         errorText="Please enter a valid description (at least 5 characters)." 
         onInput={inputHandler} />

        <Input 
        element="input" 
        id="address"
        label="Address"
         validators={[VALIDATOR_REQUIRE()]} 
         errorText="Please enter a valid address)." 
         onInput={inputHandler} />

         
         <Button type="submit" disabled={!formState.isValid}>ADD PLACE</Button>
    </form>
)
}

export default NewPlace;