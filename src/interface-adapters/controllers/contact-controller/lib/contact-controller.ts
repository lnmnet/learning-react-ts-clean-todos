import { ContactPageUseCase } from "../../../../application-business-rules/use-cases/contact-use-case";
import { ContactPage } from "../../../../enterprise-bussiness-rules/entities/contact";
import { ContactPageViewModel } from "../../view-models/contact-view-model/lib/contact-view-model";

export class ContactController {

	constructor(private readonly contactUseCase: ContactPageUseCase) {}

	getContactViewModel(): ContactPageViewModel {

		const { currentStep, selectedSelector } = this.contactUseCase.getContactPage();

		return {
			currentStep,
			selectedSelector
		}
	}

	setContactPage(page: Partial<ContactPage>) {
		this.contactUseCase.setContactPage(page)
	}
}