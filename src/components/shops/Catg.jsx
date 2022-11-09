import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Hamburger",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Sanwick",
    },
    {
      cateImg: "./images/category/cat-3.png",
      cateName: "Pizza",
    },
    {
      cateImg: "./images/category/cat-4.png",
      cateName: "Potato",
    },
    {
      cateImg: "./images/category/cat-5.png",
      cateName: "Sanwick",
    },
    {
      cateImg: "./images/category/cat-6.png",
      cateName: "Hamburger",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>FOOD </h1>
          <h1>VEGETABLE </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Brands</button>
        </div>
      </div>
    </>
  )
}

export default Catg
