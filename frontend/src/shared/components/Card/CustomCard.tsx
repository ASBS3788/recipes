import React from 'react'
import './Card.css'

interface CardProps {
	title: string
	content: React.ReactNode
	width?: number | string
	height?: number | string
}

const Card: React.FC<CardProps> = ({ title, content, width = 'auto', height = 'auto' }) => {
	return (
		<div className="card" style={{ width: width, height: height }}>
			<div className="card-body">
				<div className="card-title">{title}</div>
				{content}
			</div>
		</div>
	)
}

export default Card
