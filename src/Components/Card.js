import cards from "../Data/cards";

function Card(props) {

    const title = props.title; 
    const color = props.color;
    const price = props.price;
    const line1 = props.line1;
    const line2 = props.line2;
    const line3 = props.line3;
    const line4 = props.line4;
    const button = props.button;



    return (
        <div className="card mb-4 box-shadow">
            <div className="card-header" style={{backgroundColor:color}}>
                <h4>{title}</h4>
            </div>
            <div className="card-body">
                <h1 className="card-title pricing-card-title">{price}
                <small className="text-muted">/ mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                    <li>{line1}</li>
                    <li>{line2}</li>
                    <li>{line3}</li>
                    <li>{line4}</li>
                </ul>
                <button type="button" className="btn btn-lg btn-block btn-outline-primary">{button}</button>
            </div>
        </div>
    )
}
export default Card