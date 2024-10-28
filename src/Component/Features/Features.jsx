import PropTypes from "prop-types";
import { IoCheckmarkCircle } from "react-icons/io5";

const Features = ({ feature }) => {
    console.log(feature)



    return (
        <div>
            <p className="flex items-center">
                <IoCheckmarkCircle
                    className="text-green-400 mr-2"
                ></IoCheckmarkCircle> {feature}</p>
        </div>
    );
};

Features.propTypes = {
    feature: PropTypes.object
}
export default Features;