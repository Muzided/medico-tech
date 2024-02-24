import axios from 'axios'
import toast from 'react-hot-toast'

export const constactUs = async (name, practiceName, number, email, userMessage, setLoading) => {
  
    try {
        const toastId = toast.loading('Submitting request...');
        const response = await axios.post(`${process.env.REACT_APP_BASEURL}v1/api/email/contact-us`, {
            userName: name,
            practiceName: practiceName,
            phoneNumber: number,
            message: userMessage,
            userEmail: email
        }
       ,{
            headers:{
                "Content-Type": "application/json",
            }
        })
        // toast.promise(response, {
        //     loading: 'Submitting request...',
        //     success: 'Email sent successfully',
        //     error: 'Something went wrong please try again!'
        // })
        console.log("response",response)
        
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