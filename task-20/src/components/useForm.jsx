import { useState, useEffect } from 'react'

const useForm = (validate) => {
    const [values, setValues] = useState({
        fullname: '',
        email: '',
        password: '',
        date: '',
        month: '',
        year: '',
        gender: '',
        paymentMetod: '',
        cardNumber:'',
        cvc: '',
        cardExpiry:''
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {   
        const {name,value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(validate(values))
        setIsSubmitting(true)
        console.log(values)
    }
  return {handleChange, handleSubmit, values, errors}
}

export default useForm