//it is a configuration object
//this object stores env variables so we can use safely throughout the app
const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),  //appwrite api url
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID), //unique id of appwrite project
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),//database id inside appwrite
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),//collection id isnide that db
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),// storage bucket id..used for file uploads like images
};

export default conf;
