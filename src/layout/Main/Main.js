import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../../component/Header/Header';
import SideNav from '../../component/SideNav/SideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='8'>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg='4'>
                        <SideNav></SideNav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;