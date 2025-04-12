type Factory<T> = () => T & { src: string } & HTMLElement;

export class AssetLoader {
    private static cache = new Map<string, unknown>();

    static async load<T>(src: string, factory: Factory<T>): Promise<T> {
        if (this.cache.has(src)) {
            return this.cache.get(src) as T;
        }

        const asset = factory();
        asset.src = src;

        await new Promise<void>((resolve, reject) => {
            asset.onload = () => resolve();
            asset.onerror = () => {
                console.error(`Failed to load asset: ${src}`);
                reject(`Failed to load asset: ${src}`);
            };
        });

        this.cache.set(src, asset);
        return asset;
    }

    static async loadAll<T extends Record<string, string>, U>(
        sources: T,
        factory: Factory<U>,
    ): Promise<Record<keyof T, U>> {
        const entries = await Promise.all(
            Object.entries(sources).map(async ([key, path]) => [key, await this.load(path, factory)]),
        );
        return Object.fromEntries(entries) as Record<keyof T, U>;
    }
}
