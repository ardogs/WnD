import { createSlice } from '@reduxjs/toolkit';

export const quotationSlice = createSlice({
    name: 'quotation',
    initialState: {
        suppliers: null
    },
    reducers: {
        setSuppliers: (state, action) => {
            state.suppliers =  action.payload
            console.log(state.suppliers)
        },
    }
});


// Action creators are generated for each case reducer function
export const { setSuppliers } = quotationSlice.actions;