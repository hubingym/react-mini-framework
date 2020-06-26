import eventBus from '../lib/event-bus'

export default {
  val: 'hi',
  setVal(val) {
    this.val = val;
    eventBus.forceUpdate();
  },
}
