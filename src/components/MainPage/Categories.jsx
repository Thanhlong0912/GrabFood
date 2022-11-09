import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Thịt",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Hamburger",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Sanwick",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Sữa",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Bánh",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Hamburger",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Kem",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Pizza",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
