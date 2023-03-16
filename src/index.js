import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './store/store'
import Routes from './protected-route/routes'
import * as S from './globalStyle'
import { ChangeThemeTrack } from './context/switcher'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <ChangeThemeTrack>
            <Provider store={store}>
                <BrowserRouter>
                    <S.GlobalStyle />
                    <Routes />
                </BrowserRouter>
            </Provider>
        </ChangeThemeTrack>
    </React.StrictMode>
)
