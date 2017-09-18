import React from 'react'
import OrderComponent from './OrderComponent'

export default (props) => {
  const orders = props.orders

  return (
    <div className='signup-page'>
      <div className="page-header header-filter" style={{backgroundImage: "url('../resources/assets/img/bg7.jpg')", backgroundSize: "cover", backgroundPosition: "top center"}}>
      {orders.map( (order) => {
        <OrderComponent order={order} key={order.id}/>
      })}
		</div>
  </div>
  )
}
