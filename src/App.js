import React from 'react'
import { MainPage } from './pages/MainPage'
import ParticularMusic from './Components/ParticularMusic'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './Components/Register'
import LoginForm from './Components/LoginForm'
const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Register />} />
				<Route path='/login' element={<LoginForm />} />
				<Route path='/home' element={<MainPage />} />
				<Route path='/album/:id' element={<ParticularMusic />} />
			</Routes>

		</BrowserRouter>
	)
}

export default App