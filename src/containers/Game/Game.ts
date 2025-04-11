import Game, { GameProps } from "../../components/Game/Game";
import connect from "../StoreInjector";

// export default connect<GameProps>((store) => ({
//     draws: store.draws,
//     status: store.status,
//     players: store.players,
//     winnerSymbol: store.winnerSymbol,
//     currentPlayerIndex: store.currentPlayerIndex,
// }))(Game);

export default Game;
