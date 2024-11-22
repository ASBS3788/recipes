import Content from './Content'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="layout-container">
			<Layout.Header />
			<Layout.Content>{children}</Layout.Content>
			<Layout.Footer />
		</div>
	)
}

export default Layout

Layout.Header = Header
Layout.Content = Content
Layout.Footer = Footer
