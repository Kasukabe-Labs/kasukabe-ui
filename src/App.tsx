import { Button } from "./components/button";

export default function App() {
  return (
    <div className="min-h-screen w-full justify-center items-center flex flex-col bg-white">
      <div className="space-y-6 flex flex-col">
        <Button>Primary</Button>
        <Button variant={"secondary"}>Secondary</Button>
        <Button variant={"link"}>Link</Button>
        <Button variant={"outline"}>Outline</Button>
        <Button variant={"ghost"}>Ghost</Button>
      </div>
    </div>
  );
}
