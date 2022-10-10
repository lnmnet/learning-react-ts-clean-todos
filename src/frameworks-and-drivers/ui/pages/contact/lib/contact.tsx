import { ContactInteractor } from "../../../../../application-business-rules/use-cases/interactors/contact-interactor";
import { ContactController } from "../../../../../interface-adapters/controllers/contact-controller";
import { ContractPageGlobalState } from "../../../../devices/global-states/contact";
import { ContactSelectorItems } from "./contact-component/contact-selector-items";


export default function contact() {

	const contactPageRepository = new ContractPageGlobalState()
	const contactUseCase = new ContactInteractor(contactPageRepository)
	const contactController = new ContactController(contactUseCase)

	const { currentStep } = contactController.getContactViewModel()

	return (
		<>
			{currentStep === 1 && <ContactSelectorItems controller={contactController}></ContactSelectorItems>}
			{currentStep === 2 && <div>step 2</div>}
		</>
		// <ContactSelectorItems controller={contactController}></ContactSelectorItems>
	)
}
