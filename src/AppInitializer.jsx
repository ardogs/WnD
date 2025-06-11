import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { App as AntdApp } from "antd";
import { fetchAppSettings } from "./store/settings";
import { lightTheme, darkTheme } from './features/theme';
import { useUITranslation } from "./hooks";

export const AppInitializer = () => {
    const dispatch = useDispatch();
    const { message } = AntdApp.useApp();

    const darkMode = useSelector((state) => state.settings.settings.darkmode);
    const currentTheme = darkMode ? darkTheme : lightTheme;
    const { t } = useUITranslation();

    useEffect(() => {
        const init = async () => {
            const result = await dispatch(fetchAppSettings());
            if (!result?.ok) message.error(`${t("apiMessages.settings.getInitialConfigurationError")} ${result?.error}`);
        };


        document.body.style.backgroundColor = currentTheme.token.colorBgBase;
        init();

    }, [dispatch]);

    return null;
};