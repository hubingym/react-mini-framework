import { greet } from '../states'

class GreetService {
  changeGreet() {
    greet.setVal('just a test');
  }

  clear() {
    greet.setVal('');
  }
}

export default new GreetService();
