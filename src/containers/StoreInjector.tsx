// /* eslint-disable react/jsx-props-no-spreading */
// /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// /* eslint-disable @typescript-eslint/explicit-function-return-type */
// import React, { Component, ReactNode, ComponentClass, FunctionComponent } from "react";
// import { observer } from "mobx-react";
// import { StoreContext } from "../components/StoreProvider/StoreProvider";
// import AppStore from "../store/AppStore";

// type MapStoreToProps<P> = (store: AppStore) => Partial<P>;

// export const connect =
//     <P,>(mapStoreToProps: MapStoreToProps<P>) =>
//     (ComposedComponent: FunctionComponent<P>) => {
//         @observer
//         class Container extends Component<Partial<P>> {
//             render(): ReactNode {
//                 const propsFromStore = mapStoreToProps(this.context);

//                 const props = {
//                     ...this.props,
//                     ...propsFromStore,
//                 };

//                 return <ComposedComponent {...(props as P)} />;
//             }
//         }

//         Container.contextType = StoreContext;

//         return Container;
//     };

// export default connect;
