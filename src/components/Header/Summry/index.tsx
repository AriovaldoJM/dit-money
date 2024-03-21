import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummuryCard, SummuryContainer } from "./styles";

export function Summary() {
    return (
        <SummuryContainer>
            <SummuryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b37e" />
                </header>
                <strong>R$ 17.000,00</strong>
            </SummuryCard>
            <SummuryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#f75a68" />
                </header>
                <strong>R$ 17.000,00</strong>
            </SummuryCard>
            <SummuryCard variant="green">
                <header>
                    <span>Entradas</span>
                    <CurrencyDollar size={32} color="#fff" />
                </header>
                <strong>R$ 17.000,00</strong>
            </SummuryCard>
        </SummuryContainer>
    )
}