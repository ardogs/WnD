import { Button, Form, message, Steps } from 'antd';
import { Step_1, Step_2, Step_3 } from './Steps';
import { useState } from 'react';
import { Formik } from 'formik';
import { initialValues, validationSchema } from './NewQuotationForm.data';
import { useTheme } from '../../../../hooks';

const steps = (values, setFieldValue) => {
    return ([
        { title: 'Información del proveedor', content: <Step_1 setFieldValue={setFieldValue} /> },
        { title: 'Detalles de la factura', content: <Step_2 values={values} /> },
        { title: 'Vista preeliminar', content: <Step_3 values={values} /> },
    ])
};

export const NewQuotationForm = () => {

    const handleSubmit = (values, actions) => {
        if (current < 2) {
            next();
            actions.setTouched({});
        } else {
            console.log(values)
            //   const resultAction = await dispatch(enviarFormulario(values));
            //   if (enviarFormulario.fulfilled.match(resultAction)) {
            //     message.success('Formulario enviado con éxito');
            //   } else {
            //     message.error(resultAction.payload || 'Error al enviar');
            //   }

            console.log('Todo bien')
        }
    }

    const [current, setCurrent] = useState(0);

    const next = () => { setCurrent(current + 1); };
    const prev = () => { setCurrent(current - 1); };
    const items = steps().map(item => ({ key: item.title, title: item.title }));

    const { colorBgContainer } = useTheme();


    return (
        <>
            <Steps current={current} items={items} />

            <Formik initialValues={initialValues} validationSchema={validationSchema[current] || null} onSubmit={handleSubmit} validateOnChange={false} validateOnBlur={true}>
                {({ handleSubmit, values, setFieldValue }) => (

                    <Form layout="vertical" onFinish={handleSubmit} >
                        <div>{steps(values, setFieldValue)[current].content}</div>

                        <div
                            style={{
                                position: 'sticky', bottom: 0, left: 0, width: '100%', background: colorBgContainer, padding: '10px 0', display: 'flex',
                                justifyContent: 'center', gap: '8px', zIndex: 10, marginTop: 'auto'
                            }}
                        >
                            {current > 0 && (<Button onClick={() => prev()} size='large'> Previous </Button>)}
                            {current < steps.length  && (<Button type="primary" htmlType='submit' size='large'> Next </Button>)}
                            {current === steps.length  && (<Button type="primary" htmlType="submit" onClick={() => message.success('Processing complete!')} size='large'> Done </Button>)}
                        </div>

                    </Form>

                )}
            </Formik>
        </>
    );
}
