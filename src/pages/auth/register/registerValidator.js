import {
  CONFIRM_PASSWORD,
  EMAIL,
  NAME,
  PASSWORD,
} from "../../../constant/constant";

export const registerValidator = {
  [NAME]: {
    required: "Please enter name",
  },
  [EMAIL]: {
    required: "Please enter email",
    pattern: {
      value: /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/,
      message: "Please enter valid email",
    },
  },
  [PASSWORD]: {
    required: "Please enter password",
  },
  [CONFIRM_PASSWORD]: {
    required: "Please enter confirm password",
    validate: {
      matchesPassword: (value, formValues) => {
        const password = formValues[PASSWORD];
        if (password !== value) {
          return "Password and confirm password should same";
        }
        return true;
      },
    },
  },
};
