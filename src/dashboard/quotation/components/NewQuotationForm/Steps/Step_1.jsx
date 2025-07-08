
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Select, Col, Row, Flex, Image, Checkbox } from "antd";
import { fetchAllSuppliers, setDocumentType, setIsEditable } from "../../../../../store/quotation";
import { CustomField } from "../../CustomInputs";


export const Step_1 = ({ setFieldValue }) => {

  const dispatch = useDispatch();
  const { suppliers, isLoading, newQuotation } = useSelector(state => state.quotation);
  const { documentType } = newQuotation;
  const { isEditable  } = newQuotation.step1
  const [img, setImg] = useState(`Doc_${documentType}`);

  useEffect(() => {
    if (!suppliers || suppliers.length === 0)
      dispatch(fetchAllSuppliers()); // ① Hacer la llamada una vez al montar
  }, [dispatch]);

  const handleSupplierChange = (index = 0) => {
    setImg(`Doc_${index}`);
    dispatch(setDocumentType(index));

    const selected = suppliers[index];
    if (!selected) return;
    setFieldValue("registration_number", selected.registration_number);
    setFieldValue("comercial_name", selected.comercial_name);
    setFieldValue("legal_representative", selected.legal_representative);
    setFieldValue("address", selected.address);
    setFieldValue("type_of_business", selected.type_of_business);
    setFieldValue("category", selected.category);
    setFieldValue("tel_fax", selected.tel_fax);
    setFieldValue("website", selected.website);
  };

  const options = suppliers.map((item, index) => ({
    value: index,
    label: item.registration_number
  }));


  return (
    <Row style={{ marginTop: '25px' }}>
      {/* {console.log()} */}
      <Col xs={24} xxl={14} style={{ Height: '100vh' }}>
        <Flex justify="center" align="center" style={{ height: '100%', width: '100%', gap: 25 }} vertical>
          <Select defaultValue={documentType} onChange={(index) => handleSupplierChange(index)} placeholder="Selección de documento" options={options} loading={isLoading} />
          <Checkbox checked={isEditable} onChange={(e) => dispatch(setIsEditable(e.target.checked))}>
            Habilitar edición
          </Checkbox>
          <Image width={"35%"} src={`/src/assets/${img}.png`} />
        </Flex>
      </Col>

      <Col xs={24} xxl={10} >
        <Row gutter={[16, 0]}>

          <Col xs={24} xxl={24}>
            <CustomField name="registration_number" label="Número de registro" disabled={!isEditable} />
          </Col>

          <Col xs={24} xxl={12}>
            <CustomField name="comercial_name" label="Nombre comercial" disabled={!isEditable} />
          </Col>

          <Col xs={24} xxl={12}>
            <CustomField name="legal_representative" label="Representante legal" disabled={!isEditable} />
          </Col>

          <Col xs={24} xxl={24}>
            <CustomField name="address" label="Dirección" disabled={!isEditable} />
          </Col>

          <Col xs={24} xxl={12}>
            <CustomField name="type_of_business" label="Rubro" disabled={!isEditable} />
          </Col>

          <Col xs={24} xxl={12}>
            <CustomField name="category" label="Categoria" disabled={!isEditable} />
          </Col>

          <Col xs={24} xxl={24}>
            <CustomField name="tel_fax" label="Telefono/fax " disabled={!isEditable} />
          </Col>

          <Col xs={24} xxl={24}>
            <CustomField name="website" label="Sitio Web " disabled={!isEditable} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
