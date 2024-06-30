interface CardProps{
    ind : number;        
    name: string;
    imagen: string;
    description: string;
}

const Card : React.FC<CardProps> = ({imagen, name, description}) =>{   

  return (
    <div className="card-container">
        <div className="card">
            <img src={imagen} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <button></button>
        </div>
    </div>
  )
}

export default Card; 