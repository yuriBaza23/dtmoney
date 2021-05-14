import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

type ITransactionInput = Omit<ITransaction, 'id' | 'createdAt'>

interface ITransaction {
    id: number;
    title: string;
    amount: number;
    category: string;
    type: string;
    createdAt: string;
}

interface ITransactionsContextData {
    transactions: ITransaction[];
    createTransaction: (transaction: ITransactionInput) => Promise<void>;
}

interface ITransactionsProviderProps {
    children: ReactNode;
}

const TransactionsContext = createContext<ITransactionsContextData>(
    {} as ITransactionsContextData
);

export function TransactionsProvider({ children }: ITransactionsProviderProps) {
    const [transactions, setTransactions] = useState<ITransaction[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(response =>  setTransactions(response.data.transactions))
    }, [])

    async function createTransaction(transactionInput: ITransactionInput) {
        const response = await api.post('transactions', transactionInput);
        const { transaction } = response.data;
        setTransactions([...transactions, transaction])
    }

    return(
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionsContext);

    return context;
}