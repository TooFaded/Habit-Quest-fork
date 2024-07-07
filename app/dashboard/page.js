"use client";
import Image from "next/image";
import withAuth from "../components/withAuth";
import { useUser } from "../_contexts/UserContext";
import LoadingSpinner from "../components/LoadingSpinner";

function Dashboard() {
  const { user } = useUser();

  if (!user) {
    return <div>{<LoadingSpinner />}</div>;
  }

  return (
    <div className="container mx-auto p-4 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4">Dashboard Page</h1>
      <div className="relative">
        <div className="flex justify-center items-start w-44 h-44 rounded-full overflow-hidden border-4 border-gold">
          <Image
            src={user.userCharacter}
            width={200}
            height={160}
            objectFit="cover"
            priority
          />
        </div>
      </div>
      <div className=" p-6 rounded shadow-md">
        <h2 className="sm:text-2xl text-xl mb-2">Welcome, {user.username}</h2>

        <p>Class: {user.userClass}</p>
      </div>
    </div>
  );
}

export default withAuth(Dashboard);
