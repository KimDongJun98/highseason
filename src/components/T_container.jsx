import React, { useState, useEffect, useRef } from "react"
import mainImg from '../high_seAson.PNG'
import MContainer from './M_container.jsx'

export default function T_container() {

  // 버튼 클릭하면 바꾸는 상태
  const [currentComponent, setCurrentComponent] = useState('Home');

  const handleChangeComponent = (component) => {
    setCurrentComponent(component);
  };


  // 메뉴 버튼 상태
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  // 메뉴 버튼 사라지는 effect
  const menuRef = useRef(null)

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
      <>
      <div>
        <div>

          <button className="menu-button" style={{margin: "15px", color: "white", cursor: "pointer"}} onClick={toggleMenu}>=</button>

          <a href="Home.jsx">
            <img src={mainImg} alt='' height={35} width={150} style={{verticalAlign: "middle", paddingLeft: "10px" }}/>
          </a>

          <button className="raise" style={{margin: "15px", color: "white", paddingBottom: "5px", paddingLeft: "5%"}} onClick={()=>handleChangeComponent('Home')}>Home</button>
          <button className="raise" style={{margin: "15px", color: "white"}} onClick={()=>handleChangeComponent('Artists')}>Artists</button>
          <button className="raise" style={{margin: "15px", color: "white"}} onClick={()=>handleChangeComponent('Discography')}>Discography</button>
          <button className="raise" style={{margin: "15px", color: "white"}} onClick={()=>handleChangeComponent('Audition')}>Audition</button>          
          
          <div ref={menuRef} className={`side-menu ${isMenuOpen ? 'show-menu' : 'hide-menu'}`}>
            <ul style={{ margin: 0 }}>
              <br /><br /><br /> 
              <button style={{cursor: "pointer", marginLeft: 20}} onClick={()=>handleChangeComponent('Home')}>Home</button> <br /><br />
              <button style={{cursor: "pointer", marginLeft: 20}} onClick={()=>handleChangeComponent('Artists')}>Artists</button> <br /><br />
              <button style={{cursor: "pointer", marginLeft: 20}} onClick={()=>handleChangeComponent('Discography')}>Discography</button> <br /><br />
              <button style={{cursor: "pointer", marginLeft: 20}} onClick={()=>handleChangeComponent('Audition')}>Audition</button>
            </ul>
          </div>


        </div>

        <div ref={menuRef}>
          <MContainer currentComponent={currentComponent} />
        </div>
      </div>
      </>
  )

}