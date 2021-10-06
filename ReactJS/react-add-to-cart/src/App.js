import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [product, setProducts] = useState([
    // {
    //   name: "Apple Mac Book Pro",
    //   Price: "$800",
    //   image:
    //     "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS-ONpR3k7LkIL1eZWTp63MtTs_X46zI6ytK_qVxB43WivD7WipNliKncpu7NOr-Pc0FQSGF9udUA&usqp=CAc",
    // },
    // {
    //   name: "Air Pod Pro Maxx",
    //   Price: "$200",
    //   image:
    //     "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRgRkOd-jYpa0WgRm3Ytq8QQOnrmY5PfVBFW6FV91MkgLkyQ2Zvh8W7UZ-XBNYcdLVW56nefP1Xxw&usqp=CAc",
    // },
  ]);

  const getProducts = async () => {
    const { data: getData } = await axios.get(
      "https://guvi-hackathon2-backend-rental.herokuapp.com/products"
    );
    console.log(getData);
    setProducts(getData);
  };
  useEffect(() => {
    console.log("Component Mounted");
    getProducts();
  });

  return (
    <div className="App">
      <h1>Products</h1>

      {product.map((items) => {
        return (
          <div>
            <img src={items.image} alt="product_image" />
            <h2>{items.product_name}</h2>
            <h4>Price: {items.price}</h4>
            <h3>Catagory: {items.catagory}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
