import './App.scss';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import { useState } from 'react';
// Изображения
import logo from './assets/Images/Logo.png';
import oblakaLeft from './assets/Images/oblakaLeft.png';
import oblakaRight from './assets/Images/oblakaRight.png';
import topSmallImage from './assets/Images/1smallImage.png';
import centerSmallImage from './assets/Images/2smallImage.png';
import bottomSmallImage from './assets/Images/3smallImage.png';
// Иконки
import iconKey from './assets/Icons/iconKey.png';
import iconOffice from './assets/Icons/iconOffice.png';
import iconBrickwall from './assets/Icons/iconBrickwall.png';
import iconStar from './assets/Icons/iconStar.png';
import iconBuilding from './assets/Icons/iconBuilding.png';
import iconParking from './assets/Icons/iconParking.png';
import iconSlider from './assets/Icons/iconSlider.png';
import iconPutty from './assets/Icons/iconPutty.png';
import iconVectorLeft from './assets/Icons/iconVectorLeft.png';
import iconVectorRight from './assets/Icons/iconVectorRight.png';
import iconPhone from './assets/Icons/iconPhone.png';
import iconMarket from './assets/Icons/iconMarket.png';
import iconGilKomp from './assets/Icons/iconGilKomp.png';
import iconBabyGarden from './assets/Icons/iconBabyGarden.png';
import iconACS from './assets/Icons/iconACS.png';
import iconPlus from './assets/Icons/iconPlus.png';
// Компоненты
import PriceProjects from './components/priceProjects/priceProjects';
import InfComplecs from './components/infComplecs/infComplecs';
import FullInformation from './components/fullInformation/fullInformation';


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
  const [textMark, setTextMark] = useState('ЖК "Яблоновский"');
  const [dateMark, setDateMark] = useState([44.990257, 38.926537]);

  const serchMarker = (id) => {
    setTextMark(id);
 
    switch(id) {
      case 'Магазины':
        setDateMark([44.991557, 38.931509]);
        break;

      case 'ЖК "Яблоновский"':
        setDateMark([44.990257, 38.926537]);  
        break;

      case 'Детский сад':
        setDateMark([44.987573, 38.930457]);
        break;

      case 'АЗС':
        setDateMark([44.989330, 38.924230]);
        break;

      case 'Поликлинника':
        setDateMark([44.990008, 38.932633]);
        break;
    }
  };



  return (
    <div className='d-flex w-full flex-col'>
      <div className='BackImage d-flex w-full flex-col' style={{height: '800px'}}>
        <div className='BackWhite d-flex w-full' style={{height: '121px'}}>
          <div className='d-flex items-center content-between mx-150 my-12'>
            <img src={logo} alt='' style={{width: '180px', height: '90px'}} />
            
            <div className='d-flex content-between my-auto mx-110'>
              <Link to='/' className='links mr-32'>Жилые комплексы</Link>
              <Link to='/company' className='links mr-32'>О компании</Link>
              <Link to='/sale' className='links mr-32'>Как купить</Link>
              <Link to='/contact' className='links'>Контакты</Link>
            </div>

            <div className='d-flex flex-col my-21'>
              <p style={{marginBottom: '7px'}}>+7 (918) 377-48-10</p>
              <p className='mx-auto' style={{borderBottom: '1px solid #212D55'}}>Заказать звонок</p>
            </div>
          </div>
        </div>

        <div className='BorderBlue d-flex w-100 content-between py-30 mb-65'>
          <a className='ml-150'>Преимущества</a>
          <a>Инфраструктура</a>
          <a>Планировка</a>
          <a>Отделка</a>
          <a>Описание</a>
          <a>Контакты</a>
          <a className='mr-150'>Документация</a>
        </div>      

        <p className='mx-auto size-60'>Жилой Комплекс <b>«Яблоновский»</b></p>
        <p className='mx-auto mt-28 size-32'>Краснодар, пгт. Яблоновский ул. Кобцевой</p>
        <p className='mx-auto mb-35 size-35'><b>от 63 801 до 65 678 ₽/м²</b></p>
      
        <button type='submit' className='button1'>Узнать стоимость проекта</button>
      
        <div className='d-flex h-full content-between mt-41 mx-200 zIndex-100'>
          <PriceProjects title='Квартиры' body='от 63 801 ₽/м²' />
          <PriceProjects title='Стоимость' body='от 4,44 млн ₽' />
          <PriceProjects title='Класс' body='Эконом' />
          <PriceProjects title='Срок сдачи' body='Сдан' />
        </div>

        <div className='d-flex pos-relative'>
          <img src={oblakaLeft} className='topMin180 pos-absolute' />
          <img src={oblakaRight} className='topMin180 right0 pos-absolute' />
        </div>
        
      </div>
      
      <div className='flex-col mx-150 mt-90 mb-100'>
        {/* ВЕРХНИЙ БЛОК */}
        <div className='d-flex content-between'>
          <InfComplecs image={iconKey} title='Срок сдачи' body='2015' />
          <InfComplecs image={iconOffice} title='Этажность' body='10' />
          <InfComplecs image={iconBrickwall} title='Тип дома' body='Кирпичный' />
          <InfComplecs image={iconStar} title='Класс дома' body='Эконом' />
        </div>
        
        
        {/* НИЖНИЙ БЛОК */}
        <div className='d-flex w-full content-between mt-30'>
          <InfComplecs image={iconBuilding} title='Корпусов' body='2 корпуса' />
          <InfComplecs image={iconParking} title='Парковка' body='Гостевая' />
          <InfComplecs image={iconSlider} title='Территория' body='Дет.площадки' />
          <InfComplecs image={iconPutty} title='Отделка' body='Чистовая' />
        </div>
      </div>

      <p className='mx-auto mb-60 size-45'>Наша инфраструктура</p>
      
      {/* YandexMAP */}
      <div className='yandexMap w-full' style={{height: '666px'}}>
        <YMaps>
          <Map className='w-full h-full pos-relative' defaultState={{ center: [44.991133, 38.935577], zoom: 15.5}}>
            <Placemark geometry={dateMark} properties={{iconCaption: textMark}} options={{iconColor: '#31BEF4'}} />
            
            <div className='marker' id='Магазины' style={{top: '40px'}} onClick={(e) => serchMarker(e.currentTarget.id)}>
              <div className='textMarker'>
                <div className='blockImageMarker'>
                  <img src={iconMarket} className='imageMarker' />
                </div>
                <p className='pMarker'>Магазины</p>
              </div>
            </div>

            <div className='marker' id='ЖК "Яблоновский"' style={{top: '157px'}} onClick={(e) => serchMarker(e.currentTarget.id)}>
              <div className='textMarker'>
                <div className='blockImageMarker'>
                  <img src={iconGilKomp} className='imageMarker' />
                </div>
                <p className='pMarker'>ЖК "Яблоновский"</p>
              </div>
            </div>

            <div className='marker' id='Детский сад' style={{top: '274px'}} onClick={(e) => serchMarker(e.currentTarget.id)}>
              <div className='textMarker'>
                <div className='blockImageMarker'>
                  <img src={iconBabyGarden} className='imageMarker' />
                </div>
                <p className='pMarker'>Детский сад</p>
              </div>
            </div>

            <div className='marker' id='АЗС' style={{top: '391px'}} onClick={(e) => serchMarker(e.currentTarget.id)}>
              <div className='textMarker'>
                <div className='blockImageMarker'>
                  <img src={iconACS} className='imageMarker' />
                </div>
                <p className='pMarker'>АЗС</p>
              </div>
            </div>

            <div className='marker' id='Поликлинника' style={{top: '508px'}} onClick={(e) => serchMarker(e.currentTarget.id)}>
              <div className='textMarker'>
                <div className='blockImageMarker'>
                  <img src={iconPlus} className='imageMarker' />
                </div>
                <p className='pMarker'>Поликлинника</p>
              </div>
            </div>

          </Map> 
        </YMaps>

      </div>
      <p className='size-45 mx-auto mt-80 mb-30'>Описание Жилого Комплекса</p>

      <div className='d-flex text-center mb-50 mx-auto'>
        <p className='size-22' style={{color: '#656D89'}}>Нажимайте</p>
        <img style={{margin: 'auto 10px auto 7.5px', width: '6px', height: '11px'}} src={iconVectorLeft} />
        <img style={{margin: 'auto 5.5px auto 0px', width: '6px', height: '11px'}} src={iconVectorRight} />
        <p className='size-22' style={{color: '#656D89'}}>чтобы подробно ознакомится с проектом</p>
      </div>

      <div className='mr-auto ml-150 mb-64'>
        <div className='d-flex'>
          <FullInformation text='Парковка' />
          <FullInformation text='Архитектура' />
          <FullInformation text='Охрана' />
          <FullInformation text='Территория' />
        </div>

        <div className='d-flex mx-auto mt-60'>
          <div className="backBigImage d-flex" style={{width: '848px', height: '573px'}}>
            <div className="textOnImage d-flex flex-col" style={{margin: '140px 283px 54px 27px'}}>
              <p className='mt-25 mr-auto ml-20 size-22'><b>Территория</b></p>
              <p className='mt-30 mx-20 mb-auto size-16' style={{color: '#656D89'}}>Жилой комплекс "Яблоновский" расположен на ул. Кобцевой Н.С. в пгт. Яблоновский.
                За пять минут пешком можно дойти до муниципальной поликлиники, школы и детского садика.
                <br/><br/>
                Этот жилой комплекс располагается в непосредственной близости от улицы Гагарина, 
                где проходит абсолютное большинство маршрутов общественного транспорта, 
                соответственно легко добраться во все части поселка и города Краснодар. 
                Тут же располагается магазин «Магнит», «Магнит Косметик», МФЦ, овощной рынок, 
                мебельные магазины, аптеки и другие предприятия сферы услуг.
              </p>
            </div>
          </div>

          <div className='d-flex flex-col ml-30'>
            <img src={topSmallImage} className="smallImages mb-auto" />
            <img src={centerSmallImage} className="smallImages my-auto" />
            <img src={bottomSmallImage} className="smallImages mt-auto" />
          </div>
        </div>
      </div>



      <footer>
        <center><p className='my-50 mx-250 size-40'><b>
        Узнайте о выгодных предложениях и получите личную консультацию
        </b></p></center>
        
        <div className='d-flex mx-150 mb-100' style={{height: '252px'}}>
          <div className='h-full text-center' style={{borderRight: '1px dashed #31BEF4'}}>
            <p className='size-22 ml-auto mr-25 mt-63 w-350'><b>По любым возникающим Вами<br/>вопросов звоните нам напрямую</b></p>
            <div className='d-flex items-center mt-20 mr-25 mb-auto ml-auto'>
              <img src={iconPhone} />
              <p className='size-24' style={{width: '200px'}}><b>+7 (918) 377-48-10</b></p>
            </div>
          </div>

          <div className='d-flex text-center'>
            <p className='my-auto mx-25' style={{width: '115px'}}><b>Или заполните<br/>форму</b></p>
          </div>
          
          <div className='w-full d-flex flex-col'>
            <div className='d-flex items-center mb-25 mx-auto'>
              <div className='border-cycle mr-5' style={{width: '7px', height: '7px', backgroundColor: '#31BEF4'}} />
              <p style={{color: '#31BEF4'}}>Сейчас мы работаем</p>
            </div>

            <form className='w-full d-flex flex-col'>
              <div className='d-flex mx-auto'>
                <div className='dateBlock'>
                  <input type='text' className='inputText' placeholder='Ваше имя' />
                </div>

                <div className='dateBlock ml-58'>
                  <input type='text' className='inputText' placeholder='Ваш номер телефона' />
                </div>
              </div>
                
              <div className='d-flex mt-25 mx-auto'>
                <div className='dateBlock'>
                  <input type='text' className='inputText' placeholder='Ваш номер телефона' />
                </div>
              
                <button className="button2">
                  <p className='c-ponit size-22' style={{color: 'white'}}>Отправить заявку</p>
                </button>
              </div>
            </form>
            
            <div className='d-flex items-center mt-25 mx-auto'>
              <input type='checkbox' id='cb' /><label for='cb'></label>
              
              <p className='ml-10 size-14'>Я принимаю условия</p>
              <a className='size-14 ml-4' style={{color: '#31BEF4'}}> обработки персональных данных</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};