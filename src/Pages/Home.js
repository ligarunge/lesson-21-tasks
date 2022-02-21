import Card from "../Components/Card"
import cards from "../Data/cards";

function Home() {
    const cardsList = cards.map((card, index) => {
        return <Card key={index} title={card.title} price={card.price} features={card.features} button={card.button}/> 
    })
    
    return (
        <div className="container">
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Pricing</h1>
                <p className="lead">
                Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.
                </p>
            </div>
            <div className="card-deck mb-3 text-center">
                {cardsList}
            </div>
        </div>
    )
}
export default Home
