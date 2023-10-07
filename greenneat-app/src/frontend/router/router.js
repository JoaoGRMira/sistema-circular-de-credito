import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../views/login';
import Register from '../views/register';
import DashboardGreenneat from '../views/dashboardGreenneat';
import DashboardPartner from '../views/dashboardPartner';
import TransactionsGreenneat from '../views/transactionsGreenneat';
import WalletPartner from '../views/walletPartner';
import WalletSupplier from '../views/walletSupplier';
import SolicitacoesCooperativo from '../views/requestsViewPartner';
import ListaProdutos from '../views/productsList';
import NewTransactionGreenneat from '../views/NewTransactionGreenneat';
import UsersGreenneat from '../views/usersGreenneat';
import RequestSupplier from '../views/requestSupplier';
import ComparatorGreenneat from '../views/comparatorGreenneat';
import RequestPartner from '../views/requestsViewPartner';

function Router() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/cadastro' element={<Register />}/>
            <Route path='/dashboard-greenneat' element={<DashboardGreenneat />}/>
            <Route path='/dashboard-cooperativo' element={<DashboardPartner />}/>
            <Route path='/transacoes-greenneat' element={<TransactionsGreenneat />}/>
            <Route path='/carteira-cooperativo' element={<WalletPartner />}/>
            <Route path='/carteira-estabelecimento' element={<WalletSupplier />}/>
            <Route path='/nova-transacao-Greenneat' element={<NewTransactionGreenneat />}/>
            <Route path='/usuarios-Greenneat' element={<UsersGreenneat />}/>
            <Route path='/solicitar-estabelecimento' element={<RequestSupplier />}/>
            <Route path='/solicitacoes-coleta-parceiro' element={<RequestPartner />}/>
            <Route path='/comparador-Greenneat' element={<ComparatorGreenneat />}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Router;