import { Route, Routes, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'

const useRoutes = ({ isAuth }: { isAuth: boolean }) => {
	return isAuth ? (
		<Routes>
			<Route path={'/home'} element={<HomePage />} />
			<Route path={'/*'} element={<Navigate to={`/home`} />} />
		</Routes>
	) : (
		<Routes>
			<Route path={`/login`} element={<></>} />
			<Route path={'/*'} element={<Navigate to={`/login`} />} />
		</Routes>
	)
}

export default useRoutes
