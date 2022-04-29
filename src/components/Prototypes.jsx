import React from "react";
import useActions from "../hooks/useAction";
import usePrototypes from "../hooks/usePrototypes";

function Prototypes() {
  const prototypes = usePrototypes();
  const { addToOrder } = useActions();
  console.log(prototypes);
  return (
    <main>
      <div className="prototypes">
        {prototypes.map((prototype) => {
          const { id, thumbnail, title, price, desc, pieUrl } = prototype;
          const click = () => {
            addToOrder(id);
          };
          return (
            <div className="prototype" key={id}>
              <a href={pieUrl} target="_blank" rel="noreferrer">
                <diV
                  style={{
                    padding: "25px 0 33px 0",
                  }}
                >
                  <video
                    autoPlay
                    loop
                    playsInline
                    className="prototype__artwork prototype__edit"
                    src={thumbnail}
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </diV>
              </a>
              <div className="prototype__body"></div>
              <div className="prototype__title">
                <div className="btn btn--primary float--right" onClick={click}>
                  <i className="icon icon--plus" />
                </div>
                {title}
              </div>
              <p className="prototype__price">${price}</p>
              <p className="prototype__desc">{desc}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Prototypes;