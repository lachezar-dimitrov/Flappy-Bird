"use client";

import Game from "@/components/Game/Game";
import AppStore from "@/store/AppStore";

export default function TicTacToePage() {
    const store = new AppStore();

    return <Game draws={store.draws} players={store.players} status={store.status} store={store} />;
}
