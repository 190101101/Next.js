import * as Yup from 'yup';

export const passwordSchema = Yup.object({
    password: Yup.string().min(3, 'min 3 num').max(20, 'must be 20 characters or less').required('required').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase, one lowercase, one number and one special character."
      ),
    confirmpassword: Yup.string().min(3, 'min 3 num').max(20, 'must be 20 characters or less').required('required').oneOf([Yup.ref('password'), null], 'passwords must match')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase, one lowercase, one number and one special character."
      ),
    })