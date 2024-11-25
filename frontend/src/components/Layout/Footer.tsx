import camera from '../../shared/assets/icon-camera.png'
import SharedHelper from '../../shared/helpers/helpers'
import { uiTexts } from '../../shared/types/uiTexts'

const Footer = () => {
	const currentDate = new Date().getFullYear()

	return (
		<div className="layout-footer">
			<span style={{ textAlign: 'center', margin: '0 auto' }}>{`© Silent Mist 2024-${currentDate}`}</span>
			<img
				src={camera}
				alt="Скриншот"
				onClick={() => SharedHelper.saveScreenshot({ containerId: 'app-container' })}
				title={uiTexts.buttons.saveScreenshot.label}
				style={{ width: 30, height: 30, border: '1px solid #D1B28D', padding: 5, borderRadius: 12 }}
			/>
		</div>
	)
}

export default Footer
