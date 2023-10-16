import React, { Fragment, useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Container, Row, StyledContainer } from '../Common/CommonElements/CommonElements'
import { FilterContainer, CardGrid, Card, CardType } from './ListedReportsElements/ListedReportsElements'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import ReportCard from './ReportCard';



const ListedReports = () => {

    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [reportData, setReportData] = useState([]);
    const [image, setImage] = useState(null);


    const [filters, setFilters] = useState({
        filter1: false,
        filter2: false,
        filter3: false,
    });

    const handleFilterChange = (filterName) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterName]: !prevFilters[filterName],
        }));
    };

    useEffect(() => {
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            setIsLoggedIn(true);
        }
        try {
            axios.get('http://localhost:3080/reports')
                .then(response => {
                    debugger
                    setReportData(response.data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        } catch (error) {
            console.log(error)
        }
    }, []);

    return (
        <Fragment>
            <Row>
                <FilterContainer>
                    <label htmlFor="animalType">Animal Type:</label>
                    <select id="animalType">
                        <option value="all">All</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                    </select>

                    <label htmlFor="size">Size:</label>
                    <select id="size">
                        <option value="all">All</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>

                    <label htmlFor="furColor">Fur Color:</label>
                    <select id="furColor">
                        <option value="grey">Grey</option>
                        <option value="black">Black</option>
                        <option value="white">White</option>
                        <option value="brown">Brown</option>
                        <option value="all">All</option>
                    </select>

                    <label htmlFor="race">Race:</label>
                    <select id="race">

                    </select>

                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" min="0" />

                    <label htmlFor="reportType">Report Type:</label>
                    <select id="reportType">
                        <option value="all">All</option>
                        <option value="lost">Lost</option>
                        <option value="found">Found</option>
                    </select>

                    <label htmlFor="startDate">Start Date:</label>
                    <input type="date" id="startDate" />

                    <label htmlFor="endDate">End Date:</label>
                    <input type="date" id="endDate" />

                </FilterContainer>
                <StyledContainer>
                    <CardGrid>
                        {reportData ? (reportData.map((report) => (<Card>
                            {report.type === "Lost" ? (<CardType style={{ color: 'yellow' }}>Lost</CardType>) : (<CardType style={{ color: 'green' }}>Found</CardType>)}
                            <p>{report.petType}</p>
                            <p>{report.race}</p>
                            <p>{report.size}</p>
                            <button onClick={() => {
                                navigate('/list_reports/' + report._id);
                            }}>Ver Reporte</button>
                        </Card>))) : (<h1>No Reports Found!</h1>)}
                    </CardGrid>
                </StyledContainer>
            </Row>
        </Fragment >
    )
}

export default ListedReports