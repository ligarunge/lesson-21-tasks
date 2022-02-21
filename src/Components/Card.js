import cards from "../Data/cards";

function Card(props) {
    const {title, color, price, button, features} = props;

//     const title = props.title; 
//     const color = props.color;
//     const price = props.price;
//     const button = props.button;
//     const features = props.features;

    const featureList = features.map((featre, index) => {
        reutrn <li key={index}>{featre}</li>
    })

    return (
        <div className="card mb-4 box-shadow">
            <div className="card-header" style={{backgroundColor:color}}>
                <h4>{title}</h4>
            </div>
            <div className="card-body">
                <h1 className="card-title pricing-card-title">{price}
                <small className="text-muted">/ mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                    {featureList}
                </ul>
                <button type="button" className="btn btn-lg btn-block btn-outline-primary">{button}</button>
            </div>
        </div>
    )
}
export default Card
