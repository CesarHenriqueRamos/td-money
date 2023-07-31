import { Container } from "./styles";
import IncomeImg from '../../assets/income.svg';
import Outcome from '../../assets/outcome.svg';
import TotalImg from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions'

export function Summary(){
    const {transactions} = useTransactions()

    const summary = transactions.reduce((acc, transaction)=>{
        if(transaction.type === "deposit"){
             acc.deposit += transaction.amount;
             acc.total += transaction.amount;
        }else{
            acc.withdraw += transaction.amount;
            acc.total -= transaction.amount;
        }
        return acc;
    },{
        deposit:0,
        withdraw:0,
        total:0
    })

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={IncomeImg} alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR',{
                                            style:'currency',
                                            currency:'BRL'
                                         }).format(summary.deposit)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={Outcome} alt="Saidas" />
                </header>
                <strong>-{new Intl.NumberFormat('pt-BR',{
                                            style:'currency',
                                            currency:'BRL'
                                         }).format(summary.withdraw)}</strong>
            </div>
            <div className="green">
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="Total" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR',{
                                            style:'currency',
                                            currency:'BRL'
                                         }).format(summary.total)}</strong>
            </div>
        </Container>
    )
}