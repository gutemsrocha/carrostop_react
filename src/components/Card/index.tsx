import './styles.css';
import carImg from '../../assets/car.png';

export default function Card(){
    return(
        <div className="ct-card">
            <div className="ct-catalog-card-car">
                <img src={carImg} alt="Carro" />
            </div>
            <div className="ct-catalog-card-description">
                <h2>Audi Supra TT</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
            </div>
            <div className="ct-catalog-card-buy-button-container">
                <button type="submit">COMPRAR</button>
            </div>
        </div>
    );
}