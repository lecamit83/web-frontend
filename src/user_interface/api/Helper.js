import axios from "axios";

const loginUrl = "https://webttcn.herokuapp.com/v1/auth/";
const registerUrl = "https://webttcn.herokuapp.com/v1/users/";
const getByIdUrl = "https://webttcn.herokuapp.com/v1/users/";

module.exports = function loginWith(user) {
  axios.post(loginUrl, user);
};

// class Helper {
//   registerWith(user) {
//     axios
//       .post(registerUrl, user)
//       .then(res => {
//         return res.data;
//       })
//       .catch(err => {
//         return null;
//       });
//   }

//   getUserById(idUser) {
//     axios
//       .post(getByIdUrl, idUser)
//       .then(res => {
//         return res.data;
//       })
//       .catch(err => {
//         return null;
//       });
//   }
// }

// export default Helper;
