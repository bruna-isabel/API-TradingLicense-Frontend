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

let appJWTToken


/**
* Login form component for app signup.
*/
class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.onFinish = this.onFinish.bind(this);
    }

    onFinish = (values) => {
        console.log('Received values of form: ', values);
        const { email, password} = values;  // ignore the 'confirm' value in data sent
        fetch('https://earth-almanac-3030.codio-box.uk/auth/login', {
            method: "POST",
            body: JSON.stringify(email, password),
            headers: {
                Authorization: `Bearer ${appJWTToken}`
            }        
        })
        .then(status)
        .then(json)
        .then(data => {
            // TODO: display success message and/or redirect
            console.log(data);
            alert("User Logged In")
			data.password = password
			 console.log(data);
        })
        .catch(error => {
            // TODO: show nicely formatted error message and clear form
            alert(`Error: ${JSON.stringify(error)}`);
        });  
      };

    render() {
        return (


        <Form {...formItemLayout} name="login" onFinish={this.onFinish} scrollToFirstError>
			
            <Form.Item {...tailFormItemLayout} name="email" rules= {emailValidation} label="E-mail">
                <Input />
            </Form.Item>

            <Form.Item {...tailFormItemLayout} name="password" rules={passwordValidation} label="Password" hasFeedback>
                <Input.Password />
            </Form.Item>
        
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                Login
                </Button>
            </Form.Item>
        </Form>
        );

    };
};


export default LoginForm;