

const generalUserCourse = () => {
  const model = {
    id:'',
    users_id:BigInt,
    course_id:BigInt,
    createdAt: '',
    updatedAt:'',
  };
  return model;
};

module.exports = {
  generalUserCourse: generalUserCourse
};
