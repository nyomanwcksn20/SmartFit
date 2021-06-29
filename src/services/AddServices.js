import { app } from '../config/db';

export const addItem = (nama, image, bb, tb) => {
  app.database().ref('/user/').push({
    nama: nama,
    image: image,
    bb: bb,
    tb: tb,
  });
};
