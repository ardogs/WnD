import { Col, Row, } from "antd";
import { DocumentSelector } from "./DocumentSelector";
import { SupplierFormFields } from "./SupplierFormFields";
import { useSupplierForm } from "../../../../hooks/useSupplierForm";


export const Step_1 = ({ setFieldValue }) => {

  const { options, documentType, handleSupplierChange, isLoading  } = useSupplierForm( setFieldValue )

  return (
    <Row style={{ marginTop: '25px' }}>
      <Col xs={24} xxl={14} style={{ Height: '100vh' }}>
        <DocumentSelector options={options} selected={documentType} onChange={handleSupplierChange} isLoading={isLoading} />
      </Col>

      <Col xs={24} xxl={10} >
        <SupplierFormFields />
      </Col>
    </Row>
  );
}
