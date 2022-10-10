enum CurrentStep {
	Selector,
	Input,
	Confirm,
	Result
}



export const contactSelectItems = [
	{ value: 0, title: '这是第一页', content: '这是第一页内容' },
	{ value: 1, title: '这是第二页', content: '这是第二页内容' },
	{ value: 2, title: '这是第三页', content: '这是第三页内容' },
	{ value: 3, title: '这是第四页', content: '这是第四页内容' },
]

export interface ContactPage {
	contactInputContent?: ContactInputContent;
	contactInputInfomation?: ContactInputInformation;
	currentStep: number;
	selectedSelector: number;
}

export interface ContactSelector {
	value: number;
	title: string;
	content: string;
}

export interface ContactInputContent {
	selected: number;
	specificContent: string;
	codeContext?: string;
}

export interface ContactInputInformation {
	name: string;
	companyName: string;
	departmentName?: string;
	phoneNumber: number;
	mail: string;
	agreeGetPersonInfo: boolean;
}