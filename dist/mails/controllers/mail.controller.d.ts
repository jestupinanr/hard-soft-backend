import { MailService } from '../services/mail.service';
export declare class MailController {
    private mailService;
    constructor(mailService: MailService);
    findAll(): void;
}
