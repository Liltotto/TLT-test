import { useMemo } from "react";

export const getPageCount = (totalCount: number, limit: number) => {
    return Math.ceil(totalCount / limit);
}

// export const usePagination = (totalPages: number) => {
    
//     const pagesArray = useMemo(() => {
//         if(totalPages === 0) return
//         const result: number[] = []
//         for (let i = 0; i < totalPages; i++) {
//             result.push(i + 1)
//         }
//         return result
//     }, [totalPages])


//     return {pagesArray}

// }