import { CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons'
import { Button, Card, Space } from 'antd'
import { useSettings, useTheme } from '../../../../hooks';
import { getConnectionStatus } from '../../../../store/settings';

const ConnectionStatusIcon = (status, green, red) => {
    return status ? (
        <CheckCircleFilled style={{ fontSize: '20px', marginLeft: 20, color: green.backgroundColor }} />
    ) : (
        <CloseCircleFilled style={{ fontSize: '20px', marginLeft: 20, color: red.backgroundColor }} />
    );
};

const handleonClick = async (dispatch) => {
    await dispatch(getConnectionStatus())
}



export const APIConnectionCard = () => {

    const { colors: { green, red }, shadows: { boxShadow } } = useTheme();
    const { statusConnection, isLoadingStatusConnection, dispatch } = useSettings();
    
    return (
        <Card title="Probar conexión" variant="outlined" style={{ boxShadow: boxShadow, height: '100%' }}>
            <Space align="center" >
                <Button shape="round" onClick={() => handleonClick(dispatch)} style={{ ...green }} loading={isLoadingStatusConnection}>Probar conexion al API</Button>
                {ConnectionStatusIcon(statusConnection, green, red)}
            </Space>
        </Card>
    )
}
