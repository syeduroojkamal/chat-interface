export default function Header({ className = "" }: { className?: string }) {
  return (
    <header className={className}>
      <div className="p-4 border-b-2 bg-green-100">
        <h1 className="text-2xl">Username</h1>
      </div>
    </header>
  );
}
