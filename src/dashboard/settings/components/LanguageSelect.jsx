import { updateLanguage } from '../../../store/settings';
import { App, Select } from 'antd';
import { useSettings } from '../../../hooks';

const options = [
    { value: 'KR', label: '한국어' },
    { value: 'ES', label: "Español" },
    { value: 'EN', label: "English" },
];

export const LanguageSelect = () => {

    const { dispatch, language, isLoadingLanguage } = useSettings();
    const { message } = App.useApp();

    const handleChange = async (value) => {
        const result = await dispatch(updateLanguage(value));
        (result?.ok) ? message.success(result.message) : message.error(result.message);
    };

    return <Select loading={isLoadingLanguage} disabled={isLoadingLanguage} value={language} defaultValue={language} options={options} onChange={handleChange} />
}
