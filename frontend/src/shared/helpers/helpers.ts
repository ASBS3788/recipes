import domtoimage from 'dom-to-image'
import notification from '../components/Notification/CustomNotification'
import { uiErrorMessages } from '../types/uiTexts'

const SharedHelper = {
	async saveScreenshot({ containerId }: { containerId: string }): Promise<void> {
		const node = document.getElementById(containerId)
		if (!node) {
			return notification.error(uiErrorMessages.screenshot.notContainer)
		}

		try {
			const currentDate = new Date()
			const formattedDate = currentDate.toISOString().split('T')[0]
			const formattedTime = currentDate.toTimeString().split(' ')[0].replace(/:/g, '-')
			const fileName = `screenshot_${formattedDate}_${formattedTime}.png`

			const dataUrl = await domtoimage.toPng(node)

			const link = document.createElement('a')
			link.href = dataUrl
			link.download = fileName
			document.body.appendChild(link)
			link.click()
			document.body.removeChild(link)
			
			notification.success(`${uiErrorMessages.screenshot.success}`)
		} catch (error) {
			if (!(error instanceof Error)) {
				return notification.error(`${uiErrorMessages.unknownError}: ${error}`)
			}
			notification.error(`${uiErrorMessages.screenshot.notCaptured}: ${error}`)
		}
	},
}

export default SharedHelper
