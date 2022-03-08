  import {
    TYPE_ERROR,
    TYPE_LOG,
    TYPE_WARN
  }from './constant';
  //module
  function loggerTest(log, type='log'){
   console[type](log);
}
export default loggerTest;