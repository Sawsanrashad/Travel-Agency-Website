import { FormattedMessage } from "react-intl";
import * as Yup from "yup";
export const LoginSchema = Yup.object().shape({
  email: Yup.string().typeError('email').required(<FormattedMessage id='nameIsRequired' />),
  password: Yup.string().required(<FormattedMessage id='passwordIsRequired' />),
});