import { List, PencilSimpleLine } from "phosphor-react";
import { HeaderContainer, HomeContainer, AsideProfile, BodyContainer, MainContainer } from "./styled";
import  backgroundImageFolhas  from  "../../assets/backgroundImage.png";
import { IPost, Post } from "./components/Post";
import { Comment } from "./components/Comment";
import { useEffect, useState } from "react";
import { v4 as uuidv4,} from 'uuid';




const posts:IPost[] = [
  {
    id:1,
    // date: new Date(),
    author:{
      name:'Julia Khusainova',
      role: 'UI Designer',
      avatarUrl: 'https://avatars.githubusercontent.com/u/849971?v=4',
    },
    content:{
      greeting: 'Fala galeraa 👋',
      paragraph: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      gitHub: 'https://github.com/Julia',
    }
  },
  {
    id:2,
    // date: new Date(),
    author:{
      name:'Alexandre Santos',
      role: 'Dev Back-end',
      avatarUrl: 'https://avatars.githubusercontent.com/u/209983?v=4',
    },
    content:{
      greeting: 'Fala galeraa 👋',
      paragraph: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      gitHub:'https://github.com/AlexandreSantos'
    }
  }
]


export function Home() {
const [profile, setProfile] = useState([] as any)


useEffect(() => {
    fetch('https://api.github.com/users/KesleySantana')
    .then(response => response.json())
    .then(data => setProfile([data]))

},[])




  return(
    <HomeContainer>

      <HeaderContainer>
        {/* <div className="icon"><List size={32} /></div> */}
        <h1>Ignite Feed</h1>
      </HeaderContainer>

      <BodyContainer>
        <AsideProfile>
          <div><img  src={backgroundImageFolhas} alt=""/></div>
          <div>


            <img className="Avatar" src="https://avatars.githubusercontent.com/u/110929963?v=4" alt="" />
              <h2>Kesley Santana</h2>
              <span>Dev Front-End</span>
            <span className="line"></span>
            <button><PencilSimpleLine className="PencilIcon" size={20} />Editar seu perfil</button>
          </div>   
        </AsideProfile>
      
        <MainContainer>
          {posts.map(item => (
            <Post key={item.id} id={item.id} author={item.author} content={item.content} />
          ))}
        </MainContainer>       
        
      </BodyContainer>


    </HomeContainer>
  )
}