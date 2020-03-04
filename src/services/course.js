import { courseInstance } from './api'

const getCourses = async () => {
  try {
    const res = await courseInstance.get('pubinfo?exchange&json&coursid=11')
    return res.data
  } catch (error) {
    return error
  }
}

export default getCourses
