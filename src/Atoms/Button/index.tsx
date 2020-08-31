import { ButtonHTMLAttributes } from 'react';
import styled from "styled-components";

export enum ETheme {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}
export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme: ETheme
}

export const Button = styled.button<IButton>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 12px;
    background-color: ${props => props.theme === ETheme.SECONDARY ? "#FFD146" : "transparent"};
    box-shadow:  ${props => props.theme === ETheme.SECONDARY && "#00000029 0 2px 3px"}; 
    border: 1px solid #FFD146;
    border-radius: 22px;
    color:  ${props => props.theme === ETheme.SECONDARY ? "#FFFFFF" : "#FFD146"};
    text-transform: uppercase;
    font-size: 16px;
    cursor: pointer;

    &[disabled] {
        background-color: ${props => props.theme === ETheme.SECONDARY ? "#CACEDB" : "transparent"};
        color:  ${props => props.theme === ETheme.SECONDARY ? "#FFFFFF" : "#CACEDB"};
        border: 1px solid #CACEDB;
        cursor: not-allowed;
    }

    &:active {
        background-color: ${props => props.theme === ETheme.SECONDARY ? "#ffc61b" : "#ffd1461c"};
    }
`