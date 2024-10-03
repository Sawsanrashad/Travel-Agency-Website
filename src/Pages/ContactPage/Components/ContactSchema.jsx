import { FormattedMessage } from "react-intl";
import * as Yup from "yup";
export const contactSchema = Yup.object().shape({
    name: Yup.string().typeError('name').required(<FormattedMessage id='nameIsRequired' />),
    email: Yup.string().email("enter a valid email").required(<FormattedMessage id='emailIsRequired' />),
    subject: Yup.string().required(<FormattedMessage id='subjectIsRequired' />),
    message: Yup.string().required(<FormattedMessage id='messageIsRequired' />),
});