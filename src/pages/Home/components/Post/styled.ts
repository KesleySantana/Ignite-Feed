import styled from "styled-components";


export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 3rem ;
    gap: 1.5rem;
    background-color: ${(props) => props.theme["gray2 (cards)"]};
    /* width: 52rem; */
    width: 100%;
    height: auto;
    border-radius: 8px;

    .textFeedback{
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 1rem;
        color: ${(props) => props.theme["gray7 (text-titles)"]};
    }

    .textArea{
        width: 100%;
        height: 6rem;
        background: ${(props) => props.theme["gray1 (background)"]};
       
        border-radius: 8px;
        resize: none;
        color: ${(props) => props.theme["gray6 (text)"]};
        padding: 1rem;

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;

        &:focus{
            border: 1px solid ${(props) =>  props.theme["green-light"]};
        }
    }

    .buttonPublic{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 6.7rem;
        height: 3.5rem;
        background: ${(props) => props.theme.green};
        border-radius: 8px;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 1rem;
        color: ${(props) => props.theme.white};
        cursor: pointer;

        &:hover{
            background: ${(props) => props.theme["green-light"]};  
        }

        &:disabled{
            display: none;
        }
    }
`;

export const Profile = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    img {
        box-sizing: initial;
        width:3rem;
        height: 3rem;
        border-radius: 8px;
        border: 4px solid ${(props) => props.theme["gray2 (cards)"]};
        outline: 2px solid ${(props) =>  props.theme["green-light"]};
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;

        h2{
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            font-size: 1rem;
            color: ${(props) => props.theme["gray7 (text-titles)"]};
        }

        span{
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 0.85rem;
            color: ${(props) => props.theme["gray5 (text-apoio)"]};
        }
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme["gray6 (text)"]};

    a:last-child{
        text-decoration: none;
        color: ${(props) => props.theme["green-light"]};
        cursor: pointer;
    }
`;

export const Line = styled.span`
    width: 100%;
    height: 0.800px;
    background-color: ${(props) => props.theme["gray3 (divider)"]};
`;


export const ConfirmDeleteComment = styled.div`
   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 20rem;
    height: 15rem;
    background: ${(props) => props.theme["gray2 (cards)"]};
    border-radius: 8px;


    h2{
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 1.5rem;
        text-align: center;
        color: ${(props) => props.theme["gray7 (text-titles)"]};
    }
    p{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        text-align: center;
        color: ${(props) => props.theme["gray6 (text)"]};
    }
    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        width: 16.6rem;
        height: 3rem;
    }

    button{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 50%;
        height: 100%;
        cursor: pointer;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 0.87rem;
        text-align: center;
        transition: 0.1s;

        &:hover{
            background: ${(props) => props.theme["gray (cards-apoio)"]};
        }
    }

    .Cancelar{
        background: transparent;
        border-radius: 8px;
        color: ${(props) => props.theme["gray7 (text-titles)"]};
    }
    .Excluir{
        background: transparent;
        border-radius: 8px;
        color: ${(props) => props.theme["red-danger"]};
    }
`;
