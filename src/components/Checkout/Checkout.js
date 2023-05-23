const Checkout = ({ ticket: { amount, items }, outOfStock }) => {
  return (
    <>
      <div>
        <h2>Resumen de la compra</h2>
        {items.map(item => (
          <div>
            <p>
              {item.title} - {item.author}
            </p>
            <p>
              {item.quantity}x ${item.price}
            </p>
          </div>
        ))}
        <p>Total: {amount}</p>
      </div>
      {outOfStock && (
        <div>
          <h2 className='text-2xl font-semibold mb-4'>
            Los siguientes productos se encuentran fuera de stock:
          </h2>
          {outOfStock.map(prod => (
            <ul key={prod._id}>
              <li className='list-disc text-lg font-semibold'>
                {prod.title} <span className='font-light'>({prod.author})</span>
              </li>
            </ul>
          ))}
        </div>
      )}
    </>
  )

  //     if(checkoutStatus === 'outOfStock') {
  //         return (
  //             <div className="mt-8 border border-primary-color p-12 mx-4 max-w-[700px] lg:mx-auto">
  //                 <h2 className="text-2xl font-semibold mb-4">Los siguientes productos se encuentran fuera de stock:</h2>
  //                 {OutOfStockList.map(prod => {
  //                     return (
  //                         <ul key={prod.id}>
  //                             <li className="list-disc text-lg font-semibold">{prod.title} <span className="font-light">({prod.author})</span></li>
  //                         </ul>
  //                     )
  //                 })}
  //                 <Link to='/cart' className='normal-case btn btn-outline mt-6'>Volver al carrito</Link>
  //             </div>
  //         )
  //     }

  //     if(checkoutStatus === 'error') {
  //         return (
  //             <div className="mt-8 border border-primary-color p-12 mx-4 max-w-[700px] lg:mx-auto">
  //                 <h2 className="text-2xl font-semibold mb-4">Ha ocurrido un error</h2>
  //                 <p>{errorMsg}</p>
  //             </div>
  //         )
  //     }
  // }
}

export default Checkout
