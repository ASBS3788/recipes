import './CustomNotification.css'

type NotificationType = 'success' | 'error' | 'info' | 'warning'

interface Notification {
	show: ({ type, message, duration }: { type: NotificationType; message: string; duration?: number }) => void
	success: (message: string) => void
	error: (message: string) => void
	info: (message: string) => void
	warning: (message: string) => void
}

const notification: Notification = {
	show: ({ type, message, duration = 3000 }) => {
		const notificationElement = document.createElement('div')
		notificationElement.classList.add('notification', type)

		const text = document.createElement('span')
		text.textContent = message
		notificationElement.appendChild(text)

		const container = document.getElementById('notification-container')
		if (!container) return

		container.appendChild(notificationElement)

		// Анимация появления
		setTimeout(() => {
			notificationElement.style.animation = 'fadeIn 0.5s forwards'
		}, 100)
		// Анимация исчезновения
		setTimeout(() => {
			notificationElement.style.animation = 'fadeOut 0.5s forwards'
		}, duration - 500)
		// Удаляем уведомление после завершения анимации
		setTimeout(() => {
			notificationElement.remove()
		}, duration)
	},
	success: (message) => notification.show({ type: 'success', message: message }),
	error: (message) => notification.show({ type: 'error', message: message }),
	info: (message) => notification.show({ type: 'info', message: message }),
	warning: (message) => notification.show({ type: 'warning', message: message }),
}

export default notification
