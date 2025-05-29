import Header from "~/components/header";
import Button from "~/components/button";
import SubjectList from "~/components/subject-list";

export default function Landing() {
  return (
    <div className="page max-w-[100vw] max-h-[100vh]">
      <Header />
      <div className="body flex">
        <SubjectList />

        <div className="content flex flex-wrap justify-center bg-mainpage">
          <Button usage="test" variant="danger" text="danger" />
          <Button usage="test" variant="default" text="default" />
          <Button usage="gibberish" variant="gibberish" text="gibberish" />
        </div>
      </div>
    </div>
  );
}
