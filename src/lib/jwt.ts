import { Sign } from "crypto";
import jwt, { JwtPayload, UserIDJwtPayload } from "jsonwebtoken";

interface SignOptions {
   expiresIn: string | number;
}

const DEFAULT_SIGN_OPTIONS: SignOptions = {
   expiresIn: "1h",
};

declare module "jsonwebtoken" {
   export interface UserIDJwtPayload extends JwtPayload {
      id: string;
   }
}

export function signJwtAccessToken(
   payload: UserIDJwtPayload,
   options: SignOptions = DEFAULT_SIGN_OPTIONS
) {
   const secret_key = process.env.JWT_KEY as string;
   return jwt.sign(payload, secret_key!, options);
}

export function verifyJwt(token: string) {
   try {
      const secret_key = process.env.JWT_KEY as string;
      const decoded = jwt.verify(token, secret_key);
      return decoded as UserIDJwtPayload;
   } catch (error) {
      console.log(error);
      return null;
   }
}
