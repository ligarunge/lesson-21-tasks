import { useState } from "react"

function Gallery() {

    const [image, setImage] = useState('/images/gato2.jpg')
    const showImage = (image) => {
        setImage(image)
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
                    <img className="img-fluid rounded" src="/images/gato2.jpg" alt="cat" onMouseEnter={() => showImage('/images/gato2.jpg')}></img>
                </div>
                <div className="col-md-4">
                    <img className="img-fluid rounded" src="/images/gato3.jpg" alt="cat" onMouseEnter={showImage}></img>
                </div>
                <div className="col-md-4">
                    <img className="img-fluid rounded" src="/images/gato5.jpg" alt="cat" onMouseEnter={showImage}></img>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-4">
                    <img className="img-fluid rounded" src="/images/gato6.jpg" alt="cat" onMouseEnter={showImage}></img>
                </div>
                <div className="col-md-4">
                    <img className="img-fluid rounded" src="/images/gato1.jpg" alt="cat" onMouseEnter={showImage}></img>
                </div>
                <div className="col-md-4">
                    <img className="img-fluid rounded" src="/images/gato8.jpg" alt="cat" onMouseEnter={showImage}></img>
                </div>
            </div>
        </div>
    ) 
 
}
export default Gallery
