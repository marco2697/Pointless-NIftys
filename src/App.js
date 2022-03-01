import { Routes, Route} from "react-router-dom";
import './App.css';
import * as s from './styles/styles';
import { NavBar, NavBarMobile } from './components/navbar';
import { MintPage} from './pages/mint';
import { WalletPage } from './pages/wallet';
import { useEffect, useState} from 'react';
import { HomePage } from './pages/home';
import { useDispatch } from "react-redux";
import { connectFailed } from "./redux/actions";




function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();

  useEffect( ()=>{
    const resizeWindow = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', resizeWindow);
  }, []);

  useEffect(() => {
         if(window.ethereum){
           window.ethereum.on('accountsChanged', () => {
            window.location.reload();
             });

            window.ethereum.on('chainChanged', () => {
            window.location.reload();
            });
         }else{
           dispatch(connectFailed("install metamask first"))
         }
  });

  return (
    <s.Page>

      {screenWidth > 500 ? (
       <NavBar></NavBar>
      ):(
        <NavBarMobile></NavBarMobile>
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="mint" element={<MintPage />} />
        <Route path="wallet" element={<WalletPage />} />
      </Routes>

    </s.Page>
  );
}

export default App;
