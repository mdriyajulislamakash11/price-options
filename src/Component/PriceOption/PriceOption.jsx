import PropTypes from "prop-types";
import Features from "../Features/Features";


const PriceOption = ({ option }) => {
    console.log(option)

    const { name, price, features } = option;

    return (
        <div className="bg-blue-600 flex flex-col rounded-md text-white p-4">
            <h1 className="text-center">
                <span className="text-7xl font-bold">{price}</span>
                <span className="text-2xl">/mon</span>
            </h1>
            <h4 className="text-3xl text-center my-8">{name}</h4>

            <div className="pl-4 flex-grow">
                {
                    features.map(feature => <Features key={feature.id} feature={feature}></Features>)
                }
            </div>

             <button className="MT-12 bg-green-400 w-full hover:bg-green-800 py-2 font-bold rounded-lg text-white mt-5">Buy Now</button>   
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;