const Footer = () => {
	const currentDate = new Date().getFullYear()
	
	return <div className="layout-footer">{`© Silent Mist 2024-${currentDate}`}</div>
}

export default Footer
