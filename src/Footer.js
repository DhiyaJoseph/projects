function Footer(props) {
    var buttonText=" "
    if(props.available){
        buttonText="ADD TO CART"
    }
    else{
        buttonText="SOLD OUT" 
    }
    return (
        
                <div className="one">
                    <img src={props.image} className="one" alt="images"/>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <h3>{props.price}</h3>
                    <button className="btn">{buttonText}</button>
                </div>

           
   )}
export default Footer