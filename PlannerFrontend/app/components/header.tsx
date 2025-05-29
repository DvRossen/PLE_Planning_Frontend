import Button from "./button";

export default function Header() {
  return (
    <div className="header flex justify-space-between items-center bg-[#B7ADCF]">
      <Button usage="routeHome" variant="default" text="home" />
    </div>
  );
}
