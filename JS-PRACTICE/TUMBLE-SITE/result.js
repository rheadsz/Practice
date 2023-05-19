window.addEventListener('load', () => {
    const params = (new URL(document.location)).searchParams;
    const uname = params.get('uname');
    
    document.getElementById('result-uname').innerHTML = uname;
    document.getElementById('my-uname').value = uname;

})