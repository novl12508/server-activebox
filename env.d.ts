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
    }
  }
}

export {};
