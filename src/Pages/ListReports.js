import React, { Fragment } from 'react'
import ListReports from '../Components/ListReports/ListedReports'
import { Row } from '../Components/Common/CommonElements/CommonElements'
import Footer from '../Components/Common/Footer'


const ListReportsPage = () => {
    return (
        <Fragment>
            <Row>
                <ListReports />
                
            </Row>
            <Footer />
        </Fragment>
    )
}

export default ListReportsPage