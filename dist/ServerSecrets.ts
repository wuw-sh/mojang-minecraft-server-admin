import {SecretString} from "./SecretString";

export declare class ServerSecrets {
    readonly names: string[];
    get(name: string): SecretString
}