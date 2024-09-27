import './styles.css';
import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import { ProductDTO } from '../../models/product';


const product: ProductDTO = {
  id: 2,
  name: "smart tv",
  description: "esta TV é muito bonita",
  imgUrl: "https://img.freepik.com/fotos-premium/retrato-de-uma-menina-de-7-anos_116407-699.jpg?w=360",
  price: 2500.99,
  categories: [{

    id: 2,
    name: "eletronico"

  },
  {
    id: 3,
    name: "computadores"
  }
  ]
}

export default function ProductDetails() {

  return (
    <>
      <HeaderClient />
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard product={product}/>
          <div className="dsc-btn-page-container">
            <ButtonPrimary />
            <ButtonInverse />
          </div>
        </section>
      </main>
    </>
  );
}
