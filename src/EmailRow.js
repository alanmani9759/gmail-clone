import { Checkbox, IconButton } from "@mui/material";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import { useHistory } from 'react-router-dom'

import './EmailRow.css'
import { useDispatch } from "react-redux";
import { selectedMail } from "./features/mailSlice";

const EmailRow = ({ title, subject, description, time, id }) => {
    const history = useHistory()

    const dispatch = useDispatch()

    const openMail = ()=>{
        dispatch(selectedMail({
            title, 
            subject, 
            description, 
            time, 
            id
        }))
        history.push("/mail")
    }
    return ( 
         <div onClick={openMail} className="emailRow">
          
          <div className="emailRow__options">
           <Checkbox/>
           <IconButton>
            <StarBorderOutlinedIcon/>
           </IconButton>

           <IconButton>
           <LabelImportantOutlinedIcon/>
          </IconButton>
          </div>
          <div className="emailRow__title">
           {title}
          </div>
 
          <div className="emailRow__message">
           <h4>{subject}
            <span className="emailRow__description">-{description}</span>
           </h4>
          </div>
 
          <p className="emailRow__time">
           {time}
          </p>
         </div>
         
     );
}
 
export default EmailRow;