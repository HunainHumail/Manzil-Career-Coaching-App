import {store} from '../../store';
import {HomeActions} from '../../store/actions';

function downloadFile(data){
  store.dispatch(HomeActions.updateDownloadStatus(data));

}

export default {
  downloadFile
};
