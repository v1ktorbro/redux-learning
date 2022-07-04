import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
import { addCashAction, getCashAction } from './store/cashReduser';
import { fetchCustomers } from './asyncActions/customers';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch(addCashAction(cash));
  };
  const getCash = (cash) => {
    dispatch(getCashAction(cash));
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  const getAllCustomers = () => {
    dispatch(fetchCustomers());
  };

  return (
    <div className="App">
    <div style={{fontSize: '3rem'}}>Баланс: {cash}</div>
      <div style={{display: 'flex'}}>
        <button style={{fontSize: '2rem'}} onClick={() => addCash(Number(prompt()))}>Пополнить счёт</button>
        <button style={{fontSize: '2rem'}} onClick={() => getCash(Number(prompt()))}>Снять со счёта</button>
        <button style={{fontSize: '2rem'}} onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button style={{fontSize: '2rem'}} onClick={getAllCustomers}>Получить клиентов из базы</button>
      </div>
      {
        customers.length > 0 ?
          <div>
            {customers.map((customer) => {
              return (
                <div 
                  key={customer.id}
                  id={customer.id}
                  onClick={() => removeCustomer(customer)}
                  style={{fontSize: '2rem', 
                          border: '1px solid blue', 
                          padding: '5px',
                          marginTop: '5px'}}>{customer.name}</div>
              );
            })}
          </div>
          :
          <span style={{fontSize: '2rem'}}>Клиенты отсутствуют!</span>
      }
    </div>
  );
}

export default App;
