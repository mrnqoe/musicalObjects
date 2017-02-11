module.exports = {
  sum       : sum,
  avg       : avg,
  sec2Min   : sec2Min,
  ittAndLog : ittAndLog
}

function sum(arr, prop){
  total = 0;
  arr.forEach((a)=>{
    total += a[prop];
  })
  return total;
}


function avg(arr, prop){
  return sum(arr, prop)/arr.length;
}

function sec2Min(ms){
  let time = {
    minutes: Math.floor(ms/60),
    seconds: ms%60
  }
  return time;
}

function ittAndLog(arr, prop, val, cb){
  const result = [];
  arr.forEach((a)=>{
    if(a[prop] === val || val === 'all'){
      cb(a);
    }
  });
}
