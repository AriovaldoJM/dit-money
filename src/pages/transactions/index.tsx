import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "../../components/SearchForrm";
import { PriceHightLight, TransactionsContainer, TransactionsTable } from "./styles";
import { useContext } from "react";
import { TransactionsContext } from "../../context/TransactionsContex";
import { dateFormatter, priceFormatter } from "../../utils/formatter";



export function Transactions(){
    const {transactions} = useContext(TransactionsContext)
    return (
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        {transactions.map(transaction =>{
                            return (
                                <tr key={transaction.id}>
                                    <td width="50%">{transaction.description}</td>
                                    <td>
                                    <PriceHightLight variant={transaction.type}> 
                                    {transaction.type == 'outcome' && '- '}
                                    {priceFormatter.format(transaction.price)}
                                    </PriceHightLight>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{dateFormatter.format(new Date(transaction.createdAd))}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}