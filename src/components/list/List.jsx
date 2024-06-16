import ChatList from "./chatlist/Chatlist";
import "./list.css"
import UserInfo from "./userinfo/Userinfo";


const List = () => {
    return ( 
        <div className="list">
            <UserInfo/>
            <ChatList/>
        </div>
     );
}
 
export default List;