import * as Yup from 'yup';

export const footerSchema = Yup.object({
    location: Yup.string().min(3, 'min 3 characters').max(15, 'max 15 characters').required('required'),
    email: Yup.string().min(12, 'min 12 num').max(50, 'max 50 num').required('required'),
    phone: Yup.string().min(9, 'min 9 num').max(9, 'max 9 characters').required('required'),
    desc: Yup.string().min(3, 'min 3 num').max(20, 'must be 20 characters or less').required('required'),
    day: Yup.string().min(3, 'min 3 num').max(20, 'must be 20 characters or less').required('required'),
    time: Yup.string().min(3, 'min 3 num').max(20, 'must be 20 characters or less').required('required'),
})