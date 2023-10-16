import React, { Fragment, useEffect, useState } from 'react'
import { FormContainer, FileInput, FileLabel, Label, SubmitButton, Input, StyledSelect } from './ReportFormElements/ReportFormElements'
import axios from 'axios';
import { Container } from '../Common/CommonElements/CommonElements';
import { TileLayer, Marker, Popup, MapContainer } from 'react-leaflet';

const ReportForm = () => {

    const DogBreeds = [
        'Labrador Retriever',
        'German Shepherd',
        'Golden Retriever',
        'French Bulldog',
        'Beagle',
        'Poodle',
        'Rottweiler',
        'Boxer',
        'Dachshund',
        'Shih Tzu',
        'Bull Terrier',
        'Pug',
        'Chihuahua',
        'Siberian Husky',
        'Great Dane',
        'Doberman',
        'Border Collie',
        'Boston Terrier',
        'Saint Bernard',
        'Akita',
        'English Bulldog',
        'Shetland Sheepdog',
        'Pomeranian',
        'Cavalier King Charles Spaniel',
        'Papillon',
        'Australian Shepherd',
        'Chow Chow',
        'Bichon Frise',
        'Bloodhound',
        'Dalmatian',
        'Bullmastiff',
        'Greyhound',
        'Basset Hound',
        'Maltese',
        'Italian Greyhound',
        'Afghan Hound',
        'Whippet',
        'Collie',
        'Pointer',
        'Setter',
        'Weimaraner',
        'Borzoi',
        'Rhodesian Ridgeback',
        'Saluki',
        'Samoyed',
        'Alaskan Malamute'
    ];

    const CatBreeds = [
        'Siamese',
        'Persian',
        'Maine Coon',
        'Ragdoll',
        'Bengal',
        'Abyssinian',
        'Scottish Fold',
        'British Shorthair',
        'Sphynx',
        'Birman',
        'Oriental',
        'Burmese',
        'Russian Blue',
        'American Shorthair',
        'Cornish Rex',
        'Devon Rex',
        'Turkish Van',
        'Somali',
        'Himalayan',
        'Manx',
        'Chartreux',
        'Balinese',
        'Japanese Bobtail',
        'Norwegian Forest Cat',
        'Egyptian Mau',
        'Tonkinese'
    ];

    const [type, setType] = useState('Lost');
    const [race, setRace] = useState(DogBreeds[0]);
    const [color, setColor] = useState('');
    const [size, setSize] = useState(1);
    const [petType, setPetType] = useState('Dog');
    const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
    const [image, setImage] = useState(null);
    const [latestId, setLatestId] = useState(null);
    const [mapRef, setMapRef] = useState(null)
    const [breeds, setBreeds] = useState(DogBreeds);

    function validarFormData(formData) {
        for (const key in formData) {
            if (formData.hasOwnProperty(key)) {
                const value = formData[key];
                if (value === null || value === undefined || value === '') {
                    return false;
                }
            }
        }
        return true;
    }

    const updateRaces = (race) => {
        if (race === 'Dog') {
            setBreeds(DogBreeds);
            setRace(breeds[0]);
        } else {
            setBreeds(CatBreeds);
            setRace(breeds[0]);
        }
    }

    const convertBase64 = (imageFile) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(imageFile);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (err) => reject(err)
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let base64File = await convertBase64(image);
        const formData = {
            type: type,
            petType: petType,
            race: race,
            color: color,
            image: base64File,
            size: size,
            coordinates: coordinates,
            latestId: latestId,
            reportingUser: localStorage.getItem('currentUser')
        }

        if (validarFormData(formData)) {
            try {
                await axios.post('http://localhost:3080/upload', formData).then(response => {
                    window.location.reload();
                }).catch(error => {
                    console.error('Error uploading data:', error);
                });
            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            alert('Datos Incorrectos!')
        }
    };

    if (mapRef) {
        mapRef.on('click', (e) => {
            setCoordinates({ lat: e.latlng.lat, lng: e.latlng.lng })
        })
    }

    useEffect(() => {
        if (latestId == null) {
            try {
                axios.get('http://localhost:3080/latest', {
                }).then((result) => {
                    if (result) {
                        setLatestId(result.data['sequence_value'])
                    }
                });
            } catch (error) {
                console.log(error)
            }
        }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    let newLocation = { lat: position.coords.latitude, lng: position.coords.longitude }
                    setCoordinates(newLocation);
                },
                (error) => {
                    console.error(error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, [latestId]);

    return (
        <Fragment>
            <Container>
                <FormContainer>
                    <form onSubmit={handleSubmit}>



                        <Label>Type:</Label>
                        <StyledSelect value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="Lost">Lost</option>
                            <option value="Found">Found</option>
                        </StyledSelect>
                        <Label>Pet Type:</Label>
                        <StyledSelect value={petType} onChange={(e) => {
                            setPetType(e.target.value)
                            updateRaces(e.target.value);
                        }}>
                            <option value="Dog">Dog</option>
                            <option value="Cat">Cat</option>
                        </StyledSelect>

                        <Label>Race:</Label>
                        <StyledSelect type="text" value={race} onChange={(e) => setRace(e.target.value)}>
                            {breeds.map((breed) => (
                                <option key={breed} value={breed}>
                                    {breed}
                                </option>
                            ))}
                        </StyledSelect>

                        <Label>Color:</Label>
                        <Input type="text" value={color} onChange={(e) => setColor(e.target.value)} />

                        <Label>Size:</Label>
                        <StyledSelect type="text" value={size} onChange={(e) => setSize(e.target.value)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </StyledSelect>


                        <MapContainer id="map" whenReady={(map) => {
                            setMapRef(map.target);
                        }} key={`${coordinates.lat}-${coordinates.lng}`} center={[coordinates.lat, coordinates.lng]} zoom={15} style={{ height: '300px', width: '300px', margin: '20px 0' }}>
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            <Marker position={coordinates}>
                                <Popup>You selected this coordinates</Popup>
                            </Marker>
                        </MapContainer>
                        <FileLabel htmlFor="fileInput">
                            Upload Image
                            <FileInput type="file" id="fileInput" onChange={(e) => setImage(e.target.files[0])} />
                        </FileLabel>

                        <button onClick={() => {
                            console.log(image)
                        }}>BOTON</button>
                        <SubmitButton type="submit">Submit</SubmitButton>
                    </form>
                </FormContainer>

            </Container>

        </Fragment>
    );
}

export default ReportForm;

