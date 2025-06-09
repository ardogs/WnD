
import { App, Button, Form, Input, Select, theme } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { updateAPIURL } from '../../../store/settings';
import { useEffect } from 'react';
// const { Option } = Select;

// const selectBefore = (
//     <Select defaultValue="https://">
//         <Option value="https://">https://</Option>
//         <Option value="http://">http://</Option>
//     </Select>
// );

export const APIForm = () => {

    const dispatch = useDispatch();
    const apiURL = useSelector((state) => state.settings.settings.apiURL);
    const loading = useSelector((state) => state.settings.isLoading.apiURL);
    const { message } = App.useApp();

    const onFinish = async (values) => {
        const result = await dispatch(updateAPIURL(values));
        (result?.ok) ? message.success(result.message) : message.error(result.message);
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    const {
        token: { customColor: { green } },
    } = theme.useToken();

    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue({
            apiURL
        });
    }, [apiURL, form]);

    return (
        <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" layout="inline" form={form}>
            <Form.Item label="API url" name="apiURL" rules={[{ required: true, message: 'Please set an IP Address' }]}>
                <Input placeholder='API URL' value={apiURL} />
            </Form.Item>

            <Form.Item label={null}>
                <Button htmlType="submit" style={{ ...green }} loading={loading}> Update </Button>
            </Form.Item>
        </Form>
    )
}


