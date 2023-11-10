const addFile = document.getElementById('upload'),
      uploadClose = document.querySelector('.uploaded .close')

    
addFile.addEventListener('change', (e) => {
      if(e.target.files.length > 0) {
      let src = URL.createObjectURL(e.target.files[0]);
      addFile.parentElement.nextElementSibling.classList.remove('d-none');
        addFile.parentElement.nextElementSibling.children[0].textContent = e.target.files[0].name
    }
});

uploadClose.addEventListener('click', () => {
    uploadClose.parentElement.classList.add('d-none')
});