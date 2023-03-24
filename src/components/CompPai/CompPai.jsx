import "./CompPai.css";
import { CompFilhoA } from "../CompFilhoA/CompFilhoA";
import { CompFilhoB } from "../CompFilhoB/CompFilhoB";
import { useState } from "react";
import { BatataContext } from "../../contexts/BatataContext";

export function CompPai() {
  const [batata, setBatata] = useState("batata");

  function repetir() {
    setBatata(batata + "a");
  }

  return (
    <div className="pai">
      <h3>PAI</h3>
      <button className="btn btn-dark" onClick={repetir}>
        Repetir
      </button>
      <p>
        <b>Valor:</b>
        {batata}
      </p>
      {/*Fornece o "value" para a hierarquia*/}
      <BatataContext.Provider value={batata}>
      <CompFilhoA />
      <CompFilhoB value={batata}/>
      </BatataContext.Provider>
    </div>
  );
}
