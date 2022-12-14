import { Checkbox, IconButton } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SettingsIcon from '@mui/icons-material/Settings';
import './EmailList.css'
import Section from './Section';
import EmailRow from './EmailRow';
import { useEffect, useState } from 'react';
import { db } from './firebase';

const EmailList = () => {
  const [emails, setEmails] = useState([])

   useEffect(()=>{
    db.collection('emails')
     .orderBy('timeStamp', 'desc')
     .onSnapshot(snapshot => setEmails(snapshot.docs.map(doc => (
      {
        id: doc.id,
        data: doc.data()
      }
    ))))
   },[])

    return ( 
        <div className="emailList">
         <div className="emailList__settings">
          <div className="emailList__settingsLeft">
           <Checkbox/>
           <IconButton>
            <ArrowDropDownIcon/>
           </IconButton>

           <IconButton>
           <RedoIcon/>
          </IconButton>

          <IconButton>
          <MoreVertIcon/>
         </IconButton>
          </div>

          <div className="emailList__settingRight">
           <IconButton>
            <ChevronLeftIcon/>
           </IconButton>

           <IconButton>
           <ChevronRightIcon/>
          </IconButton>

          <IconButton>
          <KeyboardHideIcon/>
         </IconButton>

         <IconButton>
         <SettingsIcon/>
        </IconButton>
          </div>

         </div>

         <div className="emailList__sections">
           <Section Icon={InboxIcon} title="Primary" color="red" selected />
           <Section Icon={PeopleIcon} title="Social" color="#1A73E8" selected />
           <Section Icon={LocalOfferIcon} title="Promotions" color="green" selected />
         </div>

         <div className="emailList__list">
          
          {emails.map(({ id, data: { to, message, subject, timeStamp } }) => (
            <EmailRow
             id={id}
             key={id}
             title={to}
             subject={subject}
             message={message}
             time={new Date(timeStamp?.seconds * 1000).toUTCString()}
            />
          ))}
          <EmailRow 
           title="twitch"
           subject="Hey man"
           description="hello mario"
           time="12:20pm"
          />

          <EmailRow 
          title="twitch"
          subject="Hey man"
          description="hello mario"
          time="12:20pm"
         />
         </div>
        </div>
     );
}
 
export default EmailList;