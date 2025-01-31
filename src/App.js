
import './App.css';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


import Sideline from './sideline';


import  DrawerDefault  from './drawer';

import video from "./assets/logo.mp4" ;
import { IoPlayForwardOutline } from "react-icons/io5";



import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';

import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import firstimage from "./assets/WhatsApp Image 2025-01-26 at 6.00.56 PM.jpeg" ;
import secondimage from "./assets/WhatsApp Image 2025-01-24 at 11.26.31 PM.jpeg" ;
import thirdimage from "./assets/WhatsApp Image 2025-01-24 at 11.19.14 PM.jpeg" ;
import fourthimage from "./assets/WhatsApp Image 2025-01-27 at 11.00.41 PM.jpeg" ;



import CallIcon from '@mui/icons-material/Call';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
function Projectcard() {
  
    return (
      <>
      <Card sx={{ minHeight: '380px', width: 600  }}>
        <CardCover>
          <img
           src = {firstimage} alt = ""
          />
        </CardCover>
        <CardCover
          sx={{
            
          }}
        />
        <CardContent sx={{ justifyContent: 'flex-end' }}>
          <Typography level="title-lg" textColor="#fff">
            WanderVista
          </Typography>
          <Typography
            startDecorator={<LocationOnRoundedIcon />}
            textColor="#fffff"
          >
            
          </Typography>
        </CardContent>
      </Card>
      
      </>
    );
  
  
  }

  function Projectcardtwo() {
  
    return (
      <>
      <Card sx={{ minHeight: '380px', width: 600 }}>
        <CardCover>
          <img
           src = {secondimage} alt = ""
          />
        </CardCover>
        <CardCover
          sx={{
            
          }}
        />
        <CardContent sx={{ justifyContent: 'flex-end' }}>
          <Typography level="title-lg" textColor="#fff">
          
          </Typography>
          <Typography
            startDecorator={<LocationOnRoundedIcon />}
            textColor="neutral.300"
          >
            
          </Typography>
        </CardContent>
      </Card>
      
      </>
    );
  
  
  }

  function Projectcardthree() {
  
    return (
      <>
      <Card sx={{ minHeight: '380px', width: 600 }}>
        <CardCover>
          <img
           src = {thirdimage} alt = ""
          />
        </CardCover>
        <CardCover
          sx={{
          }}
        />
        <CardContent sx={{ justifyContent: 'flex-end' }}>
          <Typography level="title-lg" textColor="#fff">
            
          </Typography>
          <Typography
            startDecorator={<LocationOnRoundedIcon />}
            textColor="neutral.300"
          >
          
          </Typography>
        </CardContent>
      </Card>
      
      </>
    );
  
  
  }

  function Projectcardfour() {
  
    return (
      <>
      <Card sx={{ minHeight: '500px', width: 200 }}>
        <CardCover>
          <img
           src = {fourthimage} alt = ""
          />
        </CardCover>
        <CardCover
          sx={{
           
          }}
        />
        <CardContent sx={{ justifyContent: 'flex-end' }}>
          <Typography level="title-lg" textColor="">
            SwiftDrop
          </Typography>
          <Typography
            startDecorator={<LocationOnRoundedIcon />}
            textColor="neutral.300"
          >
            
          </Typography>
        </CardContent>
      </Card>
      
      </>
    );
  
  
  }






let theme = createTheme({
  // Theme customization goes here as usual, including tonalOffset and/or
  // contrastThreshold as the augmentColor() function relies on these
});
theme = createTheme(theme, {
  // Custom colors created with augmentColor go here
  palette: {
    salmon: theme.palette.augmentColor({
      color: {
        main: '#3feb89',
      },
      
      name: 'salmon',
    }),
  },
});

