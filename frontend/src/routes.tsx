import { Route, Routes, Navigate } from 'react-router-dom'

const useRoutes = ({ isAuth }: { isAuth: boolean }) => {
	return isAuth ? (
		<Routes>
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
