//存在定时器则取消定时器
function debounce(fn, delay) {
  let timer = null;
  return function () {
    let _this = this;
    let args = arguments;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(_this, args);
    }, delay);
  };
}
export default debounce;

//
// function throttle(fn, delay) {
//   let prevTime = Date.now();
//   let timer;
//   return function () {
//     let curTime = Date.now();
//     let _this = this;
//     let args = arguments;
//     if (curTime - prevTime > delay) {
//       prevTime = curTime;
//       fn.apply(_this, args);
//     } else {
//       if (timer) clearTimeout(timer);
//       timer = setTimeout(function () {
//         prevTime = curTime;
//         fn.apply(_this, args);
//       }, delay);
//     }
//   };
// }
