import { ContactPage } from "../../../../enterprise-bussiness-rules/entities/contact";

export interface ContactPageUseCase {
	getContactPage(): ContactPage;
	setContactPage(page: Partial<ContactPage>): void;
}