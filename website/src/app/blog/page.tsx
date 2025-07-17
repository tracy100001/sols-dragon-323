import Blog from "@/components/Blog";

function Page() {
  return (
    <>
      <div className="bg_dark py-4"></div>
      <Blog page={true} />
    </>
  );
}

export default Page;
