import "./featuredProperties.css";

const FeaturedProperties = () => {

  return (
    <div className="fp">
    
        <>
            <div className="fpItem" >
              <img
                src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
                alt=""
                className="fpImg"
              />
              <span className="fpName"></span>
              <span className="fpCity"></span>
              <span className="fpPrice">Starting from $</span>
              {<div className="fpRating">
                <button></button>
                <span>Excellent</span>
              </div>}
            </div>
            <div className="fpItem" >
              <img
                src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
                alt=""
                className="fpImg"
              />
              <span className="fpName"></span>
              <span className="fpCity"></span>
              <span className="fpPrice">Starting from $</span>
              {<div className="fpRating">
                <button></button>
                <span>Excellent</span>
              </div>}
            </div>
            <div className="fpItem" >
              <img
                src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
                alt=""
                className="fpImg"
              />
              <span className="fpName"></span>
              <span className="fpCity"></span>
              <span className="fpPrice">Starting from $</span>
              {<div className="fpRating">
                <button></button>
                <span>Excellent</span>
              </div>}
            </div>
        </>
      
    </div>
  );
};

export default FeaturedProperties;
