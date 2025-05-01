import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'


import authReducer from './auth/authSlice'
import contactsReducer from './contacts/contactsSlice'

const authPersistConfig = {
    key: "auth",
    
    storage,
    whitelist: ["token"]
}

const contactPersistConfig = {
    key:"contacts",
    storage,
    whitelist:["items"]
}
const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    contacts:persistReducer(contactPersistConfig,contactsReducer)
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleWare) =>
        getDefaultMiddleWare({
            serializableCheck: false,
        })
})

export const persistor = persistStore(store)
