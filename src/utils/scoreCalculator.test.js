import * as sc from './scoreCalculator'

describe('Score Calculator Functions', ()=>{
  describe('Adding scores', ()=>{
    test('First score', ()=>{
      const scoreSheet = [{
        scores: sc.initialiseRow()
      }]
      const newScoreSheet = sc.addScore(scoreSheet, '1')
      expect(newScoreSheet).toEqual([{
        scores: ['1', null, null, null, null, null]
      }])
    })
    test('3rd score', ()=>{
      const scoreSheet = [{
        scores: ['9', '9', null, null, null, null]
      }]
      const newScoreSheet = sc.addScore(scoreSheet, '1')
      expect(newScoreSheet).toEqual([{
        scores: ['9', '9', '1', null, null, null]
      }])
    })
    test('last score in row, creates new row', ()=>{
      const scoreSheet = [{
        scores: ['9', '9', '9', '9', '9', null]
      }]
      const newScoreSheet = sc.addScore(scoreSheet, '1')
      expect(newScoreSheet).toEqual([{
        scores: ['9', '9', '9', '9', '9', '1']
      }, {
        scores: [null, null, null, null, null, null]
      , preTotal: 46
      }])
    })
    test('first score in row, second row', ()=>{
      const scoreSheet = [{
        scores: ['9', '9', '9', '9', '9', '9']
      }, {
        scores: [null, null, null, null, null, null]
      , preTotal: 54
      }]
      const newScoreSheet = sc.addScore(scoreSheet, '1')
      expect(newScoreSheet).toEqual([{
        scores: ['9', '9', '9', '9', '9', '9']
      }, {
        scores: ['1', null, null, null, null, null]
      , preTotal: 54
      }])
    })
  })
  describe('Removing scores', ()=>{
    test('Empty does nothing', ()=>{
      const scoreSheet = [{
        scores: [null, null, null, null, null, null]
      }]
      const newScoreSheet = sc.undo(scoreSheet)
      expect(newScoreSheet).toEqual([{
        scores: [null, null, null, null, null, null]
      }])
    })
    test('First removes one', ()=>{
      const scoreSheet = [{
        scores: ['1', null, null, null, null, null]
      }]
      const newScoreSheet = sc.undo(scoreSheet)
      expect(newScoreSheet).toEqual([{
        scores: [null, null, null, null, null, null]
      }])
    })
    test('Middle removes one', ()=>{
      const scoreSheet = [{
        scores: ['1', '2', '3', null, null, null]
      }]
      const newScoreSheet = sc.undo(scoreSheet)
      expect(newScoreSheet).toEqual([{
        scores: ['1', '2', null, null, null, null]
      }])
    })
    test('Second row first removes one', ()=>{
      const scoreSheet = [{
        scores: ['9','8','7','6','5','4']
      }, {
        scores: ['1', null, null, null, null, null]
      , preTotal: 39
      }]
      const newScoreSheet = sc.undo(scoreSheet)
      expect(newScoreSheet).toEqual([{
        scores: ['9','8','7','6','5','4']
      }, {
        scores: [null, null, null, null, null, null]
      , preTotal: 39
      }])
    })
    test('Last in row removes one and row too', ()=>{
      const scoreSheet = [{
        scores: ['9','8','7','6','5','4']
      }, {
        scores: [null, null, null, null, null, null]
      , preTotal: 39
      }]
      const newScoreSheet = sc.undo(scoreSheet)
      expect(newScoreSheet).toEqual([{
        scores: ['9','8','7','6','5', null]
      }])
    })
  })
})
