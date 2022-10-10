import React from 'react'
import styled from 'styled-components'
import { contactSelectItems, ContactSelector } from '../../../../../../enterprise-bussiness-rules/entities/contact'
import { ContactController } from '../../../../../../interface-adapters/controllers/contact-controller'

const StyleUl = styled.ul`
	padding: 0;
	margin: 0;
`

const StyleLi = styled.li`
	display: flex;
	border: 1px solid #ccc;
	border-radius: 8px;
	padding: 24px 16px;
	margin-bottom: 16px;
	cursor: pointer;
`

const StyleLiTitle = styled.h3`
	margin: 0;
	font-size: 16px;
	text-align: left;
	margin-bottom: 8px;
`

const StyleInput = styled.input.attrs(props => ({
	type: 'radio',
	name: 'selector'
}))`
	margin: 0 34px;
`

const StyleContent = styled.div``

const StyleLiP = styled.p`
	margin: 0;
`

const ContactSelectorItem = ({item, controller}: { item:ContactSelector, controller: ContactController }) => {

	const { selectedSelector } = controller.getContactViewModel()

	const onChangeStep = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.stopPropagation()
		controller.setContactPage({ selectedSelector: Number(event.target.value)})
	}
	
	const onClick = () => {
		controller.setContactPage({ selectedSelector: item.value })
	}
	
	return (
		<StyleLi onClick={onClick}>
			<StyleInput
				onChange={onChangeStep}
				value={item.value}
				checked={item.value === selectedSelector}
			></StyleInput>
			<StyleContent>
				<StyleLiTitle>{item.title}</StyleLiTitle>
				<StyleLiP>{item.content}</StyleLiP>
			</StyleContent>
		</StyleLi>
	)
}

type contactProps = {
	controller: ContactController;
	item?: ContactSelector;
}

export const ContactSelectorItems = ({ controller }: contactProps) => {
	const viewModel = controller.getContactViewModel()
	
	const onNext = () => {
		controller.setContactPage({ currentStep: viewModel.currentStep + 1 })
	}
	
	return (
		<>
		<StyleUl>
			{contactSelectItems.map(item => (
				<ContactSelectorItem key={Math.random()} item={item} controller={controller}></ContactSelectorItem>
			))}
		</StyleUl>
		<button onClick={onNext}>Next</button>
		</>
	)
}