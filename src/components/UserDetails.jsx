import PropTypes from "prop-types"

export const UserDetails = ({user, id}) => (
    <div>{user.name} {user.lastName} with id {id * 10} is waving you</div>
)

UserDetails.propTypes = {
    user: PropTypes.object.isRequired,
}

