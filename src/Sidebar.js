import { Button, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import './Sidebar.css'
import SidebarOption from './SidebarOption';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';


const Sidebar = () => {

    const dispatch = useDispatch()
    return ( 
        <div className="sidebar">
         <Button 
          onClick={()=> dispatch(openSendMessage())} 
          className='sidebar__compose' 
          startIcon={<AddIcon fontSize="large"/>}
          >
          Compose
          </Button>

         <SidebarOption selected={true} Icon={InboxIcon} title="Inbox" number={54}/>
         <SidebarOption Icon={StarIcon} title="Inbox" number={54}/>
         <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={54}/>
         <SidebarOption Icon={LabelImportantIcon} title="Important" number={54}/>
         <SidebarOption Icon={NearMeIcon} title="Sent" number={54}/>
         <SidebarOption Icon={NoteIcon} title="Drafts" number={54}/>
         <SidebarOption Icon={ExpandMoreIcon} title="More" number={54}/>

         <div className="sidebar__footer">
          <div className="sidebar__footerIcons">
           <IconButton>
            <PersonIcon/>
           </IconButton>

           <IconButton>
            <DuoIcon/>
           </IconButton>

           <IconButton>
            <PhoneIcon/>
           </IconButton>
          </div>
         </div>
        </div>
     );
}
 
export default Sidebar;