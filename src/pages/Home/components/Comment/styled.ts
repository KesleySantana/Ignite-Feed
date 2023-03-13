import styled from "styled-components";


export const CommentContainer = styled.div`
    display: grid;
    grid-template-columns: 3.5rem auto;
    grid-template-rows: auto auto;
    width: 100%;
    gap: 1rem;
    grid-template-areas: 
        "areaImage areaFeedback"
        ". areaLike"
    ;


    img {
            box-sizing: initial;
            width:3rem;
            height: 3rem;
            border-radius: 8px;
            border: 4px solid ${(props) => props.theme["gray2 (cards)"]};
            outline: 2px solid ${(props) =>  props.theme["green-light"]};
            grid-area: areaImage;
        }


    .buttonLikeDesactive{
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        width: 7rem;
        height: 1.25rem;
        background: transparent;
        color: ${(props) => props.theme["gray5 (text-apoio)"]};

        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 0.8rem;
        cursor: pointer;
        grid-area: areaLike;

        &:hover{
          color: ${(props) => props.theme["gray7 (text-titles)"]};
        }
    }

    .buttonLikeActive{
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        width: 7rem;
        height: 1.25rem;
        background: transparent;
        color: ${(props) => props.theme["gray5 (text-apoio)"]};

        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 0.8rem;
        cursor: pointer;
        grid-area: areaLike;
        color: ${(props) => props.theme["green-light"]};
    }
`;

export const Feedback = styled.div`
    display: grid;
    grid-template-columns: auto 1.5rem;
    grid-template-rows: auto auto;
    grid-template-areas: 
        "areaInfo areaForDelete"
        "areaOfComment areaOfComment"
    ;
    padding: 1rem;
    border-radius: 9px;
    width: 100%;
    height: 7.5rem;
    background-color: ${(prosp)=> prosp.theme["gray (cards-apoio)"]};
    grid-area: areaFeedback;

    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.3rem;
        grid-area: areaInfo;

        h2{
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            font-size: 0.8rem;
            color: ${(props) => props.theme["gray7 (text-titles)"]};
        }

        span{
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 0.75rem;
            color: ${(props) => props.theme["gray5 (text-apoio)"]};           
        }
    }

    .Comment{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 0.75rem;
        color: ${(props) => props.theme["gray7 (text-titles)"]};
        grid-area: areaOfComment;
    }   

    button{
        width: 1.5rem;
        height: 1.5rem;
        grid-area: areaForDelete;
        background: transparent;
        color: ${(props) => props.theme["gray5 (text-apoio)"]};
        transition: 0.1s;
        cursor: pointer;

        &:hover{
           color: ${(props) => props.theme["red-danger"]};
        }
    }
`;