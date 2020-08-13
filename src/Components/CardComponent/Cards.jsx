import React from 'react'
import CardComponent from './CardComponent'
import img1 from './CSGO.jpg'
import img2 from './Dishonored2.jpg'
import img3 from "./Grand-Theft-Auto-V-5-GTA-5-PC.jpg";
import img4 from './Portal2cover.jpg'
import img5 from './red Dead 2.jpg'
import img6 from './Skyrim.png'
import {TinderLikeCard} from 'react-stack-cards'
import Select from "react-select";

const optionsTinder = [
  { value: "swipeRight", label: "swipeRight" },
  { value: "swipeLeft", label: "swipeLeft" },
  { value: "swipeRightRotate", label: "swipeRightRotate" },
  { value: "swipeLeftRotate", label: "swipeLeftRotate" },
  { value: "swipeDown", label: "swipeDown" },
  { value: "swipeDownLeft", label: "swipeDownLeft" },
  { value: "swipeDownRight", label: "swipeDownRight" },
  { value: "swipeTop", label: "swipeTop" },
  { value: "swipeTopLeft", label: "swipeTopLeft" },
  { value: "swipeTopRight", label: "swipeTopRight" },
  { value: "swipeFallDown", label: "swipeFallDown" },
  { value: "swipeFallTop", label: "swipeFallTop" },
  { value: "swipeThrowRight", label: "swipeThrowRight" },
  { value: "swipeThrowLeft", label: "swipeThrowLeft" },
  { value: "swipeThrowTop", label: "swipeThrowTop" },
  { value: "swipeThrowDown", label: "swipeThrowDown" },
  { value: "swipeCornerTopRight", label: "swipeCornerTopRight" },
  { value: "swipeCornerTopLeft", label: "swipeCornerTopLeft" },
  { value: "swipeCornerDownLeft", label: "swipeCornerDownLeft" },
  { value: "swipeCornerDownRight", label: "swipeCornerDownRight" },
];

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directionTinder: "swipeCornerDownRight",
      isOpen: false,
    };
    this.Tinder = null;
  }

  onSelect(elem) {
    this.setState({ directionToggle: elem.value });
  }

  onSelectTinder(elem) {
    this.setState({ directionTinder: elem.value });
  }

  onTinder() {
    this.Tinder.swipe();
  }

  render() {
    const first = img1;
    const second = img2;
    const third = img3;
    const fourth = img4;
    const fifth = img5;
    const sixth = img6;
    const arr = [first, second, third, fourth,fifth,sixth];
    let arr1 = [first, second, third, fourth,fifth,fifth];
    for (let i = 0; i < 50; i++) {
      arr1 = arr1.concat(arr);
    }

    return (
      <div className="main">
        <div className="cards">
          <div className="tinderLikeDiv">
            <Select
              className="toggleSelect"
              options={optionsTinder}
              value={this.state.directionTinder}
              onChange={this.onSelectTinder.bind(this)}
              placeholder={
                this.state.directionTinder === ""
                  ? "Select animation"
                  : this.state.directionTinder
              }
            />
            <TinderLikeCard
              images={arr1}
              width="350"
              height="240"
              direction={this.state.directionTinder}
              ref={(node) => (this.Tinder = node)}
              className="tinder"
            />
            <button className="btnTinder" onClick={this.onTinder.bind(this)}>
                Press Me
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// <div className="container-fluid d-flex justify-content-center">
//         <div className="row">
//           <div className="col-md-4 d-flex align-items-stretch">
//             <CardComponent
//               imgsrc={img1}
//               title="CS GO"
//               text="Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago.
//                         CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.)."
//             />
//           </div>
//           <div className="col-md-4 d-flex align-items-stretch">
//             <CardComponent
//               imgsrc={img2}
//               title="Dishonored 2"
//               text="Reprise your role as a supernatural assassin in Dishonored 2. 
//                         Praised by PC Gamer as “brilliant”, IGN as “amazing” and “a super sequel, IGN as “amazing” and “a superb sequel”, declared a “masterpiece” by Eurogamer, and hailed “a must-play revenge tale among the best in its class” by Game Informer, Dishonored 2 is the follow up to Arkane Studio's first-person action blockbuster and winner of more than 100 'Game of the Year' awards, Dishonored."
//             />
//           </div>
//           <div className="col-md-4 d-flex align-items-stretch">
//             <CardComponent
//               imgsrc={img3}
//               title="Grand Theft Auto 5"
//               text="When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody, least of all each other."
//             />
//           </div>
//           <div className="col-md-4 d-flex align-items-stretch">
//             <CardComponent
//               imgsrc={img4}
//               title="Portal 2"
//               text="The single-player portion of Portal 2 introduces a cast of dynamic new characters, a host of fresh puzzle elements, and a much larger set of devious test chambers. Players will explore never-before-seen areas of the Aperture Science Labs and be reunited with GLaDOS, the occasionally murderous computer companion who guided them through the original game."
//             />
//           </div>
//           <div className="col-md-4 d-flex align-items-stretch">
//             <CardComponent
//               imgsrc={img5}
//               title="Red Dead Redemption 2"
//               text="Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him."
//             />
//           </div>
//           <div className="col-md-4 d-flex align-items-stretch">
//             <CardComponent
//               imgsrc={img6}
//               title="Skyrim"
//               text="Winner of more than 200 Game of the Year Awards, Skyrim Special Edition brings the epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons with all-new features like remastered art and effects, volumetric god rays, dynamic depth of field, screen-space reflections, and more. Skyrim Special Edition also brings the full power of mods to the PC and consoles. New quests, environments, characters, dialogue, armor, weapons and more – with Mods, there are no limits to what you can experience."
//             />
//           </div>
//         </div>
//       </div>


export default Cards