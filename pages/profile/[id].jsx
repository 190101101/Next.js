import Image from "next/image";
import { getSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import Account from "@/components/profile/Account";
import Password from "@/components/profile/Password";
import Orders from "@/components/profile/Orders";
import { useRouter } from "next/router";
import axios from "axios";

const Index = ({ session }) => {
  const [tabs, setTabs] = useState(1);
  const { push } = useRouter();

  const handleSignOut = () => {
    if (confirm("i you sure???")) {
      signOut({ redirect: false });
    }
  };

  useEffect(() => {
    if (!session) {
      push("/auth/login");
    }
  }, [session, push]);

  return (
    <div className="flex px-10 min-h-[calc(100vh_-_433px)] my-10 md:flex-row flex-col">
      <div className="md:w-80 w-100 flex-shrink-0">
        <div className="relative flex flex-col items-center p-10 border border-b-0">
          <div className="relative w-[120px] h-[120px]">
            <Image
              src="/images/client1.png"
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <span className="text-[24px] text-bold mt-2">jon doe</span>
        </div>
        <ul className="w-full font-semibold">
          <li
            onClick={() => {
              setTabs(1);
            }}
            className={`${
              tabs === 1 && "bg-primary"
            } border w-full p-3 cursor-pointer hover:bg-primary list-none hover:text-white transition-all`}
          >
            <i className="fa fa-home"></i>
            <button className="ml-1">account</button>
          </li>
          <li
            onClick={() => {
              setTabs(2);
            }}
            className={`${
              tabs === 2 && "bg-primary"
            } border w-full p-3 cursor-pointer hover:bg-primary list-none hover:text-white transition-all`}
          >
            <i className="fa fa-key"></i>
            <button className="ml-1">password</button>
          </li>
          <li
            onClick={() => {
              setTabs(3);
            }}
            className={`${
              tabs === 3 && "bg-primary"
            } border w-full p-3 cursor-pointer hover:bg-primary list-none hover:text-white transition-all`}
          >
            <i className="fa fa-list"></i>
            <button className="ml-1">orders</button>
          </li>
          <li
            onClick={handleSignOut}
            className={`${
              tabs === 4 && "bg-primary"
            } border w-full p-3 cursor-pointer hover:bg-primary list-none hover:text-white transition-all`}
          >
            <i className="fa fa-sign-out"></i>
            <button className="ml-1">exit</button>
          </li>
        </ul>
      </div>

      {tabs === 1 && <Account />}
      {tabs === 2 && <Password />}
      {tabs === 3 && <Orders />}
    </div>
  );
};

export const getServerSideProps = async ({ req, params }) => {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  const user = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${params.id}`
  );

  return {
    props: {
      session,
    },
  };
};

export default Index;
