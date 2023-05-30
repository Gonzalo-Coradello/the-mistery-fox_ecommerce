const CreateProductForm = () => {
  return (
    <div>
      <h2 className='text-3xl mb-8'>Crear producto</h2>
      <div className='px-4 max-w-[80vw] mx-auto'>
        <form action='/products' method='post' enctype='multipart/form-data'>
          <div className='grid lg:grid-cols-4 gap-4'>
            <input type='text' name='event' value='product' hidden></input>
            <div>
              <h4>Título: </h4>
              <input
                type='text'
                name='title'
                className='input input-bordered w-full max-w-xs'></input>
            </div>
            <div>
              <h4>Autor: </h4>
              <input
                type='text'
                name='author'
                className='input input-bordered w-full max-w-xs'></input>
            </div>
            <div>
              <h4>Descripción: </h4>
              <input
                type='text'
                name='description'
                className='input input-bordered w-full max-w-xs'></input>
            </div>
            <div>
              <h4>Idioma: </h4>
              <input
                type='text'
                name='lang'
                className='input input-bordered w-full max-w-xs'></input>
            </div>
            <div>
              <h4>Código: </h4>
              <input
                type='text'
                name='code'
                className='input input-bordered w-full max-w-xs'></input>
            </div>
            <div>
              <h4>Precio: </h4>
              <input
                type='number'
                name='price'
                className='input input-bordered w-full max-w-xs'></input>
            </div>
            <div>
              <h4>Stock: </h4>
              <input
                type='number'
                name='stock'
                className='input input-bordered w-full max-w-xs'></input>
            </div>
            <div>
              <h4>Categorías: </h4>
              <input
                type='text'
                name='categories'
                className='input input-bordered w-full max-w-xs'></input>
            </div>
            <div>
              <h4>Imágenes: </h4>
              <input
                type='file'
                name='file'
                className='input input-bordered w-full max-w-xs'></input>
            </div>
          </div>
          <input type='submit' value='Crear' className='btn'></input>
        </form>
      </div>
    </div>
  )
}

export default CreateProductForm
