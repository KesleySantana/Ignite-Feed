import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        :focus{
            outline: 0;
        }
    }

    body{
        background-color: ${(props) => props.theme["gray1 (background)"]};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* width: 100%;
        height: 100%; */
    }

    input, textarea, button {
        border: none;
    }   

    h1, h2, p, span {
        user-select: none;
    }
`;