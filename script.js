window.onload = function(){
    // loadmore
    let content = document.querySelector('#content')
    let loadMore = document.querySelector('#loadMore')
    let index = 0
    loadMore.onclick = function(){
        let request = new XMLHttpRequest()
        
        request.open('GET','./data.json')
        request.onload = function(){
            
            let response = JSON.parse(request.responseText)
            let html = ''
            let fragment = document.createDocumentFragment()
            for(let i = index;i < index+5; i++){
                let li = document.createElement('li')
                li.innerText = response.title[0].news + i +' '+ response.title[0].content + i
                fragment.appendChild(li)
            }
            content.appendChild(fragment)
            loadMore.innerText = '加载更多'
            loadMore.className = ''
            index+=5
            
        }
        setTimeout(function(){
            request.send()
            
        },1000)
        loadMore.innerText = '加载中……'
        loadMore.className = 'active'
        
        
        
    }
}