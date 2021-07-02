import React from 'react';
import { Form, Input, Button } from 'antd';
import { status, json } from '../utilities/requestHandlers';

/* Better Format of Form */
const formItemLayout = {
    labelCol: { xs: { span: 24 }, sm: { span: 6 } },
    wrapperCol: { xs: { span: 24 }, sm: { span: 12 } }  
};   
const tailFormItemLayout = {
    wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 6 } },
};

/* Validation Functions*/
// define validation rules for the form fields

const emailValidation = [
    {type: 'email', message: 'Email is incorrect format.'},
    {required: true, message: 'Please fill in all the fields!' }
];

const passwordValidation = [
    { required: true, message: 'Please fill in all the fields!' }
];

const nameValidation = [
    { required: true, message: 'Please fill in all the fields!', whitespace: true }
]


/**
* Registration form component for app signup.
*/
class SignUpForm extends React.Component {

    constructor(props) {
        super(props);
        this.onFinish = this.onFinish.bind(this);
    }

    onFinish = (values) => {
        console.log('Received values of form: ', values);
        const { confirm, ...data } = values;  // ignore the 'confirm' value in data sent
        fetch('http://localhost:3030/auth/signup', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }        
        })
        .then(status)
        .then(json)
        .then(data => {
            // TODO: display success message and/or redirect
            console.log(data);
            alert("User added")
        })
        .catch(error => {
            // TODO: show nicely formatted error message and clear form
            alert(`Error: ${JSON.stringify(error)}`);
        });  
      };

    render() {
        return (


        <Form {...formItemLayout} name="register" onFinish={this.onFinish} scrollToFirstError>
            <Form.Item {...tailFormItemLayout} name="name" rules={nameValidation} label="name">
                <Input />
            </Form.Item>

            <Form.Item {...tailFormItemLayout} name="email" rules= {emailValidation} label="E-mail">
                <Input />
            </Form.Item>

            <Form.Item {...tailFormItemLayout} name="password" rules={passwordValidation} label="Password" hasFeedback>
                <Input.Password />
            </Form.Item>
        
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                Register
                </Button>
            </Form.Item>
        </Form>
        );

    };
};


export default SignUpForm;