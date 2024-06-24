export default function ProtectedPage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Protected Page
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        This page can only be accessed by authenticated users
      </p>
    </div>
  );
}
