import { useEffect } from "react";
import { BrowserRouter } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import "./utils/translation/i18n";
import { ConfigProvider, theme } from "antd";
import { KticketRouter } from "./router/KticketRouter";
import { lightTheme, darkTheme } from './features/theme';
import { setDarkMode } from "./store/theme";

export const KticketApp = () => {

  const darkMode = useSelector((state) => state.theme.darkMode);
  const currentTheme = darkMode ? darkTheme : lightTheme;
  const dispatch = useDispatch();

  useEffect(() => {

    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) 
      dispatch(setDarkMode(savedMode === 'true'));

    document.body.style.backgroundColor = currentTheme.token.colorBgBase;

  }, [currentTheme, dispatch]);

  return (
    <>
      <BrowserRouter>
        <ConfigProvider theme={{ ...(!darkMode ? lightTheme : darkTheme), algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm }}>
          <KticketRouter />
        </ConfigProvider>
      </BrowserRouter>
    </>
  )
}



