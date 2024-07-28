"use client";

import {signIn, useSession} from "next-auth/react";
import React from "react";

const Dashboard = () => {
  const { data: session } = useSession();

  return (
      <>
        {session ? (
            <>
              <div className="flex items-center justify-center min-h-screen bg-gray-800">
                <div className="p-10 bg-gray-500 rounded shadow-md">
                  <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                  <p className="text-gray-900">Welcome to your dashboard!</p>
                </div>
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