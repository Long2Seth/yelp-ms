import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <main className=" h-[100vh] bg-amber-50 text-black grid place-content-center ">
        <h1 className=" text-5xl font-semibold hover:text-red-950 ">
            Welcome to Yelp !!!
        </h1>
        <div className=" w-full my-5 flex justify-center ">
            <Link href="/oauth2/authorization/yelp"
                  className="bg-blue-700 text-white text-xl font-medium py-3 px-5 rounded-[7px] hover:bg-blue-800 hover:scale-[101%] ">
                Log in
            </Link>
        </div>
      </main>
  );
}
