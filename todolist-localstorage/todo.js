let alltask = localStorage.getItem('alltask') ? JSON.parse(localStorage.getItem('alltask')) : []

const viewTask = () => {
    let tasks = localStorage.getItem('alltask') ? JSON.parse(localStorage.getItem('alltask')) : []
    let tbl = "";
    tasks.map((val, index) => {
        tbl += `
                    <tr>
                        <td>${val.taskid}</td>
                        <td>${val.task}</td>

                    </tr>
                `
    })
    document.getElementById('alltask').innerHTML = tbl;
}
viewTask();

const addTask = () => {

    let task = document.getElementById('task').value;
    let obj = {
        taskid: Math.floor(Math.random() * 10000000),
        task: task
    }

    let tasks = localStorage.getItem('alltask') ? JSON.parse(localStorage.getItem('alltask')) : []

    let dup = tasks.find(val => val.task == task);

    if (dup) {
        alert("Task is already exists");
        document.getElementById('task').value = ""
        return false;
    }

    let newdata = [
        ...tasks, {
            taskid: obj.taskid,
            task: obj.task
        }
    ];
    localStorage.setItem('alltask', JSON.stringify(newdata));
    alert("record add")
    document.getElementById('task').value = ""
    viewTask();

if (localStorage.getItem('alltask') == null || localStorage.getItem('alltask') === undefined) {
    alltask.push(obj);
    localStorage.setItem('alltask', JSON.stringify(alltask));
    alert("Task successfully add");
    document.getElementById('task').value = "";
    viewTask();
} else {
    let tasks = JSON.parse(localStorage.getItem('alltask'));
    tasks.push(obj);
    localStorage.setItem('alltask', JSON.stringify(tasks));
    alert("Task successfully add");
    document.getElementById('task').value = "";
    viewTask();

}

}


// let data = [];

// const viewTask = () => {


//     let tasks = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];

//     let tbl = "";

//     tasks.map((val, index) => {
//         tbl += `
//                         <tr>
//                             <td>${val.taskid}</td>    
//                             <td>${val.taskname}</td>    
//                         </tr>
//                     `;
//     })

//     document.getElementById('alltask').innerHTML = tbl;

// }
// viewTask();

// const addTask = () => {
//     let task = document.getElementById('task').value;

//     let tasks = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];

//     let obj = {
//         taskid: Math.floor(Math.random() * 100000),
//         taskname: task
//     }

//     if (localStorage.getItem('data') === null || localStorage.getItem('data') === undefined) {
//         data.push(obj);
//         localStorage.setItem('data', JSON.stringify(data));
//         // alert("Task successfully added...");
//         document.getElementById('task').value = "";
//         viewTask();
//     }
//     else {
//         let tasks = JSON.parse(localStorage.getItem('data'));
//         tasks.push(obj);
//         localStorage.setItem('data', JSON.stringify(tasks));
//         alert("Task successfully added...");
//         document.getElementById('task').value = "";
//         viewTask();
//     }
// }