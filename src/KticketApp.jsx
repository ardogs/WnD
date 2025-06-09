import { BrowserRouter } from "react-router";
import { KticketRouter } from "./router/KticketRouter";
import { ConfigProvider, theme } from "antd";
import { App as AntdApp } from 'antd';
import { lightTheme, darkTheme } from './features/theme';
import "./services/translation/i18n";
import { useSettings } from "./hooks";
import { AppInitializer } from "./AppInitializer";


export const KticketApp = () => {

  const { darkmode, isLoadingApp } = useSettings();
  
  return (
    <AntdApp>
      <BrowserRouter>
        <ConfigProvider theme={{ ...(!darkmode ? lightTheme : darkTheme), algorithm: darkmode ? theme.darkAlgorithm : theme.defaultAlgorithm }}>
          <AppInitializer />
          {isLoadingApp ? <h1>Cargando...</h1> : <KticketRouter />}
        </ConfigProvider>
      </BrowserRouter>
    </AntdApp>
  )
}
  //   // const savedMode = localStorage.getItem('darkMode');
  //   // if (savedMode !== null) 
  //   // dispatch(setDarkMode( darkMode ));



