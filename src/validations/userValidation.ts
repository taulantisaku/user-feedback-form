import * as yup from "yup"

export const userSchema = yup.object().shape({
    name: yup.string().min(2).required(),
    email: yup.string().email().required(),
    rating: yup.number().min(1).max(5).required(),
    comments: yup.string(),
})