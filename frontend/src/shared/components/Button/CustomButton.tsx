import React from 'react'

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	// customStyle?: React.CSSProperties // пример дополнительного пропса для кастомного стиля
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, ...props }) => {
	return (
		<button className="custom-button" {...props}>
			{children}
		</button>
	)
}

export default CustomButton
