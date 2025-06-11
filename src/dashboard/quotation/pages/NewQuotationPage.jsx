import { Button } from "antd"
import { useDispatch } from "react-redux"
import { fetchAllSuppliers } from "../../../store/quotation";

export const NewQuotationPage = () => {
  const dispatch = useDispatch();

  const handleClick = async() => {
    const result =  await dispatch(fetchAllSuppliers())
  }
  return (
    <>
      <h1>Nueva cotizacion</h1>
      <Button onClick={handleClick}>Get suppliers</Button>
    </>




  )
}
