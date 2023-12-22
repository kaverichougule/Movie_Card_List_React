import "./Card.css"
export default function Card(props){
    return(
        //style={{background-image:linear-gradient(#ffffffb3,#ffffffb3),url({props.backdrop_path})}}
        <div className="Card"  style={{backgroundImage:`linear-gradient(to right, #050000 60%, transparent), url(${props.backgroundImg})`}} >
            <div className="section1" >
                <div className="poster">
                    <img src={props.poster} className="posterImg" alt="" />
                </div>
                <div className="nameSection">
                    <div>
                        <p className="MovTitle">{props.MovieName}</p>
                        <p className="yearDir">{props.year}, {props.director}</p>
                    </div>
                    <div className="timing">
                        <p className="time">{props.runtime} min</p>
                        <p className="genres">
                            {props.genres.map((item, idx) => {
                                if (idx === 0) {
                                    return <span>{item.name} </span>;
                                } else {
                                    return <span>, {item.name}</span>;
                                }
                            })}
                        </p>
                    </div>
                </div>
            </div>
            <div className="section2">
                <p>{props.overview}</p>
            </div>
            <div className="section3">
                <i class="fa-solid fa-share-nodes"></i>
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-message"></i>
            </div>
        </div>
    );
}