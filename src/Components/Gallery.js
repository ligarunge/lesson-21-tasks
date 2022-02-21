import { useState } from "react"

function Gallery() {

    const [image, setImage] = useState('/images/gato2.jpg')
    const showImage2 = () => {
        setImage('/images/gato2.jpg')
    }
    const showImage3 = () => {
        setImage('/images/gato3.jpg')
    }
    const showImage5 = () => {
        setImage('/images/gato5.jpg')
    }
    const showImage6 = () => {
        setImage('/images/gato6.jpg')
    }
    const showImage7 = () => {
        setImage('/images/gato1.jpg')
    }
    const showImage8 = () => {
        setImage('/images/gato8.jpg')
    }

    return(
        <div className="col-md-4">
            <div className="row">
                <div className="col-12">
                    <img className="img-fluid rounded" src={image} alt="cat" ></img>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-4">
                    <img className="img-fluid rounded" src="/images/gato2.jpg" alt="cat" onMouseEnter={showImage2}></img>
                </div>
                <div className="col-md-4">
                    <img className="img-fluid rounded" src="/images/gato3.jpg" alt="cat" onMouseEnter={showImage3}></img>
                </div>
                <div className="col-md-4">
                    <img className="img-fluid rounded" src="/images/gato5.jpg" alt="cat" onMouseEnter={showImage5}></img>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-4">
                    <img className="img-fluid rounded" src="/images/gato6.jpg" alt="cat" onMouseEnter={showImage6}></img>
                </div>
                <div className="col-md-4">
                    <img className="img-fluid rounded" src="/images/gato1.jpg" alt="cat" onMouseEnter={showImage7}></img>
                </div>
                <div className="col-md-4">
                    <img className="img-fluid rounded" src="/images/gato8.jpg" alt="cat" onMouseEnter={showImage8}></img>
                </div>
            </div>
        </div>
    ) 
 
}
export default Gallery