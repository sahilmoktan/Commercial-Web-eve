import React from "react";

const Products = () => {
  const productsList = [
    {
      name: "jordan air force",
      url: "https://static.nike.com/a/images/t_default/e125b578-4173-401a-ab13-f066979c8848/air-force-1-big-kids-shoes-M7mcL9.png",
      price: 300,
      currency: "$",
    },
    {
      name: "goldstar",
      url: "https://static.nike.com/a/images/t_default/e125b578-4173-401a-ab13-f066979c8848/air-force-1-big-kids-shoes-M7mcL9.png",
      price: 300,
      currency: "$",
    },
    {
      name: "addidas sneakers",
      url: "https://assets.adidas.com/images/w_600,f_auto,q_auto/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg",
      price: 300,
      currency: "$",
    },
  ];
  return (
    <>
      <div className="parent">
        {productsList.map((item, id) => {
          return <div className="box">{item.name}</div>;
        })}
      </div>
    </>
  );
};
export default Products;
