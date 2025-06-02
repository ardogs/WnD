import { Flex, Layout, Menu, theme } from 'antd';
import { FileExcelFilled, HomeFilled, ProjectFilled, SettingFilled } from '@ant-design/icons';
import { Link, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';

const { Sider } = Layout;
const defaultOpenKeys = ['home', 'quotations', 'invoices', 'settings'];

const getSelectedKey = (pathname) => {
    if (pathname === '/') return 'home';
    if (pathname.startsWith('/quotation/new')) return 'quotationNew';
    if (pathname.startsWith('/quotation/edit')) return 'quotationEdit';
    if (pathname.startsWith('/quotation/delete')) return 'quotationDelete';
    if (pathname.startsWith('/invoices/new')) return 'invoiceNew';
    if (pathname.startsWith('/invoices/edit')) return 'invoiceEdit';
    if (pathname.startsWith('/invoices/delete')) return 'invoiceDelete';
    if (pathname.startsWith('/settings')) return 'settings';
    return ''; // fallback
};

const optionsArray = (t, color = {}) => {

    return [
        { key: 'home', icon: <HomeFilled style={{ color: color.blue.backgroundColor }} />, label: <Link to="/">{t("ui.navigation.home.title")}</Link> },
        {
            key: 'quotations', icon: <ProjectFilled style={{ color: color.green.backgroundColor }} />, label: t("ui.navigation.quotations.title"),
            children: [
                { key: 'quotationNew', label: <Link to="/quotation/new">{t("ui.navigation.quotations.new")}</Link> },
                { key: 'quotationEdit', label: <Link to="/quotation/edit">{t("ui.navigation.quotations.edit")}</Link> },
                { key: 'quotationDelete', label: <Link to="/quotation/delete">{t("ui.navigation.quotations.delete")}</Link> }
            ]
        },
        {
            key: 'invoices', icon: <FileExcelFilled style={{ color: color.orange.backgroundColor }} />, label: t("ui.navigation.invoices.title"),
            children: [
                { key: 'invoiceNew', label: <Link to="/invoices/new">{t("ui.navigation.invoices.new")}</Link> },
                { key: 'invoiceEdit', label: <Link to="/invoices/edit">{t("ui.navigation.invoices.edit")}</Link> },
                { key: 'invoiceDelete', label: <Link to="/invoices/delete">{t("ui.navigation.invoices.delete")}</Link> },
            ]
        },
        { key: 'settings', icon: <SettingFilled style={{ color: color.cyan.backgroundColor }} />, label: <Link to="/settings">{t("ui.navigation.settings.title")}</Link> }
    ]
}

export const LeftMenu = () => {

    const { t } = useTranslation();
    const { token: { customColor, colorBgContainer, borderRadiusLG } } = theme.useToken();
    const location = useLocation();
    console.log(location.pathname)

    return (
        <Sider style={{ background: colorBgContainer, borderRadius: borderRadiusLG, zIndex: 1 }} width={300} breakpoint="lg"
            collapsedWidth="0" className='no-select'

        >
            <Flex align="center" justify='center' >
                <div className="demo-logo-vertical" />
                <Menu mode="inline" defaultSelectedKeys={['home']} selectedKeys={[getSelectedKey(location.pathname)]} defaultOpenKeys={defaultOpenKeys} style={{ borderInlineEnd: 'none', }} items={optionsArray(t, customColor)} />
            </Flex>
        </Sider>
    )
}
