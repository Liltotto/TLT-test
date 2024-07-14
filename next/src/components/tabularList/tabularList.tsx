

export default function TabularList() {
    return (
        <div>
            <div className="p-2.5 ">
                <table className="min-w-full bg-transparent ">
                    <thead>
                        <tr className="text-[15px] font-normal leading-[18px] tracking-[0%] ">
                            <th className="text-left py-[10px] px-[17px]">Фото</th>
                            <th className="py-[10px] px-[17px]">Название</th>
                            <th className="py-[10px] px-[17px]">Количество</th>
                            <th className="py-[10px] px-[17px]">Производитель</th>
                            <th className="py-[10px] px-[17px]">Цена</th>
                            <th className="py-[10px] px-[17px]"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-[13px] font-normal leading-[16px] tracking-[0%] text-center">
                            <td className="px-6 py-4 whitespace-nowrap"><img src="./lamp.png" alt="Лампа" className="w-16 h-16" /></td>
                            <td className="px-6 py-4 whitespace-nowrap">Лампа</td>
                            <td className="px-6 py-4 whitespace-nowrap">12</td>
                            <td className="px-6 py-4 whitespace-nowrap">Ламповый завод</td>
                            <td className="px-6 py-4 whitespace-nowrap">12.57 р</td>
                            <td className="px-6 py-4 whitespace-nowrap"><img src="./edit.png" alt="Редактировать" className="w-6 h-6 mr-2" /> <img src="./delete.png" alt="Удалить" className="w-6 h-6" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
