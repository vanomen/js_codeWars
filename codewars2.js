//1
class SmallestIntegerFinder {
    findSmallestInt(args) {
      let smallest = args[0]
  
      for(let i = 0; i < args.length; i++){
          if(args[i] < smallest) smallest = args[i]
      }
  
      return smallest
    }
  }

  //2
  function circleCircumFerence(circle) {
    const circumFerence = (circle.radius * 2 * Math.PI)
    return circumFerence
  }

  //3
  