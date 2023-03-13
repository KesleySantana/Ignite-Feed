import { List, PencilSimpleLine } from "phosphor-react";
import { HeaderContainer, HomeContainer, AsideProfile, BodyContainer, MainContainer } from "./styled";
import  backgroundImageFolhas  from  "../../assets/backgroundImage.png";
import { Post } from "./components/Post";
import { Comment } from "./components/Comment";
import { useState } from "react";
import { v4 as uuidv4,} from 'uuid';





export function Home() {




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
            <img className="Avatar" src="https://avatars.githubusercontent.com/u/8683378?v=4" alt="" />
              <h2>Kesley Santana</h2>
              <span>Dev Front-End</span>
            <span className="line"></span>
            <button><PencilSimpleLine className="PencilIcon" size={20} />Editar seu perfil</button>
          </div>   
        </AsideProfile>
      
        <MainContainer>
          <Post/>       
          <Post/> 
        </MainContainer>       
        
      </BodyContainer>


    </HomeContainer>
  )
}