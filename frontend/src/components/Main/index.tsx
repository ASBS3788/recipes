import Card from '../../shared/components/Card/CustomCard'

const Main = () => {
	return (
		<div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100%' }}>
			<div style={{ width: '50%', height: '100%' }}>
				<Card
					title={'Рецепты на неделю'}
					content={
						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<div style={{ display: 'flex', flexDirection: 'row' }}>
								<Card
									title={'Понедельник'}
									width={'50%'}
									content={
										<ul>
											<li>{'Яичница глазунья'}</li> <li>{'Солянка'}</li> <li>{'Пельмени'}</li>
											<li>{'Перекус №1'}</li>
										</ul>
									}
								/>
								<Card
									title={'Вторник'}
									width={'50%'}
									content={
										<ul>
											<li>{'Каша гречневая'}</li> <li>{'Гренки'}</li> <li>{'Салат №4'}</li>
										</ul>
									}
								/>
							</div>

							<div style={{ display: 'flex', flexDirection: 'row' }}>
								<Card
									title={'Среда'}
									width={'50%'}
									content={
										<ul>
											<li>{'Каша кукурузная'}</li>
											<li>{'Пельмени'}</li>
											<li>{'Перекус №2'}</li>
										</ul>
									}
								/>
								<Card
									title={'Четверг'}
									width={'50%'}
									content={
										<ul>
											<li>{'Каша овсяная'}</li>
											<li>{'Уха'}</li>
											<li>{'Мясо по-французски'}</li>
											<li>{'Салат №7'}</li>
										</ul>
									}
								/>
							</div>

							<div style={{ display: 'flex', flexDirection: 'row' }}>
								<Card
									title={'Пятница'}
									width={'50%'}
									content={
										<ul>
											<li>{'Каша пшенная'}</li>
											<li>{'Мясо по-французски'}</li>
											<li>{'Перекус №2'}</li>
										</ul>
									}
								/>
								<Card
									title={'Суббота'}
									width={'50%'}
									content={
										<ul>
											<li>{'Каша гречневая'}</li>
											<li>{'Хинкали'}</li>
											<li>{'Салат №3'}</li>
											<li>{'Круассаны'}</li>
										</ul>
									}
								/>
							</div>

							<div style={{ display: 'flex', flexDirection: 'row' }}>
								<Card
									title={'Воскресенье'}
									width={'100%'}
									content={
										<ul>
											<li>{'Каша овсяная'}</li>
											<li>{'Пельмени'}</li>
										</ul>
									}
								/>
							</div>
						</div>
					}
				></Card>
			</div>
			<div style={{ width: '50%', height: '100%' }}>
				<Card title={'Гречневая каша'} content={'ghb'} />
			</div>
		</div>
	)
}

export default Main
