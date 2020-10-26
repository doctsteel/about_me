import React, { useState } from 'react';
import { Button, Accordion, Collapse, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function CommentCollapse() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button 
            variant="light" 
            onClick={ () => setOpen(!open) }
            >
                Comentários
            </Button>
            <Collapse in={open}>
                <Card>
                    <Card.Body>
                        <Card.Title>João da Silva</Card.Title>
                        <Card.Subtitle>hoje, as 13:32</Card.Subtitle>
                        <Card.Text> Olha, ta uma bosta</Card.Text>
                    </Card.Body>
                </Card>
            </Collapse>
        </>
    )
}

class Comments extends React.Component {
    
    render() {
        return (
                <>
                    <CommentCollapse />
                </>
        );
    }
}

export default Comments;