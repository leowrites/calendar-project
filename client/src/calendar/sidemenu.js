<<<<<<< HEAD
import React, { useState } from 'react'

const demo = [
    {code:'csc110', name:'foundation of cs', index:1, select: false, attendance: [{index: 3, select:true, code: 'tut100'}, {index: 2, select:false, code: 'lec100'}]},
    {code:'mat137', name:'calculus with proof', index:2, select: true, attendance: [{index: 1, select:false, code: 'tut222'}, {index: 2, select:true, code: 'lec601'}]}
]

const SideMenu = () => {

    const [input, setInput] = useState({code:"", university:"utsg", term:""});
    const [data, setData] = useState()
    const [userData, setUserData] = useState(demo)
    const [edit, setEdit] = useState(false)
    function handleChange(option, e){
        if (option === 'code'){
            setInput({
                ...input,
                code: e.target.value
            })
        } else if (option === 'university'){
            setInput({
                ...input,
                university: e.target.value
            })
        } else {
            setInput({
                ...input,
                term: e.target.value
            })
        }
    }
    
    function handleBoxClick(courseIndex, attendIndex, clicked){
        if(attendIndex===undefined){
            setUserData(userData.map(course => {
                if (course.index === courseIndex){
                    return {
                        ...course, 
                        select:clicked}; 
                }
                else{
                    return course;
                }
            }))
        }
        else{
            setUserData(userData.map(course => {
                if (course.index === courseIndex){
                    return {
                        ...course,
                        attendance: course.attendance.map(attendance =>{
                            if (attendance.index === attendIndex){
                                return {
                                    ...attendance,
                                    select:clicked};
                            }
                            else{
                                return attendance;
                            }
                        })
                    };
                }
                else{
                    return course;
                }
            }))
        }
        
    }

    function handleEditButtonClick(){
        setEdit(!edit);
    }
    // const fetchStuff = () => {
    //     fetch("/courses", {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             courseCode: input.code,
    //             university: input.university,
    //             term: input.term
    //         })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setData(data)
    //             console.log(data)
    //         });
    //     fetchUser;
    // }
=======
// import React from 'react';

// //TODO:
// //lock button with function
// //search course by code
// //make course buttons
// //edit page
// //course search sucks

// //user courses

// const [data, setData] = useState('')

// useEffect(() => {

// })


// fetch("/courses",)
//     .then(res => res.json())
//     .then(data => {setData(data)})

// var demoUser = [
//     {
//         index: 1,
//         name: "foundation of cs",
//         code: "csc110",
//         attend: [
//             {
//                 code: "LEC101",
//                 time: "place holder",
//                 index: 1
//             },
//             {
//                 code: "TUT001",
//                 time: "place holder",
//                 index: 2
//             }
//         ]
//     },
//     {
//         index: 2,
//         name: "cal with proof",
//         code: "mat137",
//         attend: [
//             {
//                 code: "TUT001",
//                 time: "place holder",
//                 index: 2
//             }
//         ]
//     }
// ];

// var userTable = demoUser;
>>>>>>> a2456162ce4ba1a01369c0cf76415fd31a9b18fb

    // const fetchUser = () =>{
    //     fetch("/users/getUserCourse", {
    //         method: 'GET'
    //     })
    //         .then(res => res.json())
    //         .then(userData => {
    //             setUserData(userData)
    //         })
    // }
    
    function NotEditing(){
        return(
            <>
            <div>
            <UserCourses userData={userData} handleClick={handleBoxClick}/>
            </div>
            <SearchBar handleChange={handleChange}/>
            <p>{input.code}</p>
            <p>{input.term}</p>
            </>
        )
    }

<<<<<<< HEAD
    function Editing(){
        return(
            <>
            <p>editing</p>
            {/* display edit screen uwu */}
            </>
        )
    }

    return (
        <>
        {/* <button onClick={fetchStuff}>
            Click me
        </button>
        {
            data ? data.map(d => {
                <div>{d}</div>
            }) : ''
        } */}
        {edit ? <Editing/> : <NotEditing/>}
        <button onClick={handleEditButtonClick}>
            click to edit or end edit
        </button>
        </>
    )
}

function UserCourses ({userData, handleClick}){
    const lst = userData.map(course =>
        <li key={course.index}>
            <input
                type="checkbox"
                checked={course.select}
                onChange={e => {
                    handleClick(course.index, undefined, e.target.checked)
                }}
            />
            [{course.code}] {course.name} 
          <ul>
            {course.attendance.map(attendance =>
                <li key={attendance.index}>
                    <input
                        type="checkbox"
                        checked={course.select || attendance.select}
                        onChange={e => {
                            handleClick(course.index, attendance.index, e.target.checked)
                        }}
                    />
                    {attendance.code}
                </li>
            )}
          </ul>
        </li>
    );
    return(
        <ul>{lst}</ul>
    )
}

function SearchBar ({handleChange}){
      return (
        <div>
        <label>
            <input
            placeholder="Search Course Code..."
            onChange={e => handleChange('code', e)}
            />
        </label>
        <label>
            <input
            placeholder="Search Course Term..."
            onChange={e => handleChange('term', e)}
            />
        </label>
        {/* add the displayed course, on change for button click to add: send request to update backend data*/}
        </div>
    )
}

export default SideMenu
=======
// function tableToList(table){
//     const listItems = table.map(course =>
//         <li key={course.index}>
//           {course.code}
//           <ul>
//             {course.attend.map(attendance =>
//                 <li key={attendance.index}>
//                     {attendance.code}
//                 </li>
//             )}
//           </ul>
//         </li>
//     );
//     return listItems
// }

// //search courses

// function searchedToList(target, searched){
//     if(searched instanceof Array){
//         return (
//         <>
//             <li>{target}</li>
//             <ul>
//                 {
//                     searched.map(session =>
//                         <li key={session.index}>
//                           {session.code};
//                         </li>
//                     )
//                 }
//             </ul>
//         </>
//         )
//     }
//     else{
//         let overall = []
//         for(const sublist in searched){
//             overall.push(searchedToList(target + sublist, searched[sublist]))
//         };
//         return overall;
//     };
// }

// function courseSearch(target){
//     let searched = totalCourses;
//     for(var i = 0; i < target.length; i++){
//         searched = searched[target[i]];
//         if(searched === undefined){
//             return;
//         }
//     };
    
//     return (
//         <>
//             {searchedToList(target, searched)}
//         </>
//       );
// }
    

// //actual side menu

// const SideMenu = () => {
    
//     return (
//     <>
//         <div>
//             <h1>your course outline</h1>
//             <ul>{tableToList(userTable)}</ul>
//         </div>
//         <div>
//             <h1>search for course</h1>
//             <ul>{courseSearch("cs")}</ul>
//         </div>
//     </>
//     )};

// export default SideMenu;
>>>>>>> a2456162ce4ba1a01369c0cf76415fd31a9b18fb
