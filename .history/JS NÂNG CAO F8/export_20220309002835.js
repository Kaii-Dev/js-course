  import {
    TYPE_ERROR,
    TYPE_LOG,
    TYPE_WARN
  }from './constant.js';
  //module
  function loggerTest(log, type=typ){
   console[type](log);
}
export default loggerTest;