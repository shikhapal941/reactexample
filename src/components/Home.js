
import React from 'react'
function Home(props) {
  return (
    <div>
      <div className='add-to-cart'>
        <img
          alt="imageUrl"
          src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />

      </div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            alt="imageUrl"
            src="https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_640.png" />
        </div>
        <div className="text-wrapper item">
          <span>
            I-Phone
          </span>
          <span>
            Price: $1000.00
          </span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={
              () => { props.addToCartHandler({ pice: 1000, name: 'i phone 11' }) }
            }>
            Add To Cart</button>
        </div>
      </div>
    </div>
  )
}
export default Home