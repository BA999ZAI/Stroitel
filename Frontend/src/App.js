import './App.scss';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';

import logo from './assets/Images/Logo.png';
import oblakaLeft from './assets/Images/oblakaLeft.png';
import oblakaRight from './assets/Images/oblakaRight.png';
import topSmallImage from './assets/Images/1smallImage.png';
import centerSmallImage from './assets/Images/2smallImage.png';
import bottomSmallImage from './assets/Images/3smallImage.png';

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

import PriceProjects from './components/priceProjects/priceProjects';
import InfComplecs from './components/infComplecs/infComplecs';
import FullInformation from './components/fullInformation/fullInformation';
import { useState } from 'react';


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
    <div style={{display: 'flex', width: '100%', flexDirection: 'column'}}>
      <div className='BackImage' style={{height: '800px', width: '100%', display: 'flex', flexDirection: 'column'}}>
        <div className='BackWhite' style={{height: '121px', width: '100%', display: 'flex'}}>
          <div style={{margin: '12px 150px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <img src={logo} alt='' style={{width: '180px', height: '90px'}} />
            
            <div style={{display: 'flex', justifyContent: 'space-between', margin: 'auto 110px'}}>
              <Link to='/' className='links mr-32'>Жилые комплексы</Link>
              <Link to='/company' className='links mr-32'>О компании</Link>
              <Link to='/sale' className='links mr-32'>Как купить</Link>
              <Link to='/contact' className='links'>Контакты</Link>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', margin: '21px 0px'}}>
              <p style={{marginBottom: '7px'}}>+7 (918) 377-48-10</p>
              <p style={{borderBottom: '1px solid #212D55', margin: '0px auto'}}>Заказать звонок</p>
            </div>
          </div>
        </div>

        <div className='BorderBlue' style={{width: '100%', display: 'flex', justifyContent: 'space-between', paddingTop: '30px', paddingBottom: '30px', marginBottom: '65px'}}>
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
      
        <button type='submit' className='button1'>Узнать стоимость проекта</button>
      
        <div style={{display: 'flex', height: '100%', justifyContent: 'space-between', margin: '41px 200px 0px 200px', zIndex: '100'}}>
          <PriceProjects title='Квартиры' body='от 63 801 ₽/м²' />
          <PriceProjects title='Стоимость' body='от 4,44 млн ₽' />
          <PriceProjects title='Класс' body='Эконом' />
          <PriceProjects title='Срок сдачи' body='Сдан' />
        </div>

        <div style={{display: 'flex', position: 'relative'}}>
          <img src={oblakaLeft} style={{top: '-180px', position: 'absolute'}} />
          <img src={oblakaRight} style={{position: 'absolute', right: '0px', top: '-180px'}} />
        </div>
        
      </div>
      
      <div style={{flexDirection: 'column', margin: '90px 150px 100px 150px'}}>
        {/* ВЕРХНИЙ БЛОК */}
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <InfComplecs image={iconKey} title='Срок сдачи' body='2015' />
          <InfComplecs image={iconOffice} title='Этажность' body='10' />
          <InfComplecs image={iconBrickwall} title='Тип дома' body='Кирпичный' />
          <InfComplecs image={iconStar} title='Класс дома' body='Эконом' />
        </div>
        
        
        {/* НИЖНИЙ БЛОК */}
        <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', marginTop: '30px'}}>
          <InfComplecs image={iconBuilding} title='Корпусов' body='2 корпуса' />
          <InfComplecs image={iconParking} title='Парковка' body='Гостевая' />
          <InfComplecs image={iconSlider} title='Территория' body='Дет.площадки' />
          <InfComplecs image={iconPutty} title='Отделка' body='Чистовая' />
        </div>
      </div>

      <p style={{margin: '0px auto 60px auto', fontSize: '45px', fontFamily: 'Gilroy-Medium'}}>Наша инфраструктура</p>
      
      {/* YandexMAP */}
      <div className='yandexMap' style={{width: '100%', height: '666px'}}>
        <YMaps>
          <Map style={{width: '100%', height: '100%', position: 'relative'}} defaultState={{ center: [44.991133, 38.935577], zoom: 15.5}}>
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

        <div id='map' style={{width: '100%', height: '100%'}}></div>
      </div>
      <p style={{fontSize: '45px', margin: '80px auto 30px auto'}}>Описание Жилого Комплекса</p>

      <div style={{display: 'flex', textAlign: 'center', margin: '0px auto 50px auto'}}>
        <p style={{fontSize: '22px', color: '#656D89'}}>Нажимайте</p>
        <img style={{margin: 'auto 10px auto 7.5px', width: '6px', height: '11px'}} src={iconVectorLeft} />
        <img style={{margin: 'auto 5.5px auto 0px', width: '6px', height: '11px'}} src={iconVectorRight} />
        <p style={{fontSize: '22px', color: '#656D89'}}>чтобы подробно ознакомится с проектом</p>
      </div>

      <div style={{margin: '0px auto 64px 150px'}}>
        <div style={{display: 'flex'}}>
          <FullInformation text='Парковка' style={{marginRight: '40px'}} />
          <FullInformation text='Архитектура' style={{marginRight: '40px'}} />
          <FullInformation text='Охрана' style={{marginRight: '40px'}} />
          <FullInformation text='Территория' />
        </div>

        <div style={{display: 'flex', margin: '60px auto 0px auto'}}>
          <div className="backBigImage" style={{display: 'flex', width: '848px', height: '573px'}}>
            <div className="textOnImage" style={{display: 'flex', flexDirection: 'column', margin: '140px 283px 54px 27px'}}>
              <p style={{fontSize: '22px', margin: '25px auto 0px 20px'}}><b>Территория</b></p>
              <p style={{fontSize: '16px', margin: '30px 20px auto 20px', color: '#656D89'}}>Жилой комплекс "Яблоновский" расположен на ул. Кобцевой Н.С. в пгт. Яблоновский.
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

          <div style={{display: 'flex', marginLeft: '30px', flexDirection: 'column'}}>
            <img src={topSmallImage} className="smallImages mb-auto" />
            <img src={centerSmallImage} className="smallImages my-auto" />
            <img src={bottomSmallImage} className="smallImages mt-auto" />
          </div>
        </div>
      </div>



      <footer>
        <center><p style={{margin: '50px 250px', fontSize: '40px'}}><b>
        Узнайте о выгодных предложениях и получите личную консультацию
        </b></p></center>
        
        <div style={{display: 'flex', margin: '0px 150px 100px 150px', height: '252px'}}>
          <div style={{height: '100%', textAlign: 'center', borderRight: '1px dashed #31BEF4'}}>
            <p style={{fontSize: '22px', margin: '63px 25px 0px auto', width: '350px'}}><b>По любым возникающим Вами<br/>вопросов звоните нам напрямую</b></p>
            <div style={{display: 'flex', alignItems: 'center', margin: '20px 25px auto auto'}}>
              <img src={iconPhone} style={{}} />
              <p style={{fontSize: '24px', width: '200px'}}><b>+7 (918) 377-48-10</b></p>
            </div>
          </div>

          <div style={{display: 'flex', textAlign: 'center'}}>
            <p style={{margin: 'auto 25px', width: '115px'}}><b>Или заполните<br/>форму</b></p>
          </div>
          
          <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
            <div style={{display: 'flex', margin: '0px auto 25px auto', alignItems: 'center'}}>
              <div style={{width: '7px', height: '7px', marginRight: '5px', borderRadius: '50%', backgroundColor: '#31BEF4'}} />
              <p style={{color: '#31BEF4'}}>Сейчас мы работаем</p>
            </div>

            <form style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
              <div style={{display: 'flex', margin: '0px auto'}}>

                <div className='dateBlock'>
                  <input type='text' className='inputText' placeholder='Ваше имя' />
                </div>

                <div className='dateBlock ml-58'>
                  <input type='text' className='inputText' placeholder='Ваш номер телефона' />
                </div>

              </div>
                
              <div style={{display: 'flex', margin: '25px auto 0px auto'}}>
                <div className='dateBlock'>
                  <input type='text' className='inputText' placeholder='Ваш номер телефона' />
                </div>
              
                <button className="button2"><p style={{fontSize: '22px', color: 'white', cursor: 'pointer'}}>Отправить заявку</p></button>
              </div>
                
            </form>
            
            <div style={{display: 'flex', alignItems: 'center', margin: '25px auto 0px auto'}}>
              <input type='checkbox' id='cb' /><label for='cb'></label>
              <p style={{fontSize: '14px', marginLeft: '10px'}}>Я принимаю условия</p>
              <a style={{fontSize: '14px', color: '#31BEF4', marginLeft: '4px'}}> обработки персональных данных</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};