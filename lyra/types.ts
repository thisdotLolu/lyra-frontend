import * as supabase_types from "@supabase/gotrue-js/src/lib/types";

/** TypeScript **/
type Lyra.User = {
  ensdomain: string,
  unique_id: string,
  session_id: string,
  gitNFTs: string[],
  followers: string[],
  following: string[],
  wallet: string,
  github: supabase_types.User
};

/** Lyra 
type User extends Types = {
  ensdomain: string;
  unique_id: string;
  session_id: string;
  gitNFTs: string[];
  followers: string[];
  following: string[];
  wallet: string;
  github: GitHubUser;
};
**/

