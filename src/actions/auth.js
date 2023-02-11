import * as api from '../api/api'

export const login = (formData, actions) => {
    try {
        const {data} = api.login(formData)
        console.log(data)

        actions.setSubmitting(false)
    } catch (error) {
        console.log(error?.response?.data?.message)
    }
}
