import messaging from '@react-native-firebase/messaging';

export default class Service {
  static getToken = () => {
    return new Promise((res, rej) => {
      messaging()
        .requestPermission()
        .then(() => {
          messaging()
            .getToken()
            .then(token => {
              res(token);
            });
        });
    });
  };
}
