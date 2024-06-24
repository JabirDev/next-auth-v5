import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="flex flex-col gap-10">
        <div className="flex justify-center">
          <Image src={"/jabirdev.png"} width={120} height={120} alt="Logo" />
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Sign In Page
        </h2>
      </div>
    </div>
  );
}
