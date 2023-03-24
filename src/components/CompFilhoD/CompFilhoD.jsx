import "./CompFilhoD.css";
import { useContext } from "react";
import { BatataContext } from "../../contexts/BatataContext";
import Carousel from 'react-bootstrap/Carousel';


export function CompFilhoD() {

  const resultado = useContext(BatataContext) 

  return (
  <div className="filho-d">
    <h3>FILHO D</h3>
    <Carousel variant="dark">
      <Carousel.Item className="carousel">
        <img
          className="d-block w-100"
          src="https://media.tenor.com/FWz2K-m1tZIAAAAC/samur%C3%A1i.gif"
          alt="Max-width 100%"
        />
        <Carousel.Caption>
          <h5>{resultado}</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel">
        <img
          className="d-block w-100"
          src="https://media.tenor.com/645SBPKVFncAAAAd/samursi-samurai.gif"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>{resultado}</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel">
        <img
          className="d-block w-100"
          src="https://nft-cdn.refinable.com/nap/aHR0cHM6Ly9pcGZzLnJlZmluYWJsZS5jb20vaXBmcy9RbVlwaGhtMWhmcnNXOGJHQVM2ZGZ6V2MyM2lCcjUzdTJCQkg3VGpLZnFkaEN3L25mdC5naWY?signature=bc943c9e7fc04835053f5fdfb86f4b69f31816dda6e33b891ddee1ff7a78cbe7"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>{resultado}</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
  );
}
