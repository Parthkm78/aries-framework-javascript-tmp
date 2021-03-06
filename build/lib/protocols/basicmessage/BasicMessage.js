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
exports.BasicMessage = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const AgentMessage_1 = require("../../agent/AgentMessage");
const messages_1 = require("./messages");
class BasicMessage extends AgentMessage_1.AgentMessage {
    /**
     * Create new BasicMessage instance.
     * sentTime will be assigned to new Date if not passed, id will be assigned to uuid/v4 if not passed
     * @param options
     */
    constructor(options) {
        super();
        this.type = BasicMessage.type;
        if (options) {
            this.id = options.id || this.generateId();
            this.sentTime = options.sentTime || new Date();
            this.content = options.content;
            this.addLocale(options.locale || 'en');
        }
    }
}
BasicMessage.type = messages_1.MessageType.BasicMessage;
__decorate([
    class_validator_1.Equals(BasicMessage.type),
    __metadata("design:type", Object)
], BasicMessage.prototype, "type", void 0);
__decorate([
    class_transformer_1.Expose({ name: 'sent_time' }),
    class_transformer_1.Type(() => Date),
    class_validator_1.IsDate(),
    __metadata("design:type", Date)
], BasicMessage.prototype, "sentTime", void 0);
__decorate([
    class_transformer_1.Expose({ name: 'content' }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], BasicMessage.prototype, "content", void 0);
exports.BasicMessage = BasicMessage;
