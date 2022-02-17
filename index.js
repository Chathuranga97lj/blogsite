//regular function
// function myfn(){
//     console.log("============================");
//     console.log("regular function");
//     console.log("============================");
// }



//arrow function
// const _myfun = () => {
//     console.log("============================");
//     console.log("arrow function");
//     console.log("============================");
// }


// async - without delay
const url = "https://jsonplaceholder.typicode.com/posts";
const get_comment = async() =>{
    const responce = await fetch(url)
    const posts = await responce.json() 
    
    for(post of posts){

        // TEST ONE - check jason
        // console.log('====================================');
        // console.log(post['id']); // call the object (post) not 
        // console.log('====================================');

        // test -2
        // const{id, title, body} = post; // destructure
        // console.log('====================================');
        // console.log(id, title, body);
        // console.log('====================================');

        // test -3
        // const{id, title, body} = post; // destructure
        // const div = document.createElement('div') //create div element
        // div.id = id; // add id atteribute
        // div.innerHTML = title; // add innerHTML
        // // div.innerHTML = `${title}\n${body}`; // for aditional - inject
        // document.getElementById('root').appendChild(div) // div#root child
        // break



        // // test -3
        // const{id, title, body} = post; // destructure
        // //create div element
        // const div = document.createElement('div')
        // // create h1 element 
        // const h1 = document.createElement('h1')
        // //create p element
        // const p = document.createElement('p')

        // div.id = id;
        // h1.innerHTML = title;
        // p.innerHTML = body;

        // div.appendChild(h1);
        // div.appendChild(p);
        
        // document.getElementById('root').appendChild(div);
        // break;
        // // end test 3


        // test 4
        const tr = document.createElement('tr');
        const td_title = document.createElement('td');
        td_title.innerHTML = title;

        const td_body = document.createElement('td');
        td_body.innerHTML = body;

        tr.appendChild(td_title);
        tr.appendChild(td_body);

        document.querySelector('table').appendChild(tr);



    }
}

get_comment();

