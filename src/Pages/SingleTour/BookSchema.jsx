import { FormattedMessage } from "react-intl";
import * as Yup from "yup";
export const bookSchema = Yup.object().shape({
    name: Yup.string().typeError('name').required(<FormattedMessage id='nameIsRequired' />),
    email: Yup.string().email().required(<FormattedMessage id='emailIsRequired' />),
    date: Yup.string().typeError('date').required(<FormattedMessage id='dateIsRequired' />),
});