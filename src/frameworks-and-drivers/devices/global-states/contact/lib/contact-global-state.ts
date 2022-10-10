import { atom, SetterOrUpdater, useRecoilState } from 'recoil'
import { ContactPageRepository } from '../../../../../application-business-rules/use-cases/repositories/contact-repository'
import { ContactPage } from '../../../../../enterprise-bussiness-rules/entities/contact'

const contactPageGlobalStateAtom = atom<ContactPage>({
	key: 'contactPageGlobalStateAtom',
	default: {
		currentStep: 1,
		selectedSelector: 0
	}
})

const ContactPageGlobalState = () => {
	return useRecoilState<ContactPage>(contactPageGlobalStateAtom)
}

export class ContractPageGlobalState implements ContactPageRepository {

	private get: ContactPage;
	private save: SetterOrUpdater<ContactPage>;

	constructor() {
		const [get, set] = ContactPageGlobalState()
		this.get = get;
		this.save = set;
	}

	getContactPage(): ContactPage {
		return this.get
	}

	setContactPage(page: Partial<ContactPage>) {
		this.save({
			...this.get,
			...page
		})
	}
	
}
