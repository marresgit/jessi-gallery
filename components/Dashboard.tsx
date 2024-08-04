"use client";

import {signIn, signOut, useSession} from "next-auth/react";
import React from "react";

const Dashboard = () => {
  const { data: session } = useSession();

  return (
      <>
        {session ? (
            <>
              <div className="p-10 bg-gray-500 rounded shadow-md">
                <img src={session.user?.image} alt="user" className="w-20 h-20 rounded-full"/>
                <h1 className="text-2xl font-semibold text-gray-900">Welcome {session.user?.name}</h1>

                <p className="text-gray-900">{session.user?.email}</p>
                <button onClick={() => signOut()} className="mt-5 bg-red-500 text-white px-3 py-1 rounded">Sign out</button>
              </div>
            </>
        ) : (
            <>
              <h1 className={"text-3xl text-red-500 font-bold"}>
                You are not logged in
              </h1>
              <div className={"flex space-x-5"}>
                <button
                    onClick={() => signIn("google")}
                    className={"border border-black rounded-lg px-5 py-1"}
                >
                  Sign in with google
                </button>
                <button
                    onClick={() => signIn("github")}
                    className={"border border-black rounded-lg bg-green-400 px-5 py-1"}
                >
                  Sign in with Github
                </button>
              </div>
            </>
        )}
      </>
  );
};

export default Dashboard;