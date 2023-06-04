import LinkButton from '../Buttons/LinkButton'

const Item = ({ _id, title, author, thumbnails, price, lang }) => {
  return (
    <div className='card border border-primary-color '>
      <figure>
        <div className='h-80'>
          <img
            className='h-full'
            src={`${process.env.REACT_APP_urlBase}${thumbnails[0]}`}
            alt={title}
          />
        </div>
      </figure>
      <div className='card-body'>
        <h2 className='card-title text-xl font-bold mx-auto'>{title}</h2>
        <h4 className='text-sm'>{author}</h4>
        <div className='flex justify-around items-center text-sm font-medium'>
          <h4>{lang === 'es' ? 'Español' : 'Inglés'}</h4>
          <h4>${price}</h4>
        </div>
        <div className='card-actions justify-center'>
          <LinkButton url={ `/detail/${_id}` }>
            Ver detalle
          </LinkButton>
        </div>
      </div>
    </div>
  )
}

export default Item
