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
exports.TrustPingMessage = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const AgentMessage_1 = require("../../agent/AgentMessage");
const messages_1 = require("./messages");
const helpers_1 = require("../../helpers");
/**
 * Message to initiate trust ping interaction
 *
 * @see https://github.com/hyperledger/aries-rfcs/blob/master/features/0048-trust-ping/README.md#messages
 */
class TrustPingMessage extends AgentMessage_1.AgentMessage {
    /**
     * Create new TrustPingMessage instance.
     * responseRequested will be true if not passed
     * @param options
     */
    constructor(options) {
        super();
        this.type = TrustPingMessage.type;
        if (options) {
            this.id = options.id || this.generateId();
            this.comment = options.comment;
            this.responseRequested = options.responseRequested !== undefined ? options.responseRequested : true;
            if (options.timing) {
                this.setTiming({
                    outTime: options.timing.outTime,
                    expiresTime: options.timing.expiresTime,
                    delayMilli: options.timing.delayMilli,
                });
            }
        }
    }
}
TrustPingMessage.type = messages_1.MessageType.TrustPingMessage;
__decorate([
    class_validator_1.Equals(TrustPingMessage.type),
    __metadata("design:type", Object)
], TrustPingMessage.prototype, "type", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], TrustPingMessage.prototype, "comment", void 0);
__decorate([
    helpers_1.Default(true),
    class_validator_1.IsBoolean(),
    class_transformer_1.Expose({ name: 'response_requested' }),
    __metadata("design:type", Boolean)
], TrustPingMessage.prototype, "responseRequested", void 0);
exports.TrustPingMessage = TrustPingMessage;
