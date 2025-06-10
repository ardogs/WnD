

import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router';
import { useUITranslation } from '../../../hooks';

const breadcrumbNameMap = (t) => ({
    '/': t("ui.navigation.home.title"),
    '/quotation': t("ui.navigation.quotations.title"),
    '/quotation/new': t("ui.navigation.quotations.new"),
    '/quotation/edit': t("ui.navigation.quotations.edit"),
    '/quotation/delete': t("ui.navigation.quotations.delete"),
    '/invoices': t("ui.navigation.invoices.title"),
    '/invoices/new': t("ui.navigation.invoices.new"),
    '/invoices/edit': t("ui.navigation.invoices.edit"),
    '/settings': t("ui.navigation.settings.title")

});

export const BreadcrumbUI = () => {

    const { t } = useUITranslation();
    const location = useLocation();

    const pathSnippets = location.pathname.split('/').filter(i => i);

    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return {
            key: url,
            title: (
                <Link to={url}>
                    {breadcrumbNameMap(t)[url] || url.split('/').pop()}
                </Link>
            ),
        };
    });

    const breadcrumbItems = [
        {
            key: 'home',
            title: <Link to="/">{t("ui.navigation.home.title")}</Link>,
        },
        ...extraBreadcrumbItems,
    ];

    return <Breadcrumb separator=">" style={{ margin: '16px 0' }} items={breadcrumbItems} />;
};
