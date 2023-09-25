import Image from "next/image";

const Index = () => {
  return (
    <div className="overflow-x-auto">
      <div className="min-h-[calc(100vh_-_433px)] flex  justify-center items-center flex-col p-10  min-w-[1000px]">
        <div className=" flex items-center flex-1  w-full max-h-28">
          <table className="w-full text-sm text-center text-gray-500">
            <thead className="text-xs text-gray-400 uppercase bg-gray-700">
              <tr>
                <th scope="col" className="py-3 px-6"> ORDER ID </th> 
                <th scope="col" className="py-3 px-6"> CUSTOMER </th> 
                <th scope="col" className="py-3 px-6"> ADDRESS </th> 
                <th scope="col" className="py-3 px-6"> TOTAL </th>
              </tr>
            </thead>
            <tbody>
              <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary">
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                  3654165564
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  tuyler durden
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  paper street
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  22$
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-between w-full p-2 bg-primary my-10">
          <div className="relative flex flex-col items-center animate-pulse">
            <Image
              src="/images/paid.png"
              alt=""
              width={50}
              height={50}
              objectFit="contain"
            />
            <span>Payment</span>
          </div>
          <div className="relative flex flex-col items-center">
            <Image
              src="/images/bake.png"
              alt=""
              width={50}
              height={50}
              objectFit="contain"
            />
            <span>Preparing</span>
          </div>
          <div className="relative flex flex-col items-center">
            <Image
              src="/images/paid.png"
              alt=""
              width={50}
              height={50}
              objectFit="contain"
            />
            <span>On the way</span>
          </div>
          <div className="relative flex flex-col items-center">
            <Image
              src="/images/delivered.png"
              alt=""
              width={50}
              height={50}
              objectFit="contain"
            />
            <span>Delivered</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
