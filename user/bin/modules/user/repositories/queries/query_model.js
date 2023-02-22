

const generalUser = () => {
  const model = {
    id:BigInt,
    name:'',
    email:'',
    password:'',
    createdAt: '',
    updatedAt:'',
  };
  return model;
};

module.exports = {
  generalUser: generalUser
};
