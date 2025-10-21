export default function Navbar({ onAIToggle }: { onAIToggle: ()=>void }){
  return (
    <div className="flex justify-between items-center bg-white p-4 shadow-md">
      <h2 className="font-bold text-blue-700 text-2xl">AfyaLink Dashboard</h2>
      <div className="flex items-center gap-3"><button onClick={onAIToggle} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl shadow">AI Help</button></div>
    </div>
  );
}
