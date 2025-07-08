import { DatePicker, Form, Input, InputNumber } from "antd";
import { FastField, Field, useFormikContext } from "formik";
import dayjs from "dayjs";
import React from "react";

export const CustomField = ({ name, label, disabled }) => (
    <Field name={name}>
        {({ field, meta }) => (
            <Form.Item label={label} help={meta.touched && meta.error} validateStatus={meta.touched && meta.error ? 'error' : ''}>
                <Input {...field} disabled={disabled} />
            </Form.Item>
        )}
    </Field>
);

// eslint-disable-next-line react/display-name
export const CustomFastField = React.memo(({ name, label, disabled }) => (
    <FastField name={name}>
        {({ field, meta }) => (
            <Form.Item label={label} help={meta.touched && meta.error} validateStatus={meta.touched && meta.error ? 'error' : ''}>
                <Input {...field} disabled={disabled} />
            </Form.Item>
        )}
    </FastField>
));

export const CustomDatePickerField = ({ name, label }) => (
    <Field name={name}>
        {({ field, meta }) => (
            <Form.Item label={label} help={meta.touched && meta.error} validateStatus={meta.touched && meta.error ? 'error' : ''} >
                <DatePicker style={{ width: "100%" }}  {...field} value={dayjs(field.value)} />
            </Form.Item>
        )}
    </Field>
);

export const CustomInputNumberField = ({ name, label, disabled }) => {

    const { setFieldValue } = useFormikContext();

    return (<Field name={name}>
        {({ field, meta }) => (
            <Form.Item label={label} help={meta.touched && meta.error} validateStatus={meta.touched && meta.error ? 'error' : ''}>
                <InputNumber
                    defaultValue={1}
                    style={{ width: '100%' }}
                    name={field.name}
                    value={field.value}
                    disabled={disabled}
                    formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value?.replace(/,/g, '')}
                    onBlur={() => { if (field.value === null || field.value === undefined || field.value === '') setFieldValue(name, 1) }}
                    onChange={value => setFieldValue(name, value)}
                    min={1}
                />
            </Form.Item>
        )}
    </Field>)
};


