const Checkout = ({ items, amount }) => {
  return (
    <div>
      <div className="border w-5/6 max-w-xl mx-auto px-8 py-8 space-y-4 text-left">
      <h2 className="text-center text-lg font-medium mb-6">Resumen de la compra</h2>
        {items.map(item => (
          <div key={item._id} className="flex justify-between items-center" >
            <div>
              <h4 className="">
                {item.title}
              </h4>
              <p className="text-sm font-light text-primary/60">
                {item.author}
              </p>
            </div>
            <div className="text-right">
              <p>
                ${item.quantity * item.price}
              </p>
              <p className="text-sm font-light text-primary/60">
                {item.quantity}x ${item.price}
              </p>
            </div>
          </div>
        ))}
        <p className="text-center font-bold">Total: ${amount}</p>
      </div>
    </div>
  )
}

export default Checkout
