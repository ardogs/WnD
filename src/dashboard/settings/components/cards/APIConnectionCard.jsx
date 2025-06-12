import { CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons'
import { Button, Card, Space, Tooltip } from 'antd'
import { useSettings, useTheme, useUITranslation } from '../../../../hooks';
import { getConnectionStatus } from '../../../../store/settings';

const ConnectionStatusIcon = (status, green, red) => {
    return status ? (
        <CheckCircleFilled style={{ fontSize: '22px', marginLeft: 5, color: green.backgroundColor }} />
    ) : (
        <CloseCircleFilled style={{ fontSize: '22px', marginLeft: 5, color: red.backgroundColor }} />
    );
};

const setErrorMessage = ( status, t ) => {
    return ( status ) ?  t("dashboard.settings.APIConnection.connectionCheck.message.success") : t("dashboard.settings.APIConnection.connectionCheck.message.error")
}

const handleonClick = async (dispatch) => {
    await dispatch(getConnectionStatus())
}

export const APIConnectionCard = () => {

    const { colors: { green, red }, shadows: { boxShadow } } = useTheme();
    const { statusConnection, isLoadingStatusConnection, dispatch } = useSettings();
    const { t } = useUITranslation();

    return (
        <Card title={t("dashboard.settings.APIConnection.connectionCheck.title")} variant="outlined" style={{ boxShadow: boxShadow, height: '100%' }}>
            <Space align="center" >
                <Button shape="round" onClick={() => handleonClick(dispatch)} style={{ ...green }} loading={isLoadingStatusConnection}>{t("dashboard.settings.APIConnection.connectionCheck.button")}</Button>
                <Tooltip title={ () => setErrorMessage( statusConnection, t ) } arrow={false} placement='right'>
                    {ConnectionStatusIcon(statusConnection, green, red)}
                </Tooltip>
            </Space>
        </Card>
    )
}
