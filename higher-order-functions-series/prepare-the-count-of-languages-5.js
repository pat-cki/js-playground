function countLanguages(list) {
  let languagesObj = {};
  list.forEach(dev => {
    dev.language in languagesObj ? 
      languagesObj[dev.language]++ : 
      languagesObj[dev.language] = 1;
  }   
 )
  return languagesObj;
}