import './App.css'
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
	return (
		<div className='App_wrapper'>
		<Header />
		<Navbar />
		<div>
			<Route path='/message'
				render={ () => <DialogsContainer /> }/>
			<Route path='/profile'
				render={ () => <Profile /> }/>
		</div>
	</div>
	)
}

export default App
