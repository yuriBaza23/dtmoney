import { darken, transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: .25rem;

        border: 1px solid #D7D7D7;
        background: #E7E9EE;

        font-weight: 400px;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type='submit'] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: var(--shape);
        border-radius: .25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        transition: filter .2s;

        &:hover {
            filter: brightness(.9);
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: .5rem;
`;

interface ITypeButtonProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    green: '#33CC95',
    red: '#E52E4D'
}

export const TypeButton = styled.button<ITypeButtonProps>`
    height: 4rem;
    border: 1px solid #D7D7D6;
    border-radius: .25rem;

    background: ${(props) => props.isActive 
        ? transparentize(.9, colors[props.activeColor])
        : 'transparent'};

    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color .2s;

    img {
        width: 20px;
        height: 20px;
    }

    span {
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title);
    }

    &:hover {
        border-color: ${darken(.1, '#D7D7D7')}
    }
`;