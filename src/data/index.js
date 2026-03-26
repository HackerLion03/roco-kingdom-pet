import { petList1 } from './pets01.js'
import { petList2 } from './pets02.js'
import { elementColors, allElements } from './elements.js'

// 自动合并所有宠物列表
export const petList = [...petList1, ...petList2]

// 导出给页面使用
export { elementColors, allElements }