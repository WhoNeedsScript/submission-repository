import MessageType from "../model/message/messagetype";
import "../index.css"

const Notification = ({ message }) => {

    if (message === null) {
      return null
    }
  
    return (
      <div className={`notification ${message.type.valueOf().description}`}>
        {message.message}
      </div>
    )
  }
export default Notification