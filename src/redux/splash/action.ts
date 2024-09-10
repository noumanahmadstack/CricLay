import {replace} from '../../routes/rootNavigation';
// import {store} from '../store/store';
export const onMount = () => {
  replace('Drawer', {isRegisteration: false});
  //   store.dispatch({ type: 'userLogout' })
};
