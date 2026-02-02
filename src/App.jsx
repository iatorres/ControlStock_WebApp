import React from 'react'
import Navbar from './components/Navbar'
import StockPage from './components/StockPage'
import NewSalePage from './components/NewSalePage'
import HistoryPage from './components/HistoryPage'
import Toast from './components/Toast'
import Footer from './components/Footer'
import { StoreProvider } from './context/Store'

export default function App(){
  const [view, setView] = React.useState('stock')
  return (
    <StoreProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar view={view} setView={setView} />
        <div className="p-4 md:p-6 flex-grow">
          {view === 'stock' && <StockPage />}
          {view === 'new' && <NewSalePage />}
          {view === 'history' && <HistoryPage />}
        </div>
        <Footer />
        <Toast />
      </div>
    </StoreProvider>
  )
}
