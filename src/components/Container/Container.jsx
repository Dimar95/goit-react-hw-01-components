import { Profile } from "components/Profile/Profile";
import PropTypes from "prop-types"

export const Container = ({user}) => {
   return (<div><Profile 
    key={user.tag} 
    username={user.username} 
    tag={user.tag} 
    location={user.location} 
    avatar={user.avatar} 
    stats={user.stats}/></div>
    
    )

}

Container.propTypes = {
    user: PropTypes.object
}

// {
//     username: PropTypes.string.isRequired, 
//     tag: PropTypes.string.isRequired, 
//     location: PropTypes.string.isRequired, 
//     avatar: PropTypes.string.isRequired, 
//     stats: propTypes.string.isRequired
// }