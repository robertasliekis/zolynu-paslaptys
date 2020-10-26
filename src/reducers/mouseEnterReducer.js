const initialState = {
  personContainerOpen: false,
  videoContainerOpen: false,
  plantDisplay: false,
  clickedPlantIndex: 0,
  hovered: false,
  hoveredType: "",
  hoveredCornerRef: "",
  textScrollClicked: false,
};

const mouseEnter = (state = initialState, action) => {
  state.hovered = true;
  switch (action.type) {
    case "CORNER_VIDEO":
      return { ...state, hoveredCornerRef: action.payload.ref };
    default:
      return state;
  }
};

export default mouseEnter;

// mouseEnterHandler = (event, type, ref) => {
//   this.setState({ hovered: true, hoveredType: type });
//   switch (type) {
//     case "person":
//       ref.current.play();
//       break;
//     case "video":
//       ref.current.play();
//       break;
//     case "plant":
//       ref.current.play();
//       let clickedPlantId = event.target.id;
//       let clickedPlantIndex = clickedPlantId.replace("plant", "") - 1;
//       this.setState({
//         clickedPlantIndex: clickedPlantIndex,
//       });
//       break;
//     case "corner":
//       this.setState({ hoveredCornerRef: ref });
//       break;
//     default:
//   }
// };
