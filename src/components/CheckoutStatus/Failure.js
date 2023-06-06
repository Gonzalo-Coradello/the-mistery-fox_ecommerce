import LinkButton from '../Buttons/LinkButton'

const Failure = () => {
  return (
    <section>
      <div className='border border-primary-color p-12 grid gap-4 mx-4 my-16 max-w-[700px] lg:mx-auto'>
        <h2 className='text-2xl font-semibold mb-4'>Error</h2>
        <p>Hubo un error en el pago</p>
        <LinkButton classes='mx-auto' url='/cart'>Volver al carrito</LinkButton>
      </div>
    </section>
  )
}

export default Failure
