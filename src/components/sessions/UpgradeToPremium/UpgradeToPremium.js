import { useEffect, useState } from 'react'
import { useSessionContext } from '../../../context/UserContext'
import { useNotification } from '../../../services/notification/NotificationService'
import Button from '../../Buttons/Button'
import { useNavigate } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'

const documents = [
  { value: 'identification', label: 'DNI' },
  { value: 'address', label: 'Comprobante de domicilio' },
  { value: 'account_status', label: 'Comprobante de estado de cuenta' },
]

const UpgradeToPremium = () => {
  const [uploaded, setUploaded] = useState({
    identification: false,
    address: false,
    account_status: false,
  })
  const { user, uploadDocuments, updateRole } = useSessionContext()
  const { setNotification } = useNotification()
  const navigate = useNavigate()

  useEffect(() => {
    const identification = !!user.documents.find(
      doc => doc.name === 'identification'
    )
    const address = !!user.documents.find(doc => doc.name === 'address')
    const account_status = !!user.documents.find(
      doc => doc.name === 'account_status'
    )

    setUploaded({ identification, address, account_status })
  }, [user])

  const handleInput = async e => {
    const file = e.target.files[0]
    const document_type = e.target.id
    const data = { event: 'document', document_type, file }
    const response = await uploadDocuments(user.id, data)
    if (response.status === 'success') {
      setUploaded(prev => ({ ...prev, [document_type]: true }))
      setNotification('success', 'Documento cargado correctamente')
    }
  }

  const handleRole = async () => {
    const response = await updateRole(user.id)
    if(response.status === 'success') {
      setNotification('success', 'Rol de usuario actualizado. Vuelva a iniciar sesión')
      navigate('/sessions/login')
    } 
  }

  return (
    <section className='min-h-[85vh]'>
      <h2 className='text-xl font-semibold my-8'>
        Subí estos documentos para convertirte en usuario Premium
      </h2>
      <div className='flex gap-4 flex-wrap justify-center'>
        {documents.map(({ value, label }) => (
          <div key={value} className='grid border gap-2 py-4 px-8'>
            <label className='font-semibold' htmlFor={value}>
              {label}
            </label>
            { 
              uploaded[value]
                ? <FaCheck size={20} className='mx-auto' />
                : <input type='file' id={value} onChange={handleInput} className='file-input file-input-bordered' /> 
            }
          </div>
        ))}
        </div>
        { 
          (uploaded.identification && uploaded.address && uploaded.account_status) 
          && <Button handleClick={handleRole}>Volverse premium</Button>
        }
    </section>
  )
}

export default UpgradeToPremium
