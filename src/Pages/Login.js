import { Fragment } from "react";
import SideLogin from '../Components/Login/Login';
import SideHome from '../Components/Login/SideHome';
import { Row } from '../Components/Common/CommonElements/CommonElements'
import Footer from '../Components/Common/Footer'

const Login = () => {
    return (
        <Fragment>
            <Row>
                <SideLogin />
                <SideHome />
            </Row>

        </Fragment>
    )
}

export default Login