import styled from "styled-components";


export const HomeContainer = styled.body`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 98.9vw;
    gap: 1rem;
`;

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 6rem;
    background-color: ${(props) => props.theme["gray2 (cards)"]};

    /* .icon{
        
    } */

    h1{
        width: auto;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 1.5rem;
        color: ${(props) => props.theme["gray7 (text-titles)"]};
    }

    /* @media(max-width: 800px){

        .icon{
            display: block;
            color: ${(props) => props.theme["gray7 (text-titles)"]};
            cursor: pointer;
        }
    } */
`;

export const BodyContainer = styled.body`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    width: 70%;
    gap: 2rem;

    @media(max-width:800px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const AsideProfile = styled.aside` 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: ${(props) => props.theme["gray2 (cards)"]};
    width: 35%;
    height: 18rem;
    border-radius: 8px;
    position: relative;

    @media(max-width:800px){
        display: none;
    }

    div:first-child{
        position: absolute;
        top: 0%;
        width: 100%;
        height: 4rem;
        background-color: white;
        border-radius: 8px 8px 0 0 ;
        
        img{
            width: 100%;
            height: 100%;
        }
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 80%;
        position: relative;

        .Avatar{
            box-sizing: initial;
            width:3rem;
            height: 3rem;
            border-radius: 8px;
            border: 4px solid ${(props) => props.theme["gray2 (cards)"]};
            outline: 2px solid ${(props) =>  props.theme["green-light"]};
        }

        h2{
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            font-size: 1rem;
            text-align: center;
            color: ${(props) => props.theme["gray7 (text-titles)"]};
        }

        span{
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 0.87rem;
            text-align: center;
            color: ${(props) => props.theme["gray5 (text-apoio)"]};

        }

        .line{
            width: 100%;
            height: 0.800px;
            background-color: ${(props) => props.theme["gray3 (divider)"]};
        }

        button{
            background-color: transparent;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 10px;

            /* width: 12rem; */
            width: 80%;
            height: 3rem;

            border: 1px solid #00B37E;
            border-radius: 8px;

            cursor: pointer;

            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            font-size: 80%;
            color: ${(props) => props.theme["green-light"]};
            transition: 0.1s;

            &:hover {
                background: ${(props) => props.theme.green};
                color: ${(props) => props.theme.white};
                border: none;
            }
        }
    }
`;

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2rem;
`;