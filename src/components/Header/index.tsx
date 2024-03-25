import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as DialogPrimitive from '@radix-ui/react-dialog';

import logoImg from '../../assets/logo.svg'
import { NewTransactioModal } from "../NewTransactionModal";

export function Header() {
    return (
        <div>
            <HeaderContainer>
                <HeaderContent>
                    <img src={logoImg} alt="" />
                    <DialogPrimitive.Root>
                        <DialogPrimitive.Trigger asChild>
                            <NewTransactionButton>Nova Transação</NewTransactionButton>
                        </DialogPrimitive.Trigger>
                        <NewTransactioModal/>
                    </DialogPrimitive.Root>
                </HeaderContent>
            </HeaderContainer>
        </div>
    )
}