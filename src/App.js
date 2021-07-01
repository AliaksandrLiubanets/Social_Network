import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import { BrowserRouter, Route } from 'react-router-dom';
import Music from './components/Music/Music';

import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import SettingsContainer from './components/Settings/SettingsContainer';
import React, { Component, Suspense } from 'react';
import { initialize } from './redux/reducer-app';
import { connect } from 'react-redux';
import Preloader from './common/Preloader';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer') )

class App extends Component { 
  
  componentDidMount() {
    this.props.initialize()    
  }

  render() {

    if (!this.props.isInitialized) {
      return <Preloader />
    }

    return (
      <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <Suspense fallback={<div>Loading...</div>}>
                                                  <DialogsContainer />
                                              </Suspense> } />
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} /> 
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/settings' render={() => <SettingsContainer />} />
          <Route path='/login' render={() => <Login />} />
        </div>
      </div>
    </BrowserRouter>
    )  
  }  
}

const mapStateToProps = (state) => {
  return {
    isInitialized: state.app.isInitialized
  }
}

// export default App;

export default connect(mapStateToProps, {initialize})(App);
