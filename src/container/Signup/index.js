import React from 'react'
import Layout from '../../components/Layout'
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import Input from '../../components/UI/Input';

export default function SignUp() {
    return (
        <div>
            <Layout>
                <Container style={{ marginTop: '50px' }}>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>

                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <Input label="FirstName" type="text" placeholder="enter firstname" />
                                    </Col>
                                    <Col md={6}>
                                        <Input label="LasName" type="text" placeholder="enter lastname" />
                                    </Col>
                                </Row>

                                <Input label="email" type="email" placeholder="enter email" />
                                <Input label="passord" type="password" placeholder="enter password" />

                                <Button variant="primary" type="submit">
                                    Submit
                                 </Button>
                            </Form>
                        </Col>
                    </Row>

                </Container>
            </Layout>
        </div>
    )
}
