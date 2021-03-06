import jwt from "express-jwt";
import jwks from "jwks-rsa";
import * as dotenv from "dotenv";
import axios from 'axios'

dotenv.config();

export const verifyJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache:true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ["RS256"]
})
