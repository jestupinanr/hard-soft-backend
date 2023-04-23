export declare class LoginDto {
    readonly email: string;
    readonly password: string;
}
export declare class recoveryPassword {
    readonly email: string;
    readonly password: string;
}
declare const getTokenRecoveryPassword_base: import("@nestjs/mapped-types").MappedType<Partial<recoveryPassword>>;
export declare class getTokenRecoveryPassword extends getTokenRecoveryPassword_base {
}
export {};
