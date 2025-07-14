import { Layout, Image, Typography, Flex, Menu } from "antd";
import logo from '../../../assets/logo_2.webp';
import { DarkmodeSwitch } from "../../../dashboard/settings/components";
import { BorderOutlined, CloseOutlined, FileExcelFilled, HomeFilled, MinusOutlined, ProjectFilled, SettingFilled } from "@ant-design/icons";
import { Link, useLocation } from "react-router";
import { useTheme, useUITranslation } from "../../../hooks";
const { Title } = Typography

const { Header } = Layout;

const optionsArray = (t, color) => {

    return [
        { key: 'home', icon: <HomeFilled style={{ color: color.blue.backgroundColor }} />, label: <Link to="/">{t("ui.navigation.home.title")}</Link> },
        { key: 'quotations', icon: <ProjectFilled style={{ color: color.green.backgroundColor }} />, label: <Link to="/quotation">{t("ui.navigation.quotations.title")}</Link> },
        { key: 'invoices', icon: <FileExcelFilled style={{ color: color.orange.backgroundColor }} />, label: <Link to="/invoices">{t("ui.navigation.invoices.title")}</Link> },
        { key: 'settings', icon: <SettingFilled style={{ color: color.cyan.backgroundColor }} />, label: <Link to="/settings">{t("ui.navigation.settings.title")}</Link> }
    ]
}

const getSelectedKey = (pathname) => {
    if (pathname === '/') return 'home';
    if (pathname.startsWith('/quotation')) return 'quotations';
    if (pathname.startsWith('/invoices')) return 'invoices';
    if (pathname.startsWith('/settings')) return 'settings';
    return '';
};

export const NavBar = () => {

    const { t } = useUITranslation();
    const { colors } = useTheme();
    const location = useLocation();

    const handleMinimize = () => window.electronAPI.minimize();
    const handleMaximize = () => window.electronAPI.maximize();
    const handleClose = () => window.electronAPI.close();

    return (
        <Header style={{ display: 'flex', alignItems: 'center', padding: "0px 20px 00px 50px" }} >
            {/* Izquierda: Logo + título */}
            <Flex gap="small" className="no-select drag-region" style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }} >
                <Image width={48} src={logo} preview={false} />
                <Title level={5} style={{ color: 'whitesmoke', margin: 0 }}>W&Ds</Title>
            </Flex>

            {/* Centro: Menú */}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }} className="no-drag-region">
                <Menu mode="horizontal" defaultSelectedKeys={['home']} selectedKeys={[getSelectedKey(location.pathname)]} items={optionsArray(t, colors)} style={{ width: '100%', justifyContent: 'center', borderBottom: 'none' }} />
            </div>

            {/* Derecha: DarkmodeSwitch */}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }} className="drag-region">

                <div id="titlebar" className="no-drag-region" style={{ gap: 30 }}>
                    <DarkmodeSwitch />
                    <div className="window-controls">
                        <button id="minimize" onClick={handleMinimize}><MinusOutlined /></button>
                        <button id="maximize" onClick={handleMaximize}><BorderOutlined /></button>
                        <button id="close" onClick={handleClose}><CloseOutlined /></button>
                    </div>
                </div>
            </div>
        </Header>
    );
}
