import React from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import PostPage from '../PostPage/PostPage';
import AllPosts from './AllPosts/AllPosts';
import MakeAdmin from './Make Admin/MakeAdmin';

const DashBoard = () => {
    return (
        <Container className='my-5 '>
            <h2 className='mx-auto my-5 text-muted'>Welcome ADMIN!</h2>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row >
                    <Col sm={2} className=''>
                        <Nav variant="pills" className="flex-column mt-5">
                            <Nav.Item>
                                <Nav.Link className='' eventKey="first">Approve/Delete Post</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='' eventKey="second">Post Your Experience</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='' eventKey="third">Add New Admin</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={10}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <AllPosts></AllPosts>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <PostPage></PostPage>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <MakeAdmin></MakeAdmin>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
};

export default DashBoard;