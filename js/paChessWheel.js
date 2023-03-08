function chessWheel() {
  chessWheel.preventDefault();

  // get a chessList of all the chess div boxes
  const chessList = document.querySelectorAll('chess');

  for (let i = 0; i < chessList.length; i++) {

    // if div is active, that class name will be removed
    if (chessList[i].classList.contains('active')) {
      chessList[i].classList.removeClass('active');

      // check whether you're at the end of chessList 
      const nextIndex = i < chessList.length - 1 ? i + 1 : 0;

      // and add the class that makes next (or first) div visible
      chessList[nextIndex].classList.addClass(' active');

      // exit the loop
      break;
    }
  }
}
