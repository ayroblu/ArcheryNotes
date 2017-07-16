import * as sc from './scoreCalculator'

describe('Score Calculator Functions', ()=>{
  describe('Adding scores', ()=>{
    [
      ['add first score', [{
        scores: sc.initialiseRow()
      }], '1', [{
        scores: ['1', null, null, null, null, null]
      }]],
      ['add third score', [{
        scores: ['9', '9', null, null, null, null]
      }], '1', [{
        scores: ['9', '9', '1', null, null, null]
      }]],
      ['last score in row, creates new row', [{
        scores: ['9', '9', '9', '9', '9', null]
      }], '1', [{
        scores: ['9', '9', '9', '9', '9', '1']
      }, {
        scores: [null, null, null, null, null, null]
      , preTotal: 46
      }]],
      ['first score in row, second row', [{
        scores: ['9', '9', '9', '9', '9', '9']
      }, {
        scores: [null, null, null, null, null, null]
      , preTotal: 54
      }], '1', [{
        scores: ['9', '9', '9', '9', '9', '9']
      }, {
        scores: ['1', null, null, null, null, null]
      , preTotal: 54
      }]],
    ].map(([name, scoreSheet, param, expected])=>(
      test(name, ()=>{
        const newScoreSheet = sc.addScore(scoreSheet, param)
        expect(newScoreSheet).toEqual(expected)
      })
    ))
  })
  describe('Removing scores', ()=>{
    [
      ['empty does nothing', [{
        scores: [null, null, null, null, null, null]
      }], [{
        scores: [null, null, null, null, null, null]
      }]],
      ['first removes one', [{
        scores: ['1', null, null, null, null, null]
      }], [{
        scores: [null, null, null, null, null, null]
      }]],
      ['first removes one', [{
        scores: ['1', '2', '3', null, null, null]
      }], [{
        scores: ['1', '2', null, null, null, null]
      }]],
      ['second row first removes one', [{
        scores: ['9','8','7','6','5','4']
      }, {
        scores: ['1', null, null, null, null, null]
      , preTotal: 39
      }], [{
        scores: ['9','8','7','6','5','4']
      }, {
        scores: [null, null, null, null, null, null]
      , preTotal: 39
      }]],
      ['last in row removes one and row too', [{
        scores: ['9','8','7','6','5','4']
      }, {
        scores: [null, null, null, null, null, null]
      , preTotal: 39
      }], [{
        scores: ['9','8','7','6','5', null]
      }]],
    ].map(([name, scoreSheet, expected])=>(
      test(name, ()=>{
        const newScoreSheet = sc.undo(scoreSheet)
        expect(newScoreSheet).toEqual(expected)
      })
    ))
  })
})
