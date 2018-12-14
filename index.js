import Regular from 'regularjs';
import { style } from './style.less';

const tpl = `
  <div class="${style}">
  </div>
`;

export default Regular.extend({
    template: tpl,
});
