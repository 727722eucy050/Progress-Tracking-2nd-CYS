import React from 'react'
import "./App.css"
//import img from '../src/image/Skcet pic.jpg'
// const App = () => {
  
//   return (
//     <div className='one'>
//     <div id='b'>
//     <h3>Sri Harini P</h3>
//     <h4>Sri Krishna College Of Engineering And Technology</h4>
//     <h4>Cyber Security</h4>
//     </div>
//     <img src={img} alt = 'not found'></img>
//     <div id='v'><iframe width="560" height="315" src="https://www.youtube.com/embed/JVK5rQ_gX6w?si=PM-WmQrQmaohDY_M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
//     <div id='link'> Webpage of skcet
//     <a href='https://www.skcet.ac.in/'>www.skcet,ac,in</a></div>
//     </div>
    
//     )
    
//   }


// export default App


function App(){
  return <Greeting name='Harini'/>
}
function Greeting(props){
  return (
    <h1>
      Hello,{props.name}! Nice to meet you!
    </h1>
  );
}

export default App;