import { Container } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";

export function TransactionsTable(){
    const {transactions} = useTransactions()
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        transactions.map((item) => {
                            return(
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td className={item.type}>
                                        {new Intl.NumberFormat('pt-BR',{
                                            style:'currency',
                                            currency:'BRL'
                                         }).format(item.amount)}
                                    </td>
                                    <td>{item.category}</td>
                                    <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(item.createAt))}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>                

            </table>
        </Container>
    )
}