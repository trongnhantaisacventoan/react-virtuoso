import * as u from './urx';
import { LogLevel } from './loggerSystem';
export declare const propsReadySystem: u.SystemSpec<[u.SystemSpec<never[], () => {
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<LogLevel>;
}>], ([{ log }]: [{
    log: u.StatefulStream<import("./loggerSystem").Log>;
    logLevel: u.StatefulStream<LogLevel>;
}]) => {
    propsReady: u.StatefulStream<boolean>;
    didMount: u.Stream<boolean>;
}>;
//# sourceMappingURL=propsReadySystem.d.ts.map