import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "./server/api";

    interface Transactions{
        id:number;
        title: string;
        amount: number;
        type:string;
        category:string;
        createAt:string;
    }
    interface TransactionsInput{
        title: string;
        amount: number;
        type:string;
        category:string;
    }
    interface TrasactionsProviderProps{
        children: ReactNode
    }
    interface TrasactionsContexData{
        transactions:Transactions[];
        createTransactions:(trasaction:TransactionsInput)=>void;
    }
  
    export const TrasactionContext = createContext<TrasactionsContexData>({} as TrasactionsContexData);

    export function TransactionProvider({children}:TrasactionsProviderProps){
        const [transactions, setTransactions] = useState<Transactions[]>([]);
        useEffect(()=>{
            api.get("/transactions")
            .then(response => setTransactions(response.data.transactions))
        },[]);
        function createTransactions(trasaction:TransactionsInput){
            api.post('/transactions', trasaction)
        }
        return(
            <TrasactionContext.Provider value={{transactions,createTransactions}}>
                {children}
            </TrasactionContext.Provider>
        )
    }

