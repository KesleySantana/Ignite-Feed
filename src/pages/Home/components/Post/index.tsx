import { Children, ReactNode, useEffect, useState } from "react";
import { Profile, PostContainer, Info, Line, ConfirmDeleteComment } from "./styled";
import { Comment, IComment } from '../Comment';
import { v4 as uuidv4,} from 'uuid';

import { format, formatDistance, formatDistanceToNow, formatDistanceToNowStrict } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';


export interface IPost{
    id:number,  
    // date: any,
    author: {
        avatarUrl:string,
        name:string,
        role:string
    },
    content:{
        greeting:string,
        paragraph:string,
        gitHub:string
    }
}




export function Post( { author,id,content }:IPost ){
const [comment, setComment] = useState<string>("")
const [comments, setComments] = useState([] as IComment[])

const [gitHubProfilesComments, setGitHubProfilesComments] = useState({} as any)

const date = new Date()
const publishedDateFormated = format(date, "'Publicado às' HH:mm",{
    locale: ptBR
})

//Consultando API de usuários do GitHub
fetch('https://api.github.com/users')
    .then(async response =>{  
    var data = await response.json()
    var randomProfile = data[Math.floor(Math.random() * data.length)]
    setGitHubProfilesComments(randomProfile)
    })
    .catch(error => console.log(error))




function handleNewComment(){

    fetch('https://api.github.com/users')
    .then(async response =>{  
    var data = await response.json()
    var randomProfile = data[Math.floor(Math.random() * data.length)]
    setGitHubProfilesComments(randomProfile)
    })
    .catch(error => console.log(error))
    
    const newComment = {
        id: uuidv4(),
        content: comment,
        publishedAt: publishedDateFormated,
        avatarUrl: gitHubProfilesComments["avatar_url"],
        login: gitHubProfilesComments["login"]
    }
    setComments([...comments, newComment])
    setComment("")
}

function handleDeleteComment(id:string){
    const commentListWithoutCommentDeleted = comments.filter(comment => comment.id !== id)
    setComments(commentListWithoutCommentDeleted)
}


    return(
        <PostContainer>

            <Profile>
                <img src={author.avatarUrl} alt="" />
                <div>
                    <h2>{author.name}</h2>
                    <span>{author.role}</span>
                </div>
            </Profile>

            <Info>
                <p>{content.greeting}</p>
                <p>{content.paragraph}</p>
                <a href={"#"} target={""}>{`github.com/${author.name}`}</a>
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