function App() {
  const scrollTop = (element)=>{
    window.scrollTo({top:0 ,left : 0 , behavior:'smooth'}) ;
  } 
  const scrollAbout = (element)=>{
    window.scrollTo({top:800 ,left : 0 , behavior:'smooth'}) ;
  } 
  const scrollMyservices = (element)=>{
    window.scrollTo({top:1300 ,left : 0 , behavior:'smooth'}) ;
  } 
  const scrollSkills = (element)=>{
    window.scrollTo({top:2300,left : 0 , behavior:'smooth'}) ;
  } 
  const scrollFunfacts = (element)=>{
    window.scrollTo({top:3100 ,left : 0 , behavior:'smooth'}) ;
  } 
  const scrollexperiences = (element)=>{
    window.scrollTo({top:4500 ,left : 0 , behavior:'smooth'}) ;
  } 
  const scrollprojects = (element)=>{
    window.scrollTo({top:5950 ,left : 0 , behavior:'smooth'}) ;
  } 
  const scrollContact = (element)=>{
    window.scrollTo({top:8700 ,left : 0 , behavior:'smooth'}) ;
  } 

  function live (){
    window.location = "https://wondervista.in/" ;
  }
  function livetwo (){
    window.location = "https://dazzlegemm.com/" ;
  }
  function liveThree(){
    window.location = "https://google.com/" ;
  }

  return (
    <>
     
     <div className ="drawer">
        <DrawerDefault/>
      </div>
      <div className = "App"> 
        
     
        <div className = "titl">
       
          <h2>tie<span className='titlnet'>WEB</span></h2>
          <p>Let's create...</p>
        </div>
      <div className = "logo">
         <video controls autoPlay muted loop  >
          <source src = {video} type='video/mp4' ></source>
         </video>
         </div>
      
      <div><h3 className = "hi">Hi , I am a Freelancer .</h3></div>

      <div className = "wrapper">
              
          <h1 className = "content">
          <ol>
        
        <li><span>Programmer.</span></li>
        <li><span>Developer.</span></li>
        <li><span>Designer.</span></li>
      </ol>
          </h1>
        </div>
        <div className = "my">
           <div><ThemeProvider theme={theme}>
      <Stack sx={{ gap: 2, alignItems: 'start' }}>
        <Button variant="contained" color="salmon" size = "small" onClick = {scrollprojects}>
           My work
      </Button>
      
      </Stack>
      </ThemeProvider>
      </div>
     
      
      </div>
      
      <div className = "profilepic">
      
     
  
      </div> 
      
      
      
  
      {/* <div className="main">
    <div className="big-circle">
      <div className="icon-block">
        <div><LiaCodeSolid size = {30}/></div>
      </div>
      <div className="icon-block">
        <div>
          <LiaCodeSolid size = {30}/>
        </div>
      </div>
      <div className="icon-block">
        <div>
        <LiaCodeSolid size = {30}/>
        </div>
      </div>
      <div className="icon-block">
        <div>
        <LiaCodeSolid size = {30}/>
        </div>
      </div>
    </div>
    <div className="circle">
      <div className="icon-block">
        <div>
        <LiaCodeSolid size = {30}/>
        </div>
      </div>
      <div className="icon-block">
        <div>
        <LiaCodeSolid size = {30}/>
        </div>
      </div>
      <div className="icon-block">
      <div>
        <LiaCodeSolid size = {30}/>
        </div>
      </div>
      <div className="icon-block">
      <div>
        <LiaCodeSolid size = {30}/>
        </div>
      </div>
    </div>
     <div className="center-logo">
      <img src="https://www.yudiz.com/codepen/animated-portfolio/logo.png" alt="logo" />
    </div> 
  </div> */}
  
  <div className = "stickynav">
    
    <Button onClick = {scrollContact}>Contact Me</Button>
  <a onClick={scrollTop}> 01 Top</a> // eslint-disable-line no-use-before-define
  <a onClick={scrollAbout}>02 About Me</a> // eslint-disable-line no-use-before-define
  <a onClick = {scrollMyservices}>03 My Services</a> // eslint-disable-line no-use-before-define
  <a onClick={scrollSkills}>04 Skills</a> // eslint-disable-line no-use-before-define
  <a onClick={scrollFunfacts}>05 Fun Facts</a> // eslint-disable-line no-use-before-define
  <a onClick={scrollexperiences}>06 Experiences</a> // eslint-disable-line no-use-before-define
  <a onClick = {scrollprojects}>07 Projects</a> // eslint-disable-line no-use-before-define
  <a>08 How I Work</a>
  <a>09 Blogs</a>

</div>
      
      
<div className = "about">



<div className = "abouthead">
<div className = "anim">
  <Sideline/>
</div>
<h3>Some words About Me</h3>
<h1>Know More About Me</h1>
</div>
<div className = "headpara">
  <p> I am <span className='myname'> Shivanand Juyal </span> , I'm a designer & developer with a passion for web design.
     I enjoy developing simple, clean and slick websites that provide
      real value to the end user. Thousands of clients have procured 
      exceptional results while working with me. Delivering work 
      within time and budget which meets 
    client's requirements is our motto.</p>
    
    </div>

</div>

<div className = "services">

<div className = "serviceshead">
<div className = "anim">
  <Sideline/>
</div>
<h3>How Can I Help You In Your Next 
  Project.</h3>
<h1>What I Do</h1>
</div>
<div className = "servicescard">
 <div className = "firstcard">
  <h3>Developement</h3>
  <p> <IoPlayForwardOutline/>Frontend Developement</p>
   <p> <IoPlayForwardOutline/>Backend Developement</p>
   

   <p> <IoPlayForwardOutline/>Fullstack Developement</p>
<p> <IoPlayForwardOutline/>Database Management</p>
   <p><IoPlayForwardOutline/>API Integration Design</p>
 </div>
 <div className = "secondcard">
<h3>UI/UX Design</h3>
<p> <IoPlayForwardOutline/>Landing Pages</p>
   <p> <IoPlayForwardOutline/>Userflow</p>
   

   <p> <IoPlayForwardOutline/>Wireframing</p>
<p> <IoPlayForwardOutline/>Prototyping</p>
   <p><IoPlayForwardOutline/>Mobile App Design</p>
 </div>
 <div className = "secondcard">
<h3>APP Developement</h3>
<p> <IoPlayForwardOutline/>Android APP</p>
   <p> <IoPlayForwardOutline/>iOS App</p>
   

   <p> <IoPlayForwardOutline/>Wireframing</p>
<p> <IoPlayForwardOutline/>Prototyping</p>
   <p><IoPlayForwardOutline/>Mobile App Design</p>
 </div>

</div>
</div>
<div className = "skills">
    <div className = "skillshead">
       <div className = "anim">
        <Sideline/>
           </div>
             <h3>Developer Skills</h3>
                  <h1>My Experties </h1>
    </div>
    <div className = "headpara">
           <p>I Work with coding languges like  Javascript ,C ,C++ , DotNet . 
            My Experties are In Javascript NodeJS and ReactJS , React-native 
             FrameWork To Build App Projects and Websites.
             I  am accurate and always consider needs of 
             the users.My creativity helps me to develope 
             new solution and tackle unique problems .
             I beleive in exploring new approaches to 
             complex challenges.I analyze problems
              from different angles to find solution.</p>
    </div>
</div>
<div className = "skills">
<div className = "skillshead">
       <div className = "anim">
        <Sideline/>
           </div>
             <h3>Some Interesting facts about me</h3>
                  <h1>Fun Facts </h1>
    </div>
    <div className = "facts">
      <div><span className='num'>45</span><h3>Happy Clients</h3></div>
      <div><span className='num'>60</span><h3>Finished Project</h3></div>
      <div><span className='num'>1260</span><h3>working Hours</h3></div>
      </div>
</div>
<div className = "skills">
    <div className = "skillshead">
       <div className = "anim">
        <Sideline/>
           </div>
             <h3>Highlighting My Key Experiences</h3>
                  <h1>My Experiences </h1>
    </div>
    <div className = "headpara">
           
           <p>(2025-present)</p>
           <h3>Freelance Web Developer</h3>
           <p>Working on various freelancing projects, 
            creating custom websites for clients across 
            different industries. Improvising problem-solving 
            skills and adaptability to client needs.</p>
    </div>
    <div className = "headpara">
           
           <p>(2022-2024)</p>
           <h3>Senior Web Developer at Alphaware.</h3>
           <p>Spearheaded multiple web development projects, 
            enhancing user experience and functionality. 
            Led a team of developers to successfully 
            launch high-traffic websites.</p>
    </div>
    
    <div className = "headpara">
           
           <p>(2019-2022)</p>
           <h3>Front-End Developer at Alphaware</h3>
           <p>Developed responsive and interactive 
            front-end interfaces using HTML, CSS,
             and JavaScript. Collaborated closely 
             with designers to implement visually 
             appealing and user-friendly websites.</p>
    </div>
    <div className = "headpara">
           
           <p>(2016-2019)</p>
           <h3>Front-End Developer at Datmatix</h3>
           <p>Developed responsive and interactive 
            front-end interfaces using HTML, CSS,
             and JavaScript..</p>
    </div>
</div>
<div className = "projects">
<div className = "skillshead">
       <div className = "anim">
        <Sideline/>
           </div>
             <h3>Some Of My most Recent Projects .</h3>
                  <h1>My Featured Live Projects . </h1>
    </div>
    <div className = "procard">
         <h2>1.</h2>  <div className = "firstpro" ><Projectcard/><div className = "probutton"><Button onClick={live}>Watch LIVE</Button></div></div>
           <h2>2.</h2> <div className = "secondpro"><Projectcardtwo/><div className = "probutton"><Button onClick={livetwo}>Watch LIVE</Button></div></div>
           <h2>3.</h2> <div classname = "thirdpro"><Projectcardthree/><div className = "probutton"><Button onClick={livetwo}>Watch LIVE</Button></div></div>
          <h2>4.</h2> <div className = "fourthpro"><Projectcardfour/><div className = "probutton"><Button onClick={live}>Watch LIVE</Button></div></div>

    </div>
    <div className = "work">
    <div className = "skillshead">
       <div className = "anim">
        <Sideline/>
           </div>
             <h3>How I work .</h3>
                  <h1>My Working Process . </h1>
    </div>
    <div className = "workprocess">
         <div> <h3> 1  </h3><h3> IDEA</h3></div>
         <div> <h3>2  </h3><h3>SKETCH</h3> </div> 
        <div>  <h3>3 </h3><h3> DESIGN</h3> </div> 
         <div><h3>4  </h3><h3>DEVELOPE</h3> </div>
        <div> <h3>5 </h3> <h3>TEXT</h3> </div>
        <div> <h3>6  </h3><h3> LAUNCH</h3> </div>
    </div>
    </div>
    <div className = "contact" >
    <div className = "skillshead">
       <div className = "anim">
        <Sideline/>
           </div>
             <h3>Let's Get In Touch .</h3>
                  <h1>Contact me . </h1>
    </div>
    <div>

    </div>
    <div className = "call">
     <div>
      <CallIcon  fontSize='large'/>
      <h2>- +091 9324367599</h2>
      </div> 
    
    
    
      <div>
           <ContactMailIcon fontSize='large'/>
           <h2>juyals141@gmail.com</h2>
      </div>
      <div>
        <FacebookIcon fontSize='large'/>
        <InstagramIcon fontSize='large'/>
        <TwitterIcon fontSize='large'/>
      </div>
    </div>
   
    
    </div>

</div>

</div>

{/* <div className = "circleanima">
  <div className = "insideone">
   <div className = "insidetwo">
       <div className = "insidethree">
         <div className = "insidefour">
           
         </div>
       </div>
   </div>
  </div>
</div> */}
      </>  
  );
}

export default App;
