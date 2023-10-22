global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      HOST: string;
      PORT: string;
      BD_HOST: string;
      BD_PORT: string;
      BD_NAME: string;
      BD_USERNAME: string;
      BD_PASSWORD: string;
      SECRET_ACCESS_TOKEN: string;
      SECRET_REFRESH_TOKEN: string;
      CORS_ORIGIN: string;
    }
  }
}

export {};
