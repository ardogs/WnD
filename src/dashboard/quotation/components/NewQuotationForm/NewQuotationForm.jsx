
import { Button, Form, message, Steps } from 'antd';
import { Step_1, Step_2, Step_3 } from './Steps';
import { useState } from 'react';
import { Formik } from 'formik';
import { initialValues, validationSchema } from './NewQuotationForm.data';




const steps = [
    { title: 'Información del proveedor', content: <Step_1 /> },
    { title: 'Detalles de la factura', content: <Step_2 /> },
    { title: 'Vista preeliminar', content: <Step_3 /> },
];





export const NewQuotationForm = () => {

    const handleSubmit = () => {
        console.log('Formulario enviado');
    }

    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };


    const items = steps.map(item => ({ key: item.title, title: item.title }));


    const contentStyle = {
        // lineHeight: '260px',
        // textAlign: 'center',
        // color: token.colorTextTertiary,
        // backgroundColor: token.colorFillAlter,
        // borderRadius: token.borderRadiusLG,
        // border: `1px dashed ${token.colorBorder}`,
        // marginTop: 16,
    };
    return (
        <>
            <Steps current={current} items={items} />

            <Formik initialValues={initialValues} validationSchema={validationSchema[current] || null} onSubmit={handleSubmit} >
                {({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => (

                    <Form layout="vertical" onFinish={handleSubmit} >
                        <div style={contentStyle}>{steps[current].content}</div>



                        <div style={{ marginTop: 24 }}>
                            {current < steps.length - 1 && (
                                <Button type="primary" onClick={() => next()}>
                                    Next
                                </Button>
                            )}
                            {current === steps.length - 1 && (
                                <Button type="primary" htmlType="submit" loading={false} onClick={() => message.success('Processing complete!')}>
                                    Done
                                </Button>
                            )}
                            {current > 0 && (
                                <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                                    Previous
                                </Button>
                            )}
                        </div>

                    </Form>

                )}



            </Formik>
        </>
    );
}
