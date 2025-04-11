import Box, { Props } from "../../../../components/Game/Board/Box/Box";
import connect from "../../../StoreInjector";

// export default connect<Props>((store) => ({
//     winnerSymbol: store.winnerSymbol,
//     players: store.players,
//     currentPlayerIndex: store.currentPlayerIndex,
//     handleBoxClick: store.handleBoxClick,
// }))(Box);
export default Box;
