import axios from 'axios'
import toast from 'react-hot-toast'

export const constactUs = async (name, practiceName, number, email, userMessage, setLoading) => {

    try {
        const toastId = toast.loading('Submitting request...');
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_BASEURL}v1/api/email/contact-us`, {
            userName: name,
            practiceName: practiceName,
            phoneNumber: number,
            message: userMessage,
            userEmail: email
        }
            , {
                headers: {
                    "Content-Type": "application/json",
                }
            })

        if (response?.status === 200) {

            setLoading(false)
            toast.dismiss(toastId);
            toast.success('Email sent successfully')
        }
    } catch (error) {
        console.log(error)
        setLoading(false)
        toast.error('something went wrong!')
    }
}

export const optForMessages = async (email, phoneNumber, country, state, authorize, setLoading) => {

    try {
        const toastId = toast.loading('Submitting request...');
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_BASEURL}v1/api/email/opt-messages`, {
            email: email,
            phone_number: phoneNumber,
            state: state,
            country: country,
            authorized: authorize,
        }
            , {
                headers: {
                    "Content-Type": "application/json",
                }
            })

        if (response?.status === 200) {

            setLoading(false)
            toast.dismiss(toastId);
            toast.success('Email sent successfully')
        }
    } catch (error) {
        console.log(error)
        setLoading(false)
        toast.error('something went wrong!')
    }
}