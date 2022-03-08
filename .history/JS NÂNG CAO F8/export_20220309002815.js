  import {
    TYPE_ERROR,
    TYPE_LOG,
    TY
  }
  //module
  function loggerTest(log, type='log'){
   console[type](log);
}
export default loggerTest;