declare type IdGenerator = () => string;
declare type IdGeneratorFactory = (prefix: string) => IdGenerator;
export declare class UniqueIdFactory {
    private idGeneratorFactory;
    private idGenerators;
    constructor(idGeneratorFactory: IdGeneratorFactory);
    nextId(prefix: string): string;
}
export declare function globalIdGeneratorFactory(prefix?: string): () => string;
export {};
