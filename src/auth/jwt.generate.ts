import jwt from "jsonwebtoken";

export const jwtGenerate = async (payload: {
  id: number;
  email: string;
  name: string;
}) => {
  const { id, email, name } = payload;
  const access_token = await jwt.sign(
    { id, email, name },
    process.env.SECRET_ACCESS_TOKEN,
    { expiresIn: "1h" }
  );
  const refresh_token = await jwt.sign(
    { id, email, name },
    process.env.SECRET_REFRESH_TOKEN,
    { expiresIn: "7d" }
  );

  return { access_token, refresh_token };
};
