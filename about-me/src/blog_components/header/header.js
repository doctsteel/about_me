import React from 'react';
import { Row, Col, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePic from '../../images/profilepic.jpg';

class Header extends React.Component {
    render() {
        var profpicstyle = {
            maxWidth:'250px',
            display: 'block',
            marginLeft: 'auto',
            marginRight:'auto',
        };
        return (
                <>
                    <Row>
                        
                        <Col>
                            <Image style={profpicstyle} src={ProfilePic} roundedCircle responsive />
                        </Col>
                    </Row>
                    <Row>
                    
                        <Col className="d-flex justify-content-center">
                            <h1>José Gabriel Alves</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <h3>aspirante à cientista de dados</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <p>Campinas, SP</p>
                        </Col>
                     </Row>
                     <Row>    
                         <Col className="d-flex justify-content-center">   
                            <p>jose.alves2@gmail.com</p>
                        </Col>
                    
                    </Row>
                </>
           
        );
    }
}

export default Header;