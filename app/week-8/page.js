'use client';
import React, { useEffect } from "react";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div>
      {user ? (
        <div className=" text-center width-half rounded-md mb-4 text-blue-300 text-4x1 font-bold'">
          <h1>Welcome, {user.displayName}</h1>
          <p>Email: {user.email}</p>
          <button onClick={firebaseSignOut}>Logout</button>
          <p><Link href="./week-8/shopping-list">
            Go to Shopping List
          </Link></p>
            
        </div>
      ) : (
        <button onClick={gitHubSignIn}>Login with GitHub</button>
      )}
    </div>
  );
};

export default Page;
