import { Card, Col, Row } from "antd"
import { APIForm } from "../APIForm"
import { useTheme, useUITranslation } from "../../../../hooks";


export const APIIpCard = () => {

  const { t } = useUITranslation();
  const { shadows: { boxShadow } } = useTheme();
  return (
    <Card title="Base URL" variant="outlined" style={{ boxShadow: boxShadow, height: '100%' }}>
      <Row>
        <Col span={24}>
          <APIForm />
        </Col>
      </Row>
    </Card>
  )
}
