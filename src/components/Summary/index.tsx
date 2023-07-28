import { Container } from "./styles";
import IncomeImg from '../../assets/income.svg';
import Outcome from '../../assets/outcome.svg';
import TotalImg from '../../assets/total.svg'

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={IncomeImg} alt="Entradas" />
                </header>
                <strong>RS 1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={Outcome} alt="Saidas" />
                </header>
                <strong>-RS 1000,00</strong>
            </div>
            <div className="green">
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="Total" />
                </header>
                <strong>RS 1000,00</strong>
            </div>
        </Container>
    )
}