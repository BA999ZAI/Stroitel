import './App.css';
import logo from './assets/Images/Logo.png';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import priceProjects from './components/priceProjects/priceProjects';

export default function App () {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        {/* <Route path='/' element={</>} /> */}
      </Route>
    </Routes>
  );
}



const Layout = () => {
  return (
    <div style={{display: 'flex', width: '100%'}}>
      <div className='BackImage' style={{height: '800px', width: '100%', display: 'flex', flexDirection: 'column'}}>
        <div className='BackWhite'></div>
        <header className='' style={{height: '121px', width: '100%', display: 'flex', marginBottom: '16px'}}>
          <div style={{margin: '12px 150px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <img src={logo} alt='' style={{width: '180px', height: '90px'}} />
            
            <div style={{display: 'flex', width: '585px', justifyContent: 'space-between', margin: 'auto 110px auto 90px'}}>
              <Link to='/' style={{fontSize: '18px', textDecoration: 'none'}} >Жилые комплексы</Link>
              <Link to='/company' style={{fontSize: '18px', textDecoration: 'none'}} >О компании</Link>
              <Link to='/sale' style={{fontSize: '18px', textDecoration: 'none'}} >Как купить</Link>
              <Link to='/contact' style={{fontSize: '18px', textDecoration: 'none'}} >Контакты</Link>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', margin: '21px 8px 21px 0px'}}>
              <p style={{marginBottom: '7px'}}>+7 (918) 377-48-10</p>
              <p>Заказать звонок</p>
            </div>
          </div>
        </header>

        <div className='BorderBlue' style={{width: '100%', display: 'flex', justifyContent: 'space-between', padding: '30px 0px', marginBottom: '65px'}}>
          <a style={{marginLeft: '150px'}}>Преимущества</a>
          <a>Инфраструктура</a>
          <a>Планировка</a>
          <a>Отделка</a>
          <a>Описание</a>
          <a>Контакты</a>
          <a style={{marginRight: '150px'}}>Документация</a>
        </div>      

        <p style={{fontSize: '60px', margin: '0px auto 0px auto'}}>Жилой Комплекс <b>«Яблоновский»</b></p>
        <p style={{fontSize: '32px', margin: '28px auto 0px auto'}}>Краснодар, пгт. Яблоновский ул. Кобцевой</p>
        <p style={{fontSize: '35px', margin: '0px auto 35px auto'}}><b>от 63 801 до 65 678 ₽/м²</b></p>
      
        <button type='submit' className='Button1'>Узнать стоимость проекта</button>
      
        <div> 
          <priceProjects title='Квартиры' body='от 63 801 ₽/м²' />
          <priceProjects title='Стоимость' body='от 4,44 млн ₽' />
          <priceProjects title='Класс' body='Эконом' />
          <priceProjects title='Срок сдачи' body='Сдан' />
        </div>
      </div>

      {/* New Block */}
      <Outlet/>
    </div>
  );
};