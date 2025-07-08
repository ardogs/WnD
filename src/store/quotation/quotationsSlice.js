import { createSlice } from '@reduxjs/toolkit';

export const quotationSlice = createSlice({
    name: 'quotation',
    initialState: {
        suppliers: [],
        currentMode: 'create',
        newQuotation: {
            documentType: 0,
            step1: {
                isEditable: false,
            },
            step2: {
                calculateVatperItem: false,
                calculateSupplyPrice: true,
                calculatePriceBeforeTaxes: true,
                calculateTotalVat: true,
                calculateTotalPrice: true,
            }
        },

        isLoading: false,

    },
    reducers: {
        setSuppliers: (state, action) => {
            state.suppliers = action.payload
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setDocumentType: (state, action) => {
            state.newQuotation.documentType = action.payload;
        },
        setIsEditable: (state, action) => {
            state.newQuotation.step1.isEditable = action.payload;
        },

        setAutomaticCalculation: (state, action) => {
            // console.log(action)
            const { key, value } = action.payload;
            state.newQuotation.step2[key] = value;
        }
    }
});


// Action creators are generated for each case reducer function
export const { setSuppliers, setLoading, setDocumentType, setIsEditable, setAutomaticCalculation } = quotationSlice.actions;