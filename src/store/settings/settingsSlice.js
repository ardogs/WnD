import { createSlice } from '@reduxjs/toolkit';
import i18n from '../../services/translation/i18n';

const initialState = {
    settings: {
        darkmode: true,
        language: 'ES',
        apiURL: 'http://192.168.0.70:5263',
        apiVersion: '-'
    },
    isLoading: {
        darkmode: false,
        language: false,
        apiURL: false,
        statusConnection: false,
        app: false
    },
    statusConnection: false,
    error: null
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {

        setSettings: (state, action) => {
            const { darkMode, language, apiVersion, apiurl } = action.payload;
            state.settings.darkmode = darkMode;
            state.settings.language = language;
            state.settings.apiVersion = apiVersion;
            state.settings.apiURL = apiurl;
            state.statusConnection =  true
            i18n.changeLanguage(language);
        },

        setDarkMode: (state, action) => {
            state.settings.darkmode = action.payload;
        },

        changeLanguage: (state, action) => {
            state.settings.language = action.payload;
            i18n.changeLanguage(action.payload);
        },

        setAPIURL: (state, action) => {
            state.settings.apiURL = action.payload;
        },

        setStatusConnection: (state, action) => {
            state.statusConnection = action.payload;
        },

        setLoading: (state, action) => {
            const { key, value } = action.payload;
            state.isLoading[key] = value;
        }
    }
});

export const { setSettings, setDarkMode, setLoading, changeLanguage, setAPIURL, setStatusConnection } = settingsSlice.actions;