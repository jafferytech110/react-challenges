export default function validateInfo (values) {
    let errors = {}

    // fullname: '',
    // email: '',
    // password: '',
    // date: '',
    // month: '',
    // year: '',
    // gender: '',
    // paymentMetod: '',
    // cardNumber:'',
    // cvc: '',
    // cardExpiry:''

    if (values.fullname.trim().length < 2) {
        errors.fullname = 'Please provide full name'
    }

    if(values.password.length < 8) {
        errors.password = 'Password must be at least 8 character length'
    }
    
    if((parseInt(values.date) > 31 || parseInt(values.date) < 1) || (parseInt(values.month) > 12 || parseInt(values.month) < 1) || (parseInt(values.year) > (new Date().getFullYear() ) || parseInt(values.year) < 1900) ) {
        errors.date = 'Please provide correct date of birth'
    }

    if (!values.gender) {
        errors.gender = 'Please select any gender'
    }

    if(!values.paymentMethod) {
        errors.paymentMethod = 'Please select one payment methood'
    }

    if(parseInt(values.cardNumber).length < 6 || (!values.cvc.trim()) || (!values.cardExpiry.trim())) {
        errors.cardExpiry = 'Please check card detail again'
    }

    return errors
}