import { useParams } from "react-router-dom";
import { posts } from "../data";


const Post = () => {
    const param = useParams();
    const post = posts[param.id-1];
    return ( 
        <header>
            <div className="post">
                <img src={ post.img } alt="" className="post-img" />
                <h1 className="post-title">{ post.title }</h1>
                <p className="post-desc"> { post.desc }</p>
                
            </div>
        </header>
    );
}
 
export default Post;