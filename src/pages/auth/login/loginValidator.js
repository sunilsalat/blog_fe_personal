import { EMAIL, PASSWORD } from "../../../constant/constant";

export const loginValidators = {
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
};
