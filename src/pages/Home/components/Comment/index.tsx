import { ThumbsUp, Trash } from "phosphor-react";
import { ReactNode, useState } from "react";
import { CommentContainer, Feedback } from "./styled";


export interface IComment {
    id:string,
    content:string,
    publishedAt:string,
    avatarUrl:string,
    login:string
}

interface ICommentProps{
    comment: IComment,
    onDeleteComment: (id:string) => void
}


export function Comment({ comment, onDeleteComment }:ICommentProps) {
const [countLike, setCountLike] = useState<number>(0)
 


function countOfLike() {
    const quantityLike =  countLike + 1
    setCountLike(quantityLike)
}

function handleDeleteComment(){
    onDeleteComment(comment.id)
}


    return(
        <CommentContainer>
           
            <img src={comment.avatarUrl} alt="" />

            <Feedback>
                <div>
                    <h2>{comment.login}</h2>
                    <span>{comment.publishedAt}</span>
                </div>

                <div className="Comment">
                    {comment.content}
                </div>
                
                <button onClick={()=>handleDeleteComment()}>
                    <Trash size={24} weight="regular" />
                </button>
            </Feedback>

            <button className={countLike > 0 ? 'buttonLikeActive' : 'buttonLikeDesactive'} onClick={() => countOfLike()} >
                <ThumbsUp size={16} />
                <span>{`Aplaudir • ${countLike}`}</span>
            </button>
        </CommentContainer>
    )
}