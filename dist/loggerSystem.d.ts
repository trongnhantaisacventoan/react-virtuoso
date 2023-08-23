import * as u from './urx';
export declare enum LogLevel {
    DEBUG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3
}
export interface LogMessage {
    level: LogLevel;
    message: any;
    label: string;
}
export type Log = (label: string, message: any, level?: LogLevel) => void;
export declare const loggerSystem: u.SystemSpec<never[], () => {
    log: u.StatefulStream<Log>;
    logLevel: u.StatefulStream<LogLevel>;
}>;
//# sourceMappingURL=loggerSystem.d.ts.map