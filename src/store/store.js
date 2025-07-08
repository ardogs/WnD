import { configureStore } from '@reduxjs/toolkit';
import { settingsSlice } from './settings';
import { quotationSlice } from './quotation';

export const store = configureStore({
    reducer: {
        settings: settingsSlice.reducer,
        quotation: quotationSlice.reducer
    },
});