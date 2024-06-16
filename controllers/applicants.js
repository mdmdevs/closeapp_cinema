import ApplicantModel from "../models/applicants.js";

export const registerUser = async (req, res) => {
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
  await newApplicant.save();
  res.status(201).send(newApplicant);
};
