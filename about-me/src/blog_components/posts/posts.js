import React from 'react';
import { Row, Col, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Comments from './comments/comments.js'


class Posts extends React.Component {
    render() {
        return (
                <>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Primeira postagem do blog</Card.Title>
                                <Card.Subtitle className="text-muted mb-2">26/10/20</Card.Subtitle>
                                <Card.Text>
                                    Só um exemplo rápido de teste desse primeiro card.
                                </Card.Text>
                                <Comments />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                </>
        );
    }
}

export default Posts;