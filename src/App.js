import './App.css';
import YoutubeList from './component/youtube/YoutubeList';
// import { Youtubedata } from './Youtubedata';
// import YoutubeItem from './component/youtube/YoutubeItem';
function App() {
  return (
  //   <div className="list">
  //     <YoutubeItem thumnail1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEuqR1GM8kj5fu8FXQjcgpAX3E81AB3Ksi4Fbe-XPz&s"
  //               title1="le si thuan"
  //               author1="LST"
  //               avatar1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEuqR1GM8kj5fu8FXQjcgpAX3E81AB3Ksi4Fbe-XPz&s"></YoutubeItem>
      
  //     <YoutubeItem thumnail1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEuqR1GM8kj5fu8FXQjcgpAX3E81AB3Ksi4Fbe-XPz&s"
  //               title1="le si thuan"
  //               author1="LST"
  //               avatar1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEuqR1GM8kj5fu8FXQjcgpAX3E81AB3Ksi4Fbe-XPz&s"></YoutubeItem>
  //     <YoutubeItem thumnail1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEuqR1GM8kj5fu8FXQjcgpAX3E81AB3Ksi4Fbe-XPz&s"
  //               title1="le si thuan la ai tỏng"
  //               author1="LST"
  //               avatar1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEuqR1GM8kj5fu8FXQjcgpAX3E81AB3Ksi4Fbe-XPz&s"></YoutubeItem>
  //   <YoutubeItem thumnail1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEuqR1GM8kj5fu8FXQjcgpAX3E81AB3Ksi4Fbe-XPz&s"
  //               title1="le si thuan la ai tỏng IT"
  //               author1="LST"
  //               avatar1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEuqR1GM8kj5fu8FXQjcgpAX3E81AB3Ksi4Fbe-XPz&s"></YoutubeItem>
  //  <YoutubeItem thumnail1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEuqR1GM8kj5fu8FXQjcgpAX3E81AB3Ksi4Fbe-XPz&s"
  //               title1="le si thuan la ai tỏng IT"
  //               author1="LST"
  //               avatar1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEuqR1GM8kj5fu8FXQjcgpAX3E81AB3Ksi4Fbe-XPz&s"></YoutubeItem>
  //   </div>  
 

  // <div className="youtubelist">
  //               {
  //                   Youtubedata.map((item,index) => {
  //                       return( 
  //                       <YoutubeItem
  //                           id={item.id}
  //                           thumnail1={item.thumnail}
  //                           title1={item.title}
  //                           author1={item.author}
  //                           avatar1={item.avatar}>
                    
  //                       </YoutubeItem>
  //                       );
                   
  //                   }
  //                   )
  //               }
  //           </div>

  <YoutubeList>
    <h2>children props</h2>
  </YoutubeList>
  );

  }
// function YoutubeItem(props){
//   return(
  // <div>
  //   <div className="image">
  //     <div className="thumnail">
  //       <img src={props.thumnail1} alt="" className="imge" />
  //     </div>
      
  //   </div>
  //   <div className="footer">
  //       <div className="avatar">
  //         <img src={props.avatar1} alt="" />
  //       </div>
  //       <div className="infor">
  //         <h3 className="title">{props.title1}</h3>
  //         <h4 className="author">{props.author1}</h4>
  //       </div>
  //     </div>
  // </div>
  
  // )

// };
export default App;
