import { ContactPage } from "../../../../../enterprise-bussiness-rules/entities/contact";
import { ContactPageUseCase } from "../../../contact-use-case";
import { ContactPageRepository } from "../../../repositories/contact-repository";

export class ContactInteractor implements ContactPageUseCase {

	constructor(private readonly contactPageRepository: ContactPageRepository) {}

	getContactPage(): ContactPage {
		return this.contactPageRepository.getContactPage()
	}

	setContactPage(page: Partial<ContactPage>) {
		this.contactPageRepository.setContactPage(page);
	}
}