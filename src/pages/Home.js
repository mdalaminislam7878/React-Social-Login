import Card from "../components/Card";
import { posts } from "../data";
const Home = () => {
    return (  
        <div className="home">
            <section className="product">   
                { posts.map((post) => (
                    <Card key={post.id} post= { post }/>
                ))}
            </section>
        </div>
    );
}
 
export default Home;