import "./CompFilhoB.css";
import { useContext } from "react";
import { BatataContext } from "../../contexts/BatataContext";
import Alert from 'react-bootstrap/Alert';


export function CompFilhoB() {

  const resultado = useContext(BatataContext)

  return <div className="filho-b">
    <h3>FILHO B</h3>
    {[
      'danger',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {resultado} alert—check it out!
        </Alert>
      ))}
  </div>;
}
