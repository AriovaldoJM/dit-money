import * as DialogPrimitive from '@radix-ui/react-dialog';
import {CloseButton, Content, Overlay} from './styles';
import { X } from 'phosphor-react';

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

                    <button type='submit'>
                        Cadastrar
                    </button>
                </form>
                
            </Content>
        </DialogPrimitive.Portal>
    )
}