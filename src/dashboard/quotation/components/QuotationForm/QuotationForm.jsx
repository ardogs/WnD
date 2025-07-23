import { useState } from 'react';
import { Formik } from 'formik';
import { initialValues, validationSchema } from './QuotationForm.data';
import { Button, Form, message, Steps } from 'antd';
import { Step_1, Step_2, Step_3, Step_4 } from './Steps';
import { useTheme, useUITranslation } from '../../../../hooks';

const steps = (t) => {
    return ([
        { title: t("dashboard.quotations.newQuotation.steps.step1.title"), content: <Step_1 /> },
        { title: t("dashboard.quotations.newQuotation.steps.step2.title"), content: <Step_2  /> },
        { title: t("dashboard.quotations.newQuotation.steps.step3.title"), content: <Step_3  /> },
        { title: t("dashboard.quotations.newQuotation.steps.step4.title"), content: <Step_4 /> },
    ])
};

export const NewQuotationForm = () => {

    const handleSubmit = (values, actions) => {
        if (current < 4) {
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

    const { t } = useUITranslation();

    const [current, setCurrent] = useState(0);
    const next = () => { setCurrent(current + 1); };
    const prev = () => { setCurrent(current - 1); };
    const items = steps(t).map(item => ({ key: item.title, title: item.title }));
    const { colorBgContainer } = useTheme();
    
    return (
        <>
            <Steps current={current} items={items} />

            <Formik initialValues={initialValues} validationSchema={validationSchema(t)[current] || null} onSubmit={handleSubmit} validateOnChange={false} validateOnBlur={true}>
                {({ handleSubmit }) => (

                    <Form layout="vertical" onFinish={handleSubmit} >
                        <div>{steps(t)[current].content}</div>
                        <div
                            style={{ position: 'sticky', bottom: 0, left: 0, width: '100%', background: colorBgContainer, padding: '10px 0', display: 'flex', justifyContent: 'center', gap: '8px', zIndex: 10, marginTop: 'auto' }} >
                            {(current > 0 && current < items.length -1)   && (<Button onClick={() => prev()} size='large'> {t("dashboard.quotations.newQuotation.navigation.previous")} </Button>)}
                            {current < items.length - 1 && (<Button type="primary" htmlType="submit" size='large'> {t("dashboard.quotations.newQuotation.navigation.next")} </Button>)}
                            {current === items.length - 1 && (<Button type="primary" htmlType="submit" onClick={() => message.success('Processing complete!')} size='large'>{t("dashboard.quotations.newQuotation.navigation.gotoHome")}</Button>)}
                        </div>
                    </Form>

                )}
            </Formik>
        </>
    );
}
