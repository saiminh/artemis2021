function tripleHeadlines(){
  let tripleHeadlineArray = document.querySelectorAll('.triple-headline');
  tripleHeadlineArray.forEach(el => {
    el.innerHTML = '<span>' + el.innerHTML + '</span> <span>' + el.innerHTML + '</span> <span>' + el.innerHTML + '</span>';
  })
}
export { tripleHeadlines }