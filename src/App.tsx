import { AlertDialog } from "./components/alert-dialog";

export default function App() {
  return (
    <div className="min-h-screen w-full justify-center items-center flex flex-col bg-background">
      <div className="space-y-6 flex flex-col">
        <AlertDialog onConfirm={() => alert('Confirmed!')} title="Click me!" description="This action cannot be undone." buttonVariant="danger" buttonText="Click me!" buttonSize="lg" />
      </div>
    </div>
  );
}
