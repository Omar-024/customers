import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { HiDotsHorizontal } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { Link } from 'react-router-dom';

export default function Proceduers({deleteCustomer , customer}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    deleteCustomer(customer.id)
  };
  const handleCloseEdit = () => {
    setAnchorEl(null);
  
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        
      >
       <HiDotsHorizontal />
      </Button>
      <Menu
      
        id="fade-menu"
        slotProps={{
          list: {
            'aria-labelledby': 'fade-button',
          },
        }}
        slots={{ transition: Fade }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} sx={{width:"200px" , display:"flex" , justifyContent:"end" , alignItems:"center"}}>
        <div className='flex items-center gap-2'>
            <p className='text-blue-500'>حذف </p>
            <MdDelete className=' text-[18px]' />
        </div>
        </MenuItem>
      <Link to={`/customers/${customer.id}/edit`}>

        <MenuItem onClick={handleCloseEdit} sx={{width:"200px" , display:"flex" , justifyContent:"end" , alignItems:"center"}}>
    
        <div className='flex items-center gap-2'>
            <p className='text-blue-500'> تعديل </p>
            <HiOutlinePencilSquare  className=' text-[18px]' />
        </div>
       
        </MenuItem>
        </Link>
        
       
      </Menu>
    </div>
    
  );
}
