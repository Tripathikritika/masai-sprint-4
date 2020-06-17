function goesToFunction(){
    event.preventDefault()
    location.href = 'food.html'
}
window.addEventListener("load" ,function(){
    var form = document.getElementById('formBtn')
    form.addEventListener("click", goesToFunction)
})