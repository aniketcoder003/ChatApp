import jwt from "jsonwebtoken";

const genratetoken = (userid, res) => {
  const token = jwt.sign(
    {
      id: userid,
    },
    process.env.SECRET_KEY,
    { expiresIn: "1d" }
  );

  res.cookie("jwt", token, {
    httpOnly: true, //xss attacks
    sameSite: "strict", //csrf attacks
	secure:true
  });
};

export default genratetoken;
