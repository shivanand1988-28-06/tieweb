import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';
import Menu from '@mui/icons-material/Menu';
import Search from '@mui/icons-material/Search';

export default function DrawerDefault() {
  const [open, setOpen] = React.useState(false);
  const scrollTop = (element)=>{
    const objDiv = document.getElementsByClassName("ttl") ;
   objDiv.scroll= objDiv.scrollHeight ;
  } 
  const scrollAbout = (element)=>{
    setOpen(false);
    window.scrollTo({top:600 ,left : 0 , behavior:'smooth'}); ;
  } 
  const scrollMyservices = (element)=>{
    setOpen(false);
     window.scrollTo({top:1300 ,left : 0 , behavior:'smooth'}) ;
  } 
  const scrollSkills = (element)=>{
    setOpen(false)
    window.scrollTo({top:2300,left : 0 , behavior:'smooth'}) ;
  } 
  const scrollFunfacts = (element)=>{
    setOpen(false)
    window.scrollTo({top:3100 ,left : 0 , behavior:'smooth'}) ;
  } 
  const scrollexperiences = (element)=>{
    setOpen(false)
    window.scrollTo({top:4000 ,left : 0 , behavior:'smooth'}) ;
  } 
  const scrollprojects = (element)=>{
    setOpen(false)
    window.scrollTo({top:6300 ,left : 0 , behavior:'smooth'}) ;
  } 
  const scrollhow = (element)=>{
    setOpen(false)
    window.scrollTo({top:9000 ,left : 0 , behavior:'smooth'}) ;
  } 

  
  const scrollContact = (element)=>{
    setOpen(false)
    window.scrollTo({top:11000 ,left : 0 , behavior:'smooth'}) ;
  } 
  

  return (
    <React.Fragment>
      <IconButton variant="solid"  color="success" onClick={() => setOpen(true)}>
        <Menu sx = {{margin:2}}/>
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            ml: 'auto',
            mt: 1,
            mr: 2,
          }}
        >
          <Typography
            component="label"
            htmlFor="close-icon"
            sx={{ fontSize: 'sm', fontWeight: 'lg', cursor: 'pointer' }}
          >
            Close
          </Typography>
          <ModalClose id="close-icon" sx={{ position: 'initial' }} />
        </Box>
        <Input
          size="sm"
          placeholder="Search"
          variant="plain"
          endDecorator={<Search />}
          slotProps={{
            input: {
              'aria-label': 'Search anything',
            },
          }}
          sx={{
            m: 3,
            borderRadius: 0,
            borderBottom: '2px solid',
            borderColor: 'neutral.outlinedBorder',
            '&:hover': {
              borderColor: 'neutral.outlinedHoverBorder',
            },
            '&::before': {
              border: '1px solid var(--Input-focusedHighlight)',
              transform: 'scaleX(0)',
              left: 0,
              right: 0,
              bottom: '-2px',
              top: 'unset',
              transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
              borderRadius: 0,
            },
            '&:focus-within::before': {
              transform: 'scaleX(1)',
            },
          }}
        />
        <List
          size="lg"
          component="nav"
          sx={{
            flex: 'none',
            fontSize: 'xl',
            '& > div': { justifyContent: 'center' },
          }}
        >
          <ListItemButton sx={{ fontWeight: 'lg' }} onClick={()=>{scrollTop()}}>Top</ListItemButton>
          <ListItemButton onClick={()=>scrollAbout() }>About Me</ListItemButton>
          <ListItemButton onClick={()=>{scrollMyservices()}}>My Services</ListItemButton>
          <ListItemButton onClick={()=>{scrollSkills()}}>Skills</ListItemButton>
          <ListItemButton onClick = {()=>scrollFunfacts()}>Fun Facts</ListItemButton>
          <ListItemButton  onClick = {()=>scrollexperiences()}>Experiences</ListItemButton>
          <ListItemButton onClick = {()=>{scrollprojects()}}>Projects</ListItemButton>
          <ListItemButton onClick = {()=>{scrollhow()}}>How I Work</ListItemButton>
        
          <ListItemButton sx = {{fontWeight : "lg" }}onClick={()=>scrollContact()}>Contact Me</ListItemButton>
          <ListItemButton>Leave A Message</ListItemButton>
        </List>
      </Drawer>
    </React.Fragment>
  );
}