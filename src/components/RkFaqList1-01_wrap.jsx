// wrapper
import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  resolve: () => System.import('./RkFaqList1-01.jsx')
});