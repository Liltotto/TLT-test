import Link from 'next/link'

export default function NotFound() {
  return <div className="flex flex-col gap-3 items-center justify-center h-screen bg-black">
      <h1 className="text-3xl font-bold text-white">Not found – 404!</h1>
      <div>
        <Link className="text-slate-300 border b" href="/">Go back to Home</Link>
      </div>
  </div>
}