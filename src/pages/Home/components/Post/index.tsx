import { Children, ReactNode, useEffect, useState } from "react";
import { Profile, PostContainer, Info, Line, ConfirmDeleteComment } from "./styled";
import { Comment, IComment } from '../Comment';
import { v4 as uuidv4,} from 'uuid';




export function Post( ){
const [comment, setComment] = useState<string>("")
const [comments, setComments] = useState([] as IComment[])




function handleNewComment(){
    const newComment = {
        id: uuidv4(),
        content: comment
    }
    setComments([newComment, ...comments])
    setComment("")
}

function handleDeleteComment(id:string){
    const commentListWithoutCommentDeleted = comments.filter(comment => comment.id !== id)
    setComments(commentListWithoutCommentDeleted)
}


    return(
        <PostContainer>

            <Profile>
                <img src="https://avatars.githubusercontent.com/u/8683378?v=4" alt="" />
                <div>
                    <h2>Jane Cooper</h2>
                    <span>UI Designer</span>
                </div>
            </Profile>

            <Info>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>github.com/JaneCooper</p>
            </Info>

            <Line />

            <h2 className="textFeedback">Deixe seu feedback</h2>
            <textarea value={comment} onChange={(event) => setComment(event.target.value)} placeholder="Escreva um comentário..." className="textArea" cols={30} rows={10}></textarea>
            <button disabled={comment === ""} onClick={() => handleNewComment()} className="buttonPublic">Publicar</button>  

            
            {comments.map(item => (
                <Comment key={item.id} comment={item} onDeleteComment={handleDeleteComment}/>
            ))}


            {/* <ConfirmDeleteComment>
                <h2>Excluir comentário</h2>
                <p>Você tem certeza que gostaria de excluir este comentário?</p>
                <div>
                    <button className="Cancelar">Cancelar</button>
                    <button className="Excluir">Sim, excluir</button>
                </div>
            </ConfirmDeleteComment> */}
           
    
        </PostContainer>
    )
}
