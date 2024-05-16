import React from 'react'
import recipes from './Recipes.js'
import Swal from 'sweetalert2';

const Menu = () => {

    const handleOrder = (id) => {
        Swal.fire({
            title: "Double checking!",
            text: "You won't be able to remove this item once added to your order. Do you want to continue?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, add to order."
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Ordered!",
                text: "Item has been added to your order.",
                icon: "success"
              });
            }
          });
    };

  return (
    <div className='menu-container'>
        <div>
            <h2>This week's specials</h2>
            <button>Order</button>
        </div>

        {/* menu cards */}
        <div className='cards'>
            {
                recipes.map((recipe) => {
                    return (
                        <div key={recipe.id} className='menu-items'>
                            <img src={recipe.image} alt={recipe.title} />
                            <div className='menu-content'>
                                <div className='heading'>
                                    <h5>{recipe.title}</h5>
                                    <p>{recipe.price}</p>
                                </div>
                                <p>{recipe.description}</p>
                                <button className="orderbtn" onClick={() => handleOrder(recipe.id)}>Add to cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Menu