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

const fieldValidation = [
    {required: true, message: 'Please fill in all the fields!' }
];

/**
* Application form component for app signup.
*/
class ApplicationForm extends React.Component {

    constructor(props) {
        super(props);
        this.onFinish = this.onFinish.bind(this);
    }

    onFinish = (values) => {
        console.log('Received values of form: ', values);
        const { confirm, ...data } = values;  // ignore the 'confirm' value in data sent
        fetch('https://earth-almanac-3030.codio-box.uk/applications', {
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
            alert("Application Added")
        })
        .catch(error => {
            // TODO: show nicely formatted error message and clear form
            alert(`Error: ${JSON.stringify(error)}`);
        });  
      };

    render() {
        return (
        <Form {...formItemLayout} name="apply" onFinish={this.onFinish} scrollToFirstError>
			
            <Form.Item {...tailFormItemLayout} name="business_name" rules= {fieldValidation} label="Business Name">
                <Input />
            </Form.Item>

            <Form.Item {...tailFormItemLayout} name="description" rules={fieldValidation} label="Description">
                <Input />
            </Form.Item>

            <Form.Item {...tailFormItemLayout} name="address" rules={fieldValidation} label="Address">
                <Input />
            </Form.Item>

            <Form.Item {...tailFormItemLayout} name="date_founded" rules={fieldValidation} label="Date founded">
                <Input />
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


export default ApplicationForm;