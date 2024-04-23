/// <reference types="node" />
export declare class MailerSendUtils {
    static verifyWebHook(rawBody: Buffer, signature: string, signingSecret: string): boolean;
}
