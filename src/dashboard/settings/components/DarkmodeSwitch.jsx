import { updateDarkMode } from '../../../store/settings'
import { App, Switch} from 'antd';
import { SunFilled, MoonFilled } from '@ant-design/icons';
import { useSettings, useUITranslation } from '../../../hooks';

export const DarkmodeSwitch = () => {

    const { dispatch, darkmode, isLoadingDarkmode } = useSettings();
    const { t } = useUITranslation();
    const { message } = App.useApp();

    const onToggle = async (enabled) => {
        const result = await dispatch(updateDarkMode(enabled));
        (result?.ok) ? message.success(t("apiMessages.settings.updateSuccess")) : message.error(`${t("apiMessages.settings.updateError")} ${result.error}`);
    };

    return <Switch checked={darkmode} checkedChildren={<MoonFilled />} unCheckedChildren={<SunFilled />} loading={isLoadingDarkmode} onChange={(checked) => onToggle(checked)} />
}
