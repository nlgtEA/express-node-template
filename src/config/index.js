import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: parseInt(process.env.PORT || 8080, 10),
  jwtKey: process.env.JWT_KEY,
};

export default config;
