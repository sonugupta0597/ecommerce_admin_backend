
import React , {useState} from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import Layout from '../../components/Layout'
import Input from '../../components/UI/Input'
import {Loginrequest} from '../../actions/Auth.action'
import {useDispatch} from 'react-redux'

export default function Signin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const dispatch = useDispatch()

    function login(e){
               e.preventDefault();

               const user = {"email":email,"password":password}

               Loginrequest(dispatch,user)
    }

    return (
        <div>
            <Layout>
                <Container style={{marginTop:'50px'}}>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>

                            <Form onSubmit={login}>
                                 
                                 <Input label="email" value={email} type="email" placeholder="eneter email" onChange={(e)=>setEmail(e.target.value)}/>
                                 <Input label="password" value={password} type="password" placeholder="enter password" onChange={(e)=>setPassword(e.target.value)}/>
                                
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
