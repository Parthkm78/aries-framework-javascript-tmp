import { Constructor } from '../utils/mixins';
export declare const MessageIdRegExp: RegExp;
export declare const MessageTypeRegExp: RegExp;
export declare type BaseMessageConstructor = Constructor<BaseMessage>;
export declare class BaseMessage {
    id: string;
    readonly type: string;
    static readonly type: string;
    generateId(): string;
}
