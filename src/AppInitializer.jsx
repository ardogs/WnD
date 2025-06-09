import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { App as AntdApp } from "antd";
import { fetchAppSettings } from "./store/settings";
import { lightTheme, darkTheme } from './features/theme';

export const AppInitializer = () => {
    const dispatch = useDispatch();
    const { message } = AntdApp.useApp();

    const darkMode = useSelector((state) => state.settings.settings.darkmode);
    const currentTheme = darkMode ? darkTheme : lightTheme;

    useEffect(() => {
        const init = async () => {
            const result = await dispatch(fetchAppSettings());
            // const result = {ok: true, message: "Todo bien"  }
            
            result?.ok
                ? message.success(result.message)
                : message.error(result.message);
        };

        

        // ✅ Aplicar fondo basado en el tema actual
        document.body.style.backgroundColor = currentTheme.token.colorBgBase;
        init();

    }, [dispatch]);

    return null;
};