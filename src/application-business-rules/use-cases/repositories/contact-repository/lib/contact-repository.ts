import { ContactPage } from "../../../../../enterprise-bussiness-rules/entities/contact";

export interface ContactPageRepository {
	getContactPage(): ContactPage;
	setContactPage(page: Partial<ContactPage>): void;
}