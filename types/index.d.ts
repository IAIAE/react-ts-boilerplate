interface doReport {
  (config: object, isImmediate?: boolean): void;
}
interface AVReport {
  doReport: doReport
}

interface anyObject {
  [propName: string]: any;
}
interface _report_ {
  opts?: anyObject,
  [otherProp: string]: any;
}

/**
 * window 对象上的一些属性和方法
 */
interface Window {
  [otherProp: string]: any;
}

declare var window: Window;


interface ActionLike {
  type: string;
  data?: anyObject;
  _node?: any;
}

declare interface Reducerable {
  reduer: (action: any) => void;
}

declare type PriJs = string|number|boolean;