import { app } from '../config/db';

export const updateItem = (nama, image, tb, bb) => {
  var query = app.database().ref('/user/').orderByChild('nama').equalTo(nama);
  query.once('value', function (snapshot) {
    snapshot.forEach(function (child) {
      child.ref.update({
        nama: nama,
        image: image,
        bb: bb,
        tb: tb,
      });
    });
  });
};
