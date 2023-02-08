
export const FriendListItem = ({avatar, name, isOnline}) => {
    console.log("🚀 ~ avatar", avatar);
    
    return (
        <li class="item">
  <span class="status"></span>
  <img class="avatar" 
  src={avatar}
  alt="User avatar" width="48" />
  <p class="name">{name}</p>
</li>
    )
}