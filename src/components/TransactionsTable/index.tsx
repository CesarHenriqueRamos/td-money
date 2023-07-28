import { useEffect, useState } from "react";
import { Container } from "./styles";
import { api } from "../../server/api";

interface Transactions{
    id:number;
    title: string;
    amount: number;
    type:string;
    category:string;
    createAt:string;
}

export function TransactionsTable(){
    const [transactions, setTransactions] = useState([]);
    useEffect(()=>{
        api.get("/transactions")
        .then(response => setTransactions(response.data))
    },[]);
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
                        transactions.map((item:Transactions) => {
                            return(
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td className={item.type}>R$ {item.amount}</td>
                                    <td>{item.category}</td>
                                    <td>{item.createAt}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>                

            </table>
        </Container>
    )
}