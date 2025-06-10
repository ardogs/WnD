import { BrowserRouter } from "react-router";
import { KticketRouter } from "./router/KticketRouter";
import { ConfigProvider, theme } from "antd";
import { App as AntdApp } from 'antd';
import { lightTheme, darkTheme } from './features/theme';
import "./services/translation/i18n";
import { useSettings } from "./hooks";
import { AppInitializer } from "./AppInitializer";
import { motion } from "framer-motion";
import { LoadingPage } from "./context/pages";




const pageToShow = (status) => {
  return (
    (status) ?
      <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} >
        <LoadingPage />
      </motion.div> :
      <motion.div key="router" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} >
        <KticketRouter />
      </motion.div>
  )
}

export const KticketApp = () => {

  const { darkmode, isLoadingApp } = useSettings();
  const uiTheme = !darkmode ? lightTheme : darkTheme;
  const algorithm = darkmode ? theme.darkAlgorithm : theme.defaultAlgorithm

  return (
    <AntdApp>
      <BrowserRouter>
        <ConfigProvider theme={{ ...uiTheme, algorithm }}>
          <AppInitializer />
          {pageToShow(isLoadingApp)}
        </ConfigProvider>
      </BrowserRouter>
    </AntdApp>
  )
}



