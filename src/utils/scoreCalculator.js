// @flow
type ScoreRow = {
  preTotal?: number
, scores: Array<?string>
}

export function scoreToVal(score):number{
  switch (score) {
    case 'X':
      return 10
    case 'M':
      return 0
    default:
      return parseInt(score, 10)
  }
}
export function addScore(scoreSheet: Array<ScoreRow>, score: string): Array<ScoreRow>{
  // parts: addRow, substituteScore in
  let newRow = false
  const newScoreSheet = scoreSheet.map((r,i)=>{
    if (i !== scoreSheet.length-1) return r
    const index = r.scores.indexOf(null)
    if (index === r.scores.length -1) newRow = true
    return {...r, scores: r.scores.map((c,i)=>i!==index ? c : score)}
  })
  if (newRow) {
    const preTotal = newScoreSheet.slice(-1)[0].scores.reduce((a,n)=>a+scoreToVal(n),0)
    newScoreSheet.push({
      preTotal
    , scores: initialiseRow()
    })
  }
  return newScoreSheet
}
export function undo(scoreSheet: Array<ScoreRow>): Array<ScoreRow>{
  // parts: addRow, substituteScore in
  const isFirst = scoreSheet.slice(-1)[0].scores.indexOf(null) === 0
  if (isFirst && scoreSheet.length === 1) return scoreSheet

  let newScoreSheet = isFirst ? scoreSheet.filter((s,i)=>i!==scoreSheet.length-1) : scoreSheet
  newScoreSheet = newScoreSheet.map((r,i)=>{
      if (i !== newScoreSheet.length-1) return r
      let index = r.scores.indexOf(null)
      index = index === -1 ? r.scores.length -1 : index - 1
      return {...r, scores: r.scores.map((c,i)=>i!==index ? c : null)}
    })
  return newScoreSheet
}
export function initialiseRow(arrowsPerEnd: number=6){
  return Array(arrowsPerEnd).fill(null)
}
