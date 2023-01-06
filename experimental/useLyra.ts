/* standard libraries */
import { useState, useEffect } from "react";
import { axios } from "axios";

/* SupaBase */
import { supabase } from "../../client";
import { User, UserResponse } from "@supabase/gotrue-js/src/lib/types"

/* Lyra SDK */
import { Lyra.Types } from "lyra/types";

async function getGithubProfile(){
    const { data: { githubUser } } = await supabase.auth.getUser();

    if(githubUser) {
      setGithubUser(githubUser);
      console.log(githubUser);
    }
}

async function githubSignIn(){
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      scopes: 'user:email,read:project,read:user'
    }
  });

  // TODO: store access token

}

//getProfile();

function useLyra() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [githubUser, setGithubUser] = useState<User | null>(null);
  const [user, setUser] = useState<LyraUser | null>(null);

  useEffect(() => {
    if(githubUser === null) {
      getGithubProfile();
    }

    if (user === null) {
      getLyraUser();
    }

    user.github = githubUser;

  }, [user]);
  return user;
}

  export {
    user,
    setUser
  }
}
// default useLyra;
