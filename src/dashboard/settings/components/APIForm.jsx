
import { App, Button, Form, Input,} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { updateAPIURL } from '../../../store/settings';
import { useEffect } from 'react';
import { useTheme, useUITranslation } from '../../../hooks';
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

    const { t } = useUITranslation();

    const onFinish = async (values) => {
        const result = await dispatch(updateAPIURL(values));
        (result?.ok) ? message.success(t("apiMessages.settings.updateSuccess")) : message.error(`${t("apiMessages.settings.updateError")} ${result.error}`);
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    const { colors } = useTheme();
    const { green } = colors;


    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue({
            apiURL
        });
    }, [apiURL, form]);

    return (
        <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" layout="inline" form={form}>
            <Form.Item label={t("dashboard.settings.APIConnection.baseurl.label")} name="apiURL" rules={[{ required: true, message: 'Please set an IP Address' }]}>
                <Input placeholder={t("dashboard.settings.APIConnection.baseurl.placeholder")} value={apiURL} />
            </Form.Item>

            <Form.Item label={null}>
                <Button htmlType="submit" style={{ ...green }} loading={loading}>{t("dashboard.settings.APIConnection.baseurl.button")}</Button>
            </Form.Item>
        </Form>
    )
}


