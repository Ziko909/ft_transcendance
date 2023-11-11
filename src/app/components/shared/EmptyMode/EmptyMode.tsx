import { useEffect } from 'react';
import SadBubbleIcon from  '../../../../../public/images/icons/sad.png'
import style from "./EmptyMode.module.css";
import socket from '../../../socket/socket';
import { discussionPanelSelectType } from '../../../interfaces/DiscussionPanel';
import { useHandleJoinDm } from '../../../../../hooks/useHandleJoinChannel';


interface EmptyDiscussionModeProps {
  selectedDiscussion:discussionPanelSelectType,
  currentRoute :"Direct_messaging" | "Channels",
  setDiscussionIsEmpty: React.Dispatch<React.SetStateAction<boolean>>
}
function EmptyDiscussionMode({selectedDiscussion, currentRoute, setDiscussionIsEmpty}: EmptyDiscussionModeProps) {

    let errorMesg;
    let correctionRequest;
    let joinButton;
    
    console.log('EmptyDiscussionMode ')
    useHandleJoinDm(selectedDiscussion)
    useEffect(()=>{
      const handleShowBar = ()=>{
        console.log("new message");

        setDiscussionIsEmpty(false);
      }
      socket.on("newMessage", handleShowBar);
      return () => {
        socket.off("newMessage", handleShowBar);
      };
    }, [selectedDiscussion]);

    if (currentRoute === "Channels")
    {
      errorMesg = "You currently aren't a member of any channel.";
      correctionRequest = "Please create or join a channel to start chatting";
      joinButton = "Join a channel";
    }
    else
    {
      errorMesg = "You have no discussion to show.";
      correctionRequest = "Send messages to your friends to start chatting";
      joinButton = "Start a discussion";

    }
    const navigateToCreateChannel = () => {
      window.location.href = '/chat/CreateChannel';
  }
  
  const navigateToMainChat = () => {
      window.location.href = '/chat/';
  }
  
    return (
      <div className={style.discussion_empty_mode}>
        <h2 className={style.discussion_empty_mode__title}>No discussions available</h2>
        <img src={SadBubbleIcon.src} />

        <p className={style.discussion_empty_mode__text}>
          {errorMesg} 
          <br />
        </p>
        <div className={style.discussion_empty_mode_navigation}>
          <label className={style.discussion_empty_mode__label}>
            {correctionRequest}
          </label>
          <div className={style.discussion_empty_mode_nav_buttons}>
            {
                currentRoute === "Channels" &&
            <button className={style.discussion_empty_mode__button}
             onClick={navigateToCreateChannel}>
              Create a channel
            </button>
            }
            <button className={style.discussion_empty_mode__button}
                onClick={navigateToMainChat}>
                   {joinButton}

            </button>
          </div>
        </div>
      </div>
    );
  }
  

export default EmptyDiscussionMode;
