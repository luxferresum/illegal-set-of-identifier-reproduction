import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ReproductionComponent extends Component {
  @service store;
  @tracked result = '';

  @action
  async demonstrateProblem() {
    try {
      const data = await this.store.findRecord('item', 1);
      console.log('all good, data loaded', data);
      this.result = `all good, data loaded: ${data.id}`;
    } catch(err) {
      console.log('got an error', err);
      this.result = `got an error ${err}`;
    }
  }
}
