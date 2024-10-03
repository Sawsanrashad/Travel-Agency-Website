import { FormattedMessage } from "react-intl";
import * as Yup from "yup";
export const ReviewSchema = Yup.object().shape({
    comment: Yup.string().required(<FormattedMessage id='commentIsRequired' />),
});