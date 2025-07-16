
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox } from 'antd';
import { setIsEditable } from '../../../../../../store/quotation';

export const EditToggle = () => {

    const dispatch = useDispatch();
    const {isEditable} = useSelector(state => state.quotation.newQuotation.step1);

    return (
        <Checkbox  checked={isEditable} onChange={(e) => dispatch(setIsEditable(e.target.checked))}>
            Habilitar edición
        </Checkbox>
    )
}
