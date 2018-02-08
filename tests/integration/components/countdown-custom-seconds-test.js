import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('countdown-custom-seconds', 'Integration | Component | countdown custom seconds', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{countdown-custom-seconds}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#countdown-custom-seconds}}
      template block text
    {{/countdown-custom-seconds}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
