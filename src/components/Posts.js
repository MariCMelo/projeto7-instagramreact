export default function Posts(){
    const posts = [
        {account:"meowed",imgAvatar:"assets/img/meowed.svg", altAvatar:"meowed", imgPost:"assets/img/gato-telefone.svg", altPost:"gato-telefone", imgLike:"assets/img/respondeai.svg", altLike:"respondeai", accountLike:"respondeai", likeNumber:"1583"},
        {account:"barked",imgAvatar:"assets/img/barked.svg", altAvatar:"barked", imgPost:"assets/img/dog.svg", altPost:"dog", imgLike:"assets/img/adorable_animals.svg", altLike:"adorable_animals", accountLike:"adorable_animals",likeNumber:"523"},
    ]
    
    return(
        <div  className="posts">
            {posts.map((post) => (
                <Post
                    key={post.account}
                    avatarImage={post.imgAvatar}
                    avatarAlt={post.altAvatar}
                    postImage={post.imgPost}
                    postAlt={post.altPost}
                    likeImage={post.imgLike}
                    likeAlt={post.altLike}
                    likeNumber={post.likeNumber}
                    />
                    ))}   
        </div>
    );
}
    function Post(props){
        return(
            <div data-test="post" className="post">
            <div className="topo">
              <div className="usuario">
                <img data-test="post-image" src={props.avatarImage} alt={props.avatarAlt}/>
                {props.account}
            </div>
              <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div className="conteudo">
              <img src={props.postImage} alt={props.postAlt}/>
            </div>

            <div className="fundo">
              <div className="acoes">
                <div>
                  <ion-icon data-test="like-post" name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon data-test="save-post" name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div className="curtidas">
                <img src={props.likeImage} alt={props.likeAlt}/>
                <div className="texto">
                  Curtido por <strong>{props.accountLike}</strong> e <strong data-test="likes-number">outras {props.likeNumber} pessoas</strong>
                </div>
              </div>
            </div>
          </div>

        )
    }

   