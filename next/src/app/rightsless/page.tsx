import Link from 'next/link'

export default function Rightsless() {
  return <div className="flex flex-col gap-3 items-center justify-center h-screen bg-black">
      <h1 className="text-3xl font-bold text-white">У вас недостаточно прав для просмотра этого раздела</h1>
      <div>
        <Link className="text-slate-300 border b" href="/goods">Вернуться на главную</Link>
      </div>
  </div>
}