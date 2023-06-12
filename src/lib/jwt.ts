import { Sign } from "crypto";
import jwt, { Jwt, JwtPayload } from "jsonwebtoken";

interface SignOptions {
   expiresIn: string | number;
}

const DEFAULT_SIGN_OPTIONS: SignOptions = {
   expiresIn: "1h",
};

export function signJwtAccessToken(
   payload: JwtPayload,
   options: SignOptions = DEFAULT_SIGN_OPTIONS
) {
   const secret_key = process.env.SECRET_KEY as string;
   return jwt.sign(payload, secret_key!, options);
}

export function verifyJwt(token: string) {
   try {
      const secret_key = process.env.SECRET_KEY as string;
      const decoded = jwt.verify(token, secret_key!);
      return decoded as JwtPayload;
   } catch (error) {
      console.log(error);
      return null;
   }
}
