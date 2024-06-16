import ApplicantModel from "../models/applicants";

export const registerUser = (req, res) => {
//   const {
//     firstname,
//     lastname,
//     age,
//     height,
//     weight,
//     complexion,
//     phoneNO,
//     birthday,
//     hometown,
//     address,
//     nationality,
//     zipCode,
//     lastMovie,
//     visitedProduction,
//     isPreProduction,
//     isHavingCert,
//     langsSpoken,
//     occupation,
//     whyAction,
//     isWithness,
//   } = req.body;

  const fullName = `${(firstname, lastname)}`;

  const newApplicant = new ApplicantModel({
    ...req.body,
  });
};
