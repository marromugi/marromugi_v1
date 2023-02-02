import { zeroPadding } from './text'

export const getDateText = (date: Date) => {
  const now = new Date()
  const targetMonth = date.getFullYear() * 12 + date.getMonth()
  const nowMonth = now.getFullYear() * 12 + now.getMonth()
  const diffMonth = nowMonth - targetMonth

  if (diffMonth === 0) {
    const targetTime = date.getTime()
    const nowTime = now.getTime()
    const diffTime = nowTime - targetTime
    const diffDay = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    return diffDay === 0 ? 'today' : `${diffDay === 1 ? 'a' : diffDay} days ago`
  }

  if (diffMonth < 12) {
    return `${diffMonth === 1 ? 'a' : diffMonth} month ago`
  }

  return `${Math.floor(diffMonth / 12)} year ago`
}
