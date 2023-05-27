const Checkout = ({ items, amount }) => {
  return (
    <div>
      <h2>Resumen de la compra</h2>
      {items.map(item => (
        <div key={item._id}>
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
  )
}

export default Checkout
