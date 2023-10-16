import React, { Component } from 'react';
import { MapContainer } from 'react-leaflet';
import { Card, CardContainer, CardItemContainer, CardType } from './ListedReportsElements/ListedReportsElements'
import { Navigate } from 'react-router-dom';




class ReportCard extends Component {
    

    render() {
        const { color, date, location, petType, race, reportingUser, size, type, _id } = this.props.param;
        return (
            <Card>
                {type === "Lost" ? (<CardType style={{ color: 'yellow' }}>Lost</CardType>) : (<CardType style={{ color: 'green' }}>Found</CardType>)}
                <p>{petType}</p>
                <p>{race}</p>
                <p>{size}</p>
                <button onClick={() => {
                   
                }}>Ver Reporte</button>
            </Card>
        );
    }
}

export default ReportCard;