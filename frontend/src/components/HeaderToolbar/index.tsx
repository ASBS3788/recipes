import CustomButton from '../../shared/components/CustomButton'

const HeaderToolbar = () => {
	return (
		<>
			<CustomButton onClick={() => alert('ТЫЦ-тЫЦ!!!')}> {`Создать меню на неделю`}</CustomButton>
		</>
	)
}

export default HeaderToolbar
