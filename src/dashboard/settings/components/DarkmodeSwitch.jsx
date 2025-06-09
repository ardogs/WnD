import { updateDarkMode } from '../../../store/settings'
import { App, Switch, } from 'antd';
import { SunFilled, MoonFilled } from '@ant-design/icons';
import { useSettings } from '../../../hooks';

export const DarkmodeSwitch = () => {

    const { dispatch, darkmode, isLoadingDarkmode } = useSettings();
    const { message } = App.useApp();

    const onToggle = async (enabled) => {
        const result = await dispatch(updateDarkMode(enabled));
        (result?.ok) ? (result?.enabled && message.success(result.message)) : message.error(result.message);
    };

    return <Switch checked={darkmode} checkedChildren={<MoonFilled />} unCheckedChildren={<SunFilled />} loading={isLoadingDarkmode} onChange={(checked) => onToggle(checked)} />
}
