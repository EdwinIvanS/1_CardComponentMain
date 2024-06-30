import { useEffect, useState } from "react";
import { fetchCardData } from "../Hooks/fetchCardData";
import Card from "./Card";

 const CardContainer: React.FC = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        const loadData = async () => {
          try {
            const data = await fetchCardData();
            setCards(data);
          } catch (error) {
            console.error(error);
          }
        };
        loadData();
      }, []);
      
  return (
    <div className="main-container">
        {cards.map((card) => (
          <Card key={card.id} 
          imagen={card.imagen}
          name={card.name}
          description={card.description} />
        ))}
    </div>
  )
}

export default CardContainer;