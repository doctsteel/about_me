import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './blog_components/header/header.js';
import Posts from './blog_components/posts/posts.js';

class Page extends React.Component {
    render() {
        return (
            <>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Posts />
                </Container>
            </>
        );
    }
}


ReactDOM.render(
    <Page />,
    document.getElementById('root')
);
                        