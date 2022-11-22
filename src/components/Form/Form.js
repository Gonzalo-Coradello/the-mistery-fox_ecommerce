import { useEffect, useState } from 'react'
import { validateFields, validateForm } from './formValidation'

const Form = ({ handleCheckout }) => {

    const [formData, setFormData] = useState({ name: '', email: '', emailCheck: '', phone: '' })
    const [validation, setValidation] = useState({ name: false, email: false, emailCheck: false, phone: false })
    const [error, setError] = useState(validation)
    const [event, setEvent] = useState()

    useEffect(() => {
        if(event) validateFields(event, formData, setValidation, setError)
    }, [formData])
    
    const handleChange = (e) => {
        setEvent(e)
        
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleCheckout(formData)
    }

    return (
        <>
            <form className='form-control grid gap-16 mt-8'>
                <div className='grid justify-center'>
                    <label className='input-group relative'>
                        <span>Nombre</span>
                        <input type='text' onChange={handleChange} name='name' placeholder='John Doe' value={formData.name} className='input input-bordered input-sm focus:outline-none focus:outline' />
                        <h4 className='absolute top-full left-0 mt-1'>{error.name}</h4>
                    </label>
                </div>
                <div className='grid justify-center'>
                    <label className='input-group relative'>
                        <span>Email</span>
                        <input type='email' onChange={handleChange} name='email' placeholder='john@doe.com' value={formData.email} className='input input-bordered input-sm focus:outline-none focus:outline' />
                        <h4 className='absolute top-full left-0 mt-1'>{error.email}</h4>
                    </label>
                </div>
                <div className='grid justify-center'>
                    <label className='input-group relative'>
                        <span>Confirmar email</span>
                        <input type='email' onChange={handleChange} name='emailCheck' placeholder='john@doe.com' value={formData.emailCheck} className='input input-bordered input-sm focus:outline-none focus:outline' />
                        <h4 className='absolute top-full left-0 mt-1'>{error.emailCheck}</h4>
                    </label>
                </div>
                <div className='grid justify-center'>
                    <label className='input-group relative'>
                        <span>Teléfono</span>
                        <input type='tel' onChange={handleChange} name='phone' placeholder='12345678' value={formData.phone} className='input input-bordered input-sm focus:outline-none focus:outline' />
                        <h4 className='absolute top-full left-0 mt-1'>{error.phone}</h4>
                    </label>
                </div>

                {validateForm(validation) ?
                    <button onClick={handleSubmit} className='btn w-fit mx-auto'>Generar orden</button> :
                    <button className='btn w-fit mx-auto btn-disabled' disabled>Generar orden</button>}
            </form>
        </>
    ) 
}

export default Form