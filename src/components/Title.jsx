import PropTypes from "prop-types";

export const Title = ({title}) => (
        <h1> {title} </h1>
    )


Title.propTypes = {
    title: PropTypes.string.isRequired,
}

Title.defaultProps = {
    title: 'hello!!'
}