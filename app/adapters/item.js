import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ItemAdapter extends JSONAPIAdapter {
  findRecord() {
    return {
      data: {
        type: 'item',
        id: '1',
      },
      attributes: {},
      relationships: {},
    };
  }
}
