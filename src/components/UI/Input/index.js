import React from 'react'
import { Form } from 'react-bootstrap'

export default function (props) {
    return (
        <Form.Group controlId="formBasicEmail">
            <Form.Label>{props.label}</Form.Label>
            <Form.Control type={props.type} placeholder={props.placeholder} value={props.value} onChange={(e)=>props.onChange(e)} />
            <Form.Text className="text-muted">
                {props.errorMessage}
        </Form.Text>
        </Form.Group>
    )
}
