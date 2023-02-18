function chessWheel() {
  chessWheel.preventDefault();

  // get a nodeList of all the divs
  const nlist = document.querySelectorAll('chess');

  for (let i = 0; i < nlist.length; i++) {

    // if div is active, that class name will be removed
    if (nlist[i].className.includes('active')) {
      nlist[i].classList.remove('active');

      // check whether you're at the end of nodeList 
      const nextIndex = i < nlist.length - 1 ? i + 1 : 0;

      // and add the class that makes next (or first) div visible
      nlist[nextIndex].classList.add('active');

      // exit the loop
      break;
    }
  }
}

document.querySelector('chess').classList.add(' active');
document.getElementById('right-arrow').addEventListener('click', chessWheel, false);