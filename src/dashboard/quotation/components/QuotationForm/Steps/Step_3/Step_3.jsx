import { Divider, Flex, Row, Table, Typography, Col } from "antd";
import { useFormikContext } from "formik";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useUITranslation } from "../../../../../../hooks";

const { Title, Text } = Typography;

const numberFormat = value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const Step_3 = () => {

  const { values } = useFormikContext();
  const { t } = useUITranslation();

  const columns_table1 = useMemo(() => ([
    { title: t("dashboard.quotations.newQuotation.steps.step2.itemDetails.description"), dataIndex: 'description', key: 'description', align: 'right' },
    { title: t("dashboard.quotations.newQuotation.steps.step2.itemDetails.productEspecification"), dataIndex: 'product_especification', key: 'product_especification', align: 'right' },
    { title: t("dashboard.quotations.newQuotation.steps.step2.itemDetails.unit"), dataIndex: 'unit', key: 'unit', align: 'right' },
    { title: t("dashboard.quotations.newQuotation.steps.step2.itemDetails.amount"), dataIndex: 'amount', key: 'amount', align: 'right', render: numberFormat },
    { title: t("dashboard.quotations.newQuotation.steps.step2.itemDetails.unitPrice"), dataIndex: 'unit_price', key: 'unit_price', align: 'right', render: numberFormat },
    { title: t("dashboard.quotations.newQuotation.steps.step2.itemDetails.supplyPrice"), dataIndex: 'supply_price', key: 'supply_price', align: 'right', render: numberFormat },
    { title: t("dashboard.quotations.newQuotation.steps.step2.itemDetails.vat"), dataIndex: 'vat', key: 'vat', align: 'right', render: numberFormat },
    { title: t("dashboard.quotations.newQuotation.steps.step2.itemDetails.observations"), dataIndex: 'observations', key: 'observations', align: 'right' },
  ]), [t]);

  const columns_table2 = useMemo(() => ([
    { title: t("dashboard.quotations.newQuotation.steps.step2.totalPricing.priceBeforeTaxes"), dataIndex: 'price_before_taxes', key: 'price_before_taxes', align: 'right', render: numberFormat },
    { title: t("dashboard.quotations.newQuotation.steps.step2.totalPricing.vatTotal"), dataIndex: 'vat_total', key: 'vat_total', align: 'right', render: numberFormat },
    { title: t("dashboard.quotations.newQuotation.steps.step2.totalPricing.totalPriceNumber"), dataIndex: 'total_price_number', key: 'total_price_number', align: 'right', render: numberFormat },
    { title: t("dashboard.quotations.newQuotation.steps.step2.totalPricing.totalPriceLetter"), dataIndex: 'total_price_letter', key: 'total_price_letter', align: 'right' },
  ]), [t]);

  const dataSource = useMemo(() =>
    (values.quotation_item || []).map((item, index) => ({ key: index, ...item })),
    [values.quotation_item]
  );

  const dataSource_table2 = useMemo(() => ([{
    key: '1',
    price_before_taxes: values.price_before_taxes,
    vat_total: values.vat_total,
    total_price_number: values.total_price_number,
    total_price_letter: values.total_price_letter
  }]), [values.price_before_taxes, values.vat_total, values.total_price_number, values.total_price_letter]);

  const { suppliers } = useSelector(state => state.quotation);
  const supplierInfo = suppliers.find(obj => obj.registration_number === values.registration_number)

  return (
    <div style={{ marginTop: '60px', }}>
      <Row style={{ maxWidth: '85%', border: '1px solid #bfbfbf', margin: '0 auto', borderRadius: "10px" }} gutter={[16, 0]}>
        <Flex justify="center" align="center" style={{ width: '100%', padding: '20px', borderBottom: '1px solid #bfbfbf' }}>
          <Title level={2} style={{ display: "flex", alignContent: "center" }}>{t("dashboard.quotations.newQuotation.steps.step3.title")}</Title>
        </Flex>

        <Col lg={24} xxl={10} >
          <Divider orientation="left" size="small" style={{ marginTop: "40px", marginBottom: "20px" }}>{t("dashboard.quotations.newQuotation.steps.step2.generalInformation.title")} </Divider>
          <Title level={5}>{t("dashboard.quotations.newQuotation.steps.step2.generalInformation.date")}: <Text type="secondary">{values.date}</Text></Title>
          <Title level={5}>{t("dashboard.quotations.newQuotation.steps.step2.generalInformation.customer")}: <Text type="secondary">{values.customer}</Text></Title>
          <Title level={5}>{t("dashboard.quotations.newQuotation.steps.step2.generalInformation.workConcept")}: <Text type="secondary">{values.work_concept}</Text></Title>
          <Title level={5}>{t("dashboard.quotations.newQuotation.steps.step2.generalInformation.durationOfWork")}: <Text type="secondary">{values.duration_of_work}</Text></Title>
        </Col>

        <Col lg={24} xxl={14}>
          <Divider orientation="left" size="small" style={{ marginTop: "40px", marginBottom: "20px" }}>{t("dashboard.quotations.newQuotation.steps.step1.title")}</Divider>
          <Title level={5}>{t("dashboard.quotations.newQuotation.steps.step1.registrationNumber")} <Text type="secondary">{supplierInfo.registration_number}</Text></Title>
          <Title level={5}>{t("dashboard.quotations.newQuotation.steps.step1.comercialName")} <Text type="secondary">{supplierInfo.comercial_name}</Text></Title>
          <Title level={5}>{t("dashboard.quotations.newQuotation.steps.step1.legalRepresentative")} <Text type="secondary">{supplierInfo.legal_representative}</Text></Title>
          <Title level={5}>{t("dashboard.quotations.newQuotation.steps.step1.address")} <Text type="secondary">{supplierInfo.address}</Text></Title>
          <Title level={5}>{t("dashboard.quotations.newQuotation.steps.step1.typeOfBusiness")} <Text type="secondary">{supplierInfo.type_of_business}</Text></Title>
          <Title level={5}>{t("dashboard.quotations.newQuotation.steps.step1.category")} <Text type="secondary">{supplierInfo.category}</Text></Title>
          <Title level={5}>{t("dashboard.quotations.newQuotation.steps.step1.telFax")} <Text type="secondary">{supplierInfo.tel_fax}</Text></Title>
          <Title level={5}>{t("dashboard.quotations.newQuotation.steps.step1.website")} <Text type="secondary">{supplierInfo.website}</Text></Title>
        </Col>

        <Col span={24}>
          <Divider orientation="left" size="small" style={{ marginTop: "60px", marginBottom: "20px" }}>{t("dashboard.quotations.newQuotation.steps.step2.itemDetails.title")}</Divider>
          <Table columns={columns_table1} dataSource={dataSource} pagination={false} />
        </Col>

        <Col span={24} style={{ marginBottom: "50px" }}>
          <Divider orientation="left" size="small" style={{ marginTop: "60px", marginBottom: "20px" }}>{t("dashboard.quotations.newQuotation.steps.step2.totalPricing.title")}</Divider>
          <Table columns={columns_table2} dataSource={dataSource_table2} pagination={false} />
        </Col>
      </Row>
    </div >
  )
}
