// import React, { ReactNode, createContext, Component } from "react";
// import AppStore from "../../store/AppStore";

// type Props = {
//     store: AppStore;
//     children: ReactNode;
// };

// export const StoreContext = createContext<AppStore | null>(null);

// export default class StoreProvider extends Component<Props> {
//     render(): ReactNode {
//         const { children, store } = this.props;

//         return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
//     }
// }
