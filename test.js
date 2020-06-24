
var chai = require('chai')
var assert = chai.assert;

let directionAntagonist = ( directionA, directionB ) => {
    return directionA === 'NORTH' && directionB === 'SOUTH' 
    || directionA === 'SOUTH' && directionB === 'NORTH'
    || directionA === 'EAST' && directionB === 'WEST'
    || directionA === 'WEST' && directionB === 'EAST'
}
let dirReduc = ( directions ) => {
  let reducer = ( result, element ) => {
    
      if(result.length !== 0 && directionAntagonist(result[result.length - 1], element)) {
        result.pop()
      }
      else {
        result.push( element)
      } 
      return result
    }
    return directions.reduce(reducer, [])
   
        
}



describe('dirReduc(arr)', function () {
 
  describe('quand un array est vide', function () {
    it('should return []', function () {
      assert.deepEqual(dirReduc([]), [])
    });
  });
  describe('if we have ONE direction', function () {
    it("should return ['NORTH'] if direction is NORTH", function () {
      assert.deepEqual(dirReduc(['NORTH']), ['NORTH'])
    });
    it("should return ['SOUTH'] if direction is SOUTH", function () {
        assert.deepEqual(dirReduc(['SOUTH']), ['SOUTH'])
      });
    it("should return ['WEST'] if direction is WEST", function () {
        assert.deepEqual(dirReduc(['WEST']), ['WEST'])
      });
    it("should return ['EAST'] if direction is EAST", function () {
        assert.deepEqual(dirReduc(['EAST']), ['EAST'])
      });
  });
  describe('if we have TWO directions', function () {
    it("should return ['NORTH, 'EAST'] if direction is from NORTH to EAST", function () {
      assert.deepEqual(dirReduc(['NORTH', 'EAST']), ['NORTH', 'EAST'])
    });
    it("should  return [] if direction is from NORTH to SOUTH", function () {
      assert.deepEqual(dirReduc(['NORTH', 'SOUTH']), [])
    });
    it("should  return [] if direction is from SOUTH to NORTH", function () {
        assert.deepEqual(dirReduc(['SOUTH', 'NORTH']), [])
      });
    it("should  return [] if direction is from EAST to WEST", function () {
        assert.deepEqual(dirReduc(['EAST', 'WEST']), [])
      });
    it("should  return [] if direction is from WEST to EAST", function () {
        assert.deepEqual(dirReduc(['WEST', 'EAST']), [])
      });
  })
   describe('if we have THREE directions', function () {
     it("should return ['NORTH, 'SOUTH' ,'EAST' ] if direction is from 'NORTH, 'SOUTH' ,'EAST' ", function () {
      assert.deepEqual(dirReduc(['NORTH', 'SOUTH' ,'EAST' ]), ['EAST' ])
    });
    it("should return ['WEST' ] if direction is from 'WEST', 'NORTH', 'SOUTH' ", function () {
      assert.deepEqual(dirReduc(['WEST', 'NORTH', 'SOUTH'  ]), ['WEST'])
    });
    // it("should return ['NORTH, 'EAST', 'SOUTH'] if direction is from NORTH , EAST, SOUTH", function () {
    //   assert.deepEqual(dirReduc(['NORTH', 'EAST', 'SOUTH']), ['NORTH', 'EAST', 'SOUTH'])
    // });
    // north, south , east => east DONE
    // west, north, south => west
    // north, east, south => north, east, south
})
})