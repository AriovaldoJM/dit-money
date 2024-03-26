import * as DialogPrimitive from '@radix-ui/react-dialog';
import {CloseButton, Content, Overlay, TransactionTypeButton, TransactionType} from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

export function NewTransactioModal() {
    return (
        <DialogPrimitive.Portal >
            <Overlay />
            <Content>
                <DialogPrimitive.Title>Nova Transação</DialogPrimitive.Title>
                <CloseButton>
                    <X size={24}/>
                </CloseButton>
                <form action=''>
                    <input type="text" placeholder='Descrição' required />
                    <input type="number" placeholder='Preço' required />
                    <input type="text" placeholder='Categoria' required />

                    <TransactionType>
                        <TransactionTypeButton variant='income' value='income'>
                            <ArrowCircleUp size={24} />
                            Entrada
                        </TransactionTypeButton>
                        <TransactionTypeButton variant='outcome' value='outcome'>
                            <ArrowCircleDown size={24} />
                            Saída
                        </TransactionTypeButton>
                    </TransactionType>

                    <button type='submit'>
                        Cadastrar
                    </button>
                </form>
                
            </Content>
        </DialogPrimitive.Portal>
    )
}