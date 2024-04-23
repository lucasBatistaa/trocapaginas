import { SMSPersonalization } from "./SMSPersonalization";
export declare class SMSParams {
    from: string;
    to: string[];
    text: string;
    personalization?: SMSPersonalization[];
    constructor(config?: any);
    setFrom(from: string): SMSParams;
    setTo(to: string[]): SMSParams;
    setText(text: string): SMSParams;
    setPersonalization(personalization: SMSPersonalization[]): SMSParams;
}
