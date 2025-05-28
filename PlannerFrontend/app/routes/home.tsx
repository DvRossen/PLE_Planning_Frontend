import type { Route } from "./+types/home";
import  Landing  from "../pages/landing";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Personal Planning Enviorment" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Landing />;
}
