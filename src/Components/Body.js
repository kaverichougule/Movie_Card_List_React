import "./Body.css";
import data from "./data.json";
import Card from "./Card";
export default function Body(){
    return(
        <div className="container">
            {
                data.map((currEle)=>{
                    return <Card MovieName={currEle.title} year={currEle.release_date} backgroundImg={currEle.backdrop_path} director={currEle.director} poster={currEle.poster_path} runtime={currEle.runtime} genres={currEle.genres} overview={currEle.overview}/>
                })
            }
        </div>
    );
}

