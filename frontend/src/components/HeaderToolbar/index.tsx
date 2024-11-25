import CustomButton from '../../shared/components/Button/CustomButton'
import { uiTexts } from '../../shared/types/uiTexts'

const HeaderToolbar = () => {
	return (
		<>
			<CustomButton onClick={() => alert('ТЫЦ-тЫЦ!!!')}>{uiTexts.buttons.createMenu.label}</CustomButton>
			<CustomButton onClick={() => alert('ТЫЦ-тЫЦ!!!')}> {uiTexts.buttons.calculateProducts.label}</CustomButton>
			<CustomButton onClick={() => alert('ТЫЦ-тЫЦ!!!')}> {uiTexts.buttons.saveRecipe.label}</CustomButton>
		</>
	)
}

export default HeaderToolbar
