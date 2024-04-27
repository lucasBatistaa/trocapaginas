import { SMSParams } from "../models";
import { APIResponse, RequestService } from "../services/request.service";
import { SmsActivityModule } from "./sms/Activity.module";
import { SmsInboundModule } from "./sms/Inbound.module";
import { SmsMessageModule } from "./sms/Message.module";
import { SmsNumberModule } from "./sms/Number.module";
import { SmsRecipientModule } from "./sms/Recipient.module";
import { SmsWebhookModule } from "./sms/Webhook.module";
export declare class SMSModule extends RequestService {
    activity: SmsActivityModule;
    number: SmsNumberModule;
    message: SmsMessageModule;
    inbound: SmsInboundModule;
    recipient: SmsRecipientModule;
    webhook: SmsWebhookModule;
    constructor(apiKey: string, baseUrl: string);
    send(params: SMSParams): Promise<APIResponse>;
}
