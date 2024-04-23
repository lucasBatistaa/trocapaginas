import { EmailModule } from "./Email.module";
import { TokenModule } from "./Token.module";
import { EmailVerificationModule } from "./EmailVerification.module";
import { SMSModule } from "./SMS.module";
import { OthersModule } from "./Others.module";
export declare class MailerSend {
    private readonly apiKey;
    private baseUrl;
    sms: SMSModule;
    token: TokenModule;
    email: EmailModule;
    emailVerification: EmailVerificationModule;
    others: OthersModule;
    constructor(config: MailerSendConfig);
}
export interface MailerSendConfig {
    apiKey: string;
}
