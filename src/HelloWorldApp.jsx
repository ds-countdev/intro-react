import PropTypes from "prop-types";
import {Title} from "./components/Title";
import { UserDetails } from "./components/UserDetails";

export const HelloWorldApp = ({user, id, title, book}) => {
    return (<>
        <Title title = {title} />
        <UserDetails user = {user} id = {id} />
        <div> {book} </div>  
        </>);
}

HelloWorldApp.propTypes = {
    book: PropTypes.string.isRequired,
}

HelloWorldApp.defaultProps = {
    book: 'uml tier by tier',
}







