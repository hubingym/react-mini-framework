import { EventEmitter } from 'events';
import { EVENT_FORCE_UPDATE } from './constants';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Event {
  constructor(private bus: EventBus, private msg: string) {
  }

  emitEvent() {
    this.bus.emit(this.msg);
  }

  onEvent(cb: () => void) {
    this.bus.on(this.msg, cb);
  }

  offEvent(cb: () => void) {
    this.bus.off(this.msg, cb);
  }
}

class EventBus extends EventEmitter {
  // constructor() {
  //   super();
  // }

  // public event1 = new Event(this, 'event1');

  /**
   * 注册更新视图的回调
   */
  onUpdate(cb: () => void) {
    this.on(EVENT_FORCE_UPDATE, cb);
  }

  /**
   * 通知视图需要更新
   * 目前没有找到更新子数据通知变化的好方法,需要调用forceUpdate
   */
  forceUpdate() {
    this.emit(EVENT_FORCE_UPDATE);
  }
}

export default new EventBus();
