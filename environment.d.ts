declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      PORT?: string;
      PWD: string;
	  MAPBOX_TOKEN: string;
	  IPIFY_API_KEY: string;
    }
  }
}

export {};
