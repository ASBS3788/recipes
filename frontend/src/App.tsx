import useRoutes from './routes'

function App() {
	const routes = useRoutes({ isAuth: true })

	return <div className="App">{routes}</div>
}

export default App
