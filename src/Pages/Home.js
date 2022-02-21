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
                <Card title={cards[0].title} price={cards[0].price} line1={cards[0].line1} line2={cards[0].line2} line3={cards[0].line3} line4={cards[0].line4} button={cards[0].button}/> 
                <Card title={cards[1].title} price={cards[1].price} line1={cards[1].line1} line2={cards[1].line2} line3={cards[1].line3} line4={cards[1].line4} button={cards[1].button}/>
                <Card title={cards[2].title} price={cards[2].price} line1={cards[2].line1} line2={cards[2].line2} line3={cards[2].line3} line4={cards[2].line4} button={cards[2].button}/>
            </div>
        </div>
    )
}
export default Home
