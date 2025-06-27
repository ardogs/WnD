// import React, { useState } from 'react';
import { Steps, Button, Form, Input, message } from 'antd';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
// import { enviarFormulario } from '../features/formulario/formularioThunks';

const { Step } = Steps;

const validaciones = [
    Yup.object({
        nombre: Yup.string().required('Nombre requerido'),
        apellido: Yup.string().required('Apellido requerido'),
        email: Yup.string().email('Correo inválido').required('Correo requerido'),
    }),
    Yup.object({
        pais: Yup.string().required('País requerido'),
        ciudad: Yup.string().required('Ciudad requerida'),
        direccion: Yup.string().required('Dirección requerida'),
    }),
];

const pasos = [
    { title: 'Información del proveedor' },
    { title: 'Información de la factura' },
    { title: 'Vista preeliminar' },
];

const Formulario = () => {
    //   const dispatch = useDispatch();
    const [step, setStep] = useState(0);
    //   const { loading } = useSelector((state) => state.formulario);

    const initialValues = {
        nombre: '',
        apellido: '',
        email: '',
        pais: '',
        ciudad: '',
        direccion: '',
    };

    const next = () => setStep((s) => s + 1);
    const prev = () => setStep((s) => s - 1);

    const handleSubmit = async (values, actions) => {
        if (step < 2) {
            next();
            actions.setTouched({});
        } else {
            //   const resultAction = await dispatch(enviarFormulario(values));
            //   if (enviarFormulario.fulfilled.match(resultAction)) {
            //     message.success('Formulario enviado con éxito');
            //   } else {
            //     message.error(resultAction.payload || 'Error al enviar');
            //   }

            console.log('Todo bien')
        }
    };

    return (
        <div style={{ margin: '0 auto', marginTop: 40 }}>
            <Steps current={step} style={{ marginBottom: 30 }}>
                {pasos.map((p) => (
                    <Step key={p.title} title={p.title} />
                ))}
            </Steps>

            <Formik initialValues={initialValues} validationSchema={validaciones[step] || null} onSubmit={handleSubmit} >
                {({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => (
                    <Form layout="vertical" onFinish={handleSubmit} >
                        {
                            step === 0 && (
                                <>
                                    <Form.Item
                                        label="Nombre"
                                        validateStatus={touched.nombre && errors.nombre ? 'error' : ''}
                                        help={touched.nombre && errors.nombre}
                                    >
                                        <Input name="nombre" value={values.nombre} onChange={handleChange} onBlur={handleBlur} />
                                    </Form.Item>

                                    <Form.Item
                                        label="Apellido"
                                        validateStatus={touched.apellido && errors.apellido ? 'error' : ''}
                                        help={touched.apellido && errors.apellido}
                                    >
                                        <Input name="apellido" value={values.apellido} onChange={handleChange} onBlur={handleBlur} />
                                    </Form.Item>

                                    <Form.Item
                                        label="Email"
                                        validateStatus={touched.email && errors.email ? 'error' : ''}
                                        help={touched.email && errors.email}
                                    >
                                        <Input name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                    </Form.Item>
                                </>
                            )
                        }

                        {
                            step === 1 && (
                                <>
                                    <Form.Item
                                        label="País"
                                        validateStatus={touched.pais && errors.pais ? 'error' : ''}
                                        help={touched.pais && errors.pais}
                                    >
                                        <Input name="pais" value={values.pais} onChange={handleChange} onBlur={handleBlur} />
                                    </Form.Item>

                                    <Form.Item
                                        label="Ciudad"
                                        validateStatus={touched.ciudad && errors.ciudad ? 'error' : ''}
                                        help={touched.ciudad && errors.ciudad}
                                    >
                                        <Input name="ciudad" value={values.ciudad} onChange={handleChange} onBlur={handleBlur} />
                                    </Form.Item>

                                    <Form.Item
                                        label="Dirección"
                                        validateStatus={touched.direccion && errors.direccion ? 'error' : ''}
                                        help={touched.direccion && errors.direccion}
                                    >
                                        <Input name="direccion" value={values.direccion} onChange={handleChange} onBlur={handleBlur} />
                                    </Form.Item>
                                </>
                            )
                        }

                        {
                            step === 2 && (
                                <div style={{ lineHeight: 2 }}>
                                    <strong>Nombre:</strong> {values.nombre}<br />
                                    <strong>Apellido:</strong> {values.apellido}<br />
                                    <strong>Email:</strong> {values.email}<br />
                                    <strong>País:</strong> {values.pais}<br />
                                    <strong>Ciudad:</strong> {values.ciudad}<br />
                                    <strong>Dirección:</strong> {values.direccion}
                                </div>
                            )
                        }

                        <div style={{ marginTop: 24, display: 'flex', justifyContent: 'space-between' }}>
                            {step > 0 && <Button onClick={prev}>Anterior</Button>}
                            <Button type="primary" htmlType="submit" loading={false}>
                                {step === 2 ? 'Enviar' : 'Siguiente'}
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Formulario;
