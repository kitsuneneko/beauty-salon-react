import OffersItem from "./offers-item";

const OffersList = ({ data }) => {
    const elements = data.map( item => {
        const { id, ...itemProps} = item;
        console.log(itemProps);

        return( 
            <div key={id} className="offers-item">
                <OffersItem { ... itemProps }/>
            </div>
        );
    });

    return(
        <div className="offers-list">
            { elements }
        </div> 
    );
};

export default OffersList;