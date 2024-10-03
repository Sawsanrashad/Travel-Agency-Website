import { FormattedMessage } from "react-intl";
import * as Yup from "yup";
export const RegisterSchema = Yup.object().shape({
    ame: Yup.string().required(<FormattedMessage id='nameIsRequired' />),
    email: Yup.string().email().required(<FormattedMessage id='emailIsRequired' />),
    password: Yup.string().typeError('password').required(<FormattedMessage id='passwordIsRequired' />),
    confirm: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required(<FormattedMessage id='ConfirmPasswordShouldMatchThePassword' />),
    phone: Yup.number().typeError('Please Type Phone Correctly').required(<FormattedMessage id='phoneIsRequired' />),

});