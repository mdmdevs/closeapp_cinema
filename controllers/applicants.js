import ApplicantModel from "../models/applicants.js";

export const registerUser = (req, res) => {
  const {
    firstname,
    lastname,
    //   age,
    //   height,
    //   weight,
    //   complexion,
    phoneNO,
    //   birthday,
    //   hometown,
    //   address,
    //   nationality,
    //   zipCode,
    //   lastMovie,
    //   visitedProduction,
    //   isPreProduction,
    //   isHavingCert,
    //   langsSpoken,
    //   occupation,
    //   whyAction,
    //   isWithness,
  } = req.body;

  const name = `${firstname} ${lastname}`;

  const newApplicant = new ApplicantModel({
    ...req.body,
    name,
    phoneNO,
  });
  res.status(201).send(newApplicant);
};
