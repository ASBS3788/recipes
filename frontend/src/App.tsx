import Layout from './components/Layout'
import useRoutes from './routes'

function App() {
	const routes = useRoutes({ isAuth: true })

	return (
		<div className="App" id="app-container">
			<div id="notification-container"></div>
			<Layout>{routes}</Layout>
		</div>
	)
}

export default App
