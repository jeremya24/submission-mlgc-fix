const { postPredictHandler, getAllDataHandler } = require("../server/handler");
 
const routes = [
  {
    path: '/predict',
    method: 'POST',
    handler: postPredictHandler,
    options: {
      payload: {
        /*Mengizinkan data berupa gambar*/
        allow: 'multipart/form-data',
        multipart: true
      }
    }
  },
  {
    path: "/predict/histories",
    method: "GET",
    handler: getAllDataHandler,
  },
]
 
module.exports = routes;