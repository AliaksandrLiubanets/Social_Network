import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import { BrowserRouter, Route } from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar store={props.store} />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />} />
          <Route path='/profile' render={() => <Profile store={props.store} />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
