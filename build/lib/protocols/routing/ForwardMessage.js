"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForwardMessage = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const AgentMessage_1 = require("../../agent/AgentMessage");
const messages_1 = require("./messages");
/**
 * @see https://github.com/hyperledger/aries-rfcs/blob/master/concepts/0094-cross-domain-messaging/README.md#corerouting10forward
 */
class ForwardMessage extends AgentMessage_1.AgentMessage {
    /**
     * Create new ForwardMessage instance.
     *
     * @param options
     */
    constructor(options) {
        super();
        this.type = ForwardMessage.type;
        if (options) {
            this.id = options.id || this.generateId();
            this.to = options.to;
            this.message = options.message;
        }
    }
}
ForwardMessage.type = messages_1.MessageType.ForwardMessage;
__decorate([
    class_validator_1.Equals(ForwardMessage.type),
    __metadata("design:type", Object)
], ForwardMessage.prototype, "type", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], ForwardMessage.prototype, "to", void 0);
__decorate([
    class_transformer_1.Expose({ name: 'msg' }),
    __metadata("design:type", Object)
], ForwardMessage.prototype, "message", void 0);
exports.ForwardMessage = ForwardMessage;
