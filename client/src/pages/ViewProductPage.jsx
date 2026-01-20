import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";
import products from "../data/products.js";
function ViewProductPage() {
  const navigate = useNavigate();
  const {level} = useContext(UserContext);
  return (
    <section>
      {products.map((product) => (
        <article key={product.id}>
          <h1>View Product Page</h1>
          <div className="view-product-container">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>

          <div className="product-promotion-box">
            <h2>
              คุณคือสมาชิกในระดับ {level} ดังนั้นคุณได้สิทธิพิเศษลด 50%
            </h2>
            <button onClick={() => alert("🥳🥳🥳🥳")}>กดรับสิทธิ</button>
          </div>

          <button onClick={() => navigate("/")}>Back to Home</button>
        </article>
      ))}
    </section>
  );
}

export default ViewProductPage;
