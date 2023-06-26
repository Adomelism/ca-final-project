
const Card = ({title, imageUrl, info, author}) => {

  return (
    <div className="card-container">
        <div className="image-container">
            <img src={imageUrl} alt={title}></img>
        </div>
        <div className="card-content">
            <div className="card-title">
                <h2>{author}</h2>
                <h3>{title}</h3>
            </div>
            <div className="card-body">
                <p>{info}</p>
            </div>
        </div>
       
    </div>
  )
}

export default Card