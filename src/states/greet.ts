import eventBus from '../lib/event-bus'

class Greet {
  val = 'hi';

  setVal(val: string) {
    this.val = val;
    eventBus.forceUpdate();
  }
}

export default new Greet();
