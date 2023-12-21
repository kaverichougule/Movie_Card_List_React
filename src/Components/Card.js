import "./Card.css"
export default function Card(props){
    return(
        //style={{background-image:linear-gradient(#ffffffb3,#ffffffb3),url({props.backdrop_path})}}
        <div className="Card">
            <div className="section1">
                <div className="poster">
                    <img src={props.poster} alt="Image Poster" className="posterImg"/>
                </div>
                <div className="nameSection">
                    <p>{props.MovieName}</p>
                    <p>{props.year}, {props.director}</p>
                    <div className="timing">
                        <p>{props.runtime} min</p>
                        <p>
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
        </div>
    );
}