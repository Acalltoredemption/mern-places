import React from 'react';
import {useParams} from 'react-router-dom';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../shared/util/validators';

import './PlaceForm.css';

const DUMMY_PLACES = [
    
    {
    id: "p1",
    title: 'Empire State Building',
    description: 'A famous building!',
    imageUrl: 'https://bsmedia.business-standard.com/_media/bs/img/article/2021-09/20/full/1632080404-7898.jpg',
    address: 'New York, Ny',
    location: {
        lat: 40.7484405,
        lng: -73.9878584
    },
    creator: 'u1'
},
{
    id: "p2",
    title: 'Empire State Building',
    description: 'A famous building!',
    imageUrl: 'https://bsmedia.business-standard.com/_media/bs/img/article/2021-09/20/full/1632080404-7898.jpg',
    address: 'New York, Ny',
    location: {
        lat: 40.7484405,
        lng: -73.9878584
    },
    creator: 'u2'
}
];

const UpdatePlace = () => {
    const placeId = useParams().placeId;

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

    if (!identifiedPlace){
        return (
            <div className="center">
            <h2>Could not find place!</h2>
            </div>
        );
    }
    return (
    <form className="place-form">
        <Input id="title" element="input" type="text" label="Title" validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid title." onInput={() => {}} value={identifiedPlace.title} valid={true} />
        <Input id="description" element="textarea"  label="Description" validators={[VALIDATOR_MINLENGTH(5)]} errorText="Please set a valid description. (min. 5 characters)" onInput={() => {}} value={identifiedPlace.description} valid={true} />
        <Button type="submit" disabled={true}>UPDATE PLACE</Button>
    </form>
    );

};

export default UpdatePlace;