import style from './ChatTextBox.module.css'
import { Input } from 'gray-matter'


function ChatTextBox ()
{
    // const sendMsgIcon = <svg className={style.sendIcon__init_fill}
    //         width="189"
    //         height="184"
    //         viewBox="0 0 189 184"
    //         xmlns="http://www.w3.org/2000/svg">
    //     <path
    //         fill-rule="evenodd"
    //         clip-rule="evenodd"
    //         d="M85.8621 90.0479L56.2882 50.1258C54.3088 47.4538 53.3191 46.1178 53.8275 45.5134C54.3359 44.909 55.8216 45.6554 58.7931 47.1481L153.76 94.8559C155.366 95.6628 156.169 96.0663 156.159 96.6935C156.15 97.3208 155.335 97.6995 153.705 98.4569L78.6972 133.308C77.016 134.089 76.1754 134.48 75.688 134.07C75.2005 133.66 75.4414 132.764 75.9232 130.974L86.3871 92.0956L118.042 94.5992C118.592 94.6427 119.074 94.2317 119.118 93.6811C119.161 93.1306 118.75 92.6489 118.2 92.6054L85.8621 90.0479Z"/>
    //     </svg>

        
    return (
        <div >
            <input className={style['lol']}
              type="text"
              placeholder="Type your message..."
            />
            {/* {sendMsgIcon} */}
        </div>
    )

}

export default ChatTextBox;
