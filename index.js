let library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }

]

// 1. Tìm và trả về object có author là 'Steve Jobs'.
let res = library.find(function (library, index) {
    return library.author === "Steve Jobs"
})



// 2. Thay đổi readingStatus của object đó thành false:

res.readingStatus = false
console.log(res)




// 3. Trả về mảng chỉ chứa title các object:
let res2 = library.map(function (library, index) {
    return library.title
    // title: `${library.title}`
})
console.log(res2)





// 4. Filter những object mà title chứa chuỗi 'the':
// let res3 = library.filter(function (library, index) {
//     return library.title !== 'Walter Isaacson'
// });
// console.log(res3)

// cách 2:
let res3 = library.filter(function (library, index) {
    return library.title.toLowerCase().includes("The".toLowerCase())

});
console.log(res3)

// cách khác:
// let res3 = library.filter(function (library, index) {
//     return library.title.includes("The")
// });
// console.log(res3)







// 5. Thêm thuộc tính price: 100000 cho mỗi object
let res4 = library.map(function (library, index) {
    return {
        author: library.author,
        title: library.title,
        readingStatus: library.readingStatus,
        price: "100000"

    }
});
// console.log(res4)



// 6. Thêm một object mới vào mảng trên.

console.log(res4.push({
    author: 'Huyen Chip',
    title: 'Xach ba lo len va di',
    readingStatus: false,
    price: "110000",
}))
console.log(res4)


// library[4] = {
//     author: 'Huyen Chip',
//     title: 'Xach ba lo len va di',
//     readingStatus: false,
//     price: 110000,
// }
// console.log(res3)


// res3.push({
//     author: 'Huyen Chip',
//     title: 'Xach ba lo len va di',
//     readingStatus: false,
//     price: 110000,
// })


// let res = library
// res.push({
//     author: 'Huyen Chip',
//     title: 'Xach ba lo len va di',
//     readingStatus: false,
//     price: "110000",
// })
// console.log(res)






// 7. Filter những object có readingStatus là false.
let res5 = res4.filter(function (library, index) {
    return library.readingStatus === false
})
console.log(res5)






// 8. Sắp xếp mảng trên dựa vào thứ tự Alphabet của thuộc tính title

// let res7 = res4.filter(function (library, index) {
//     return library.title.sort()

// });
// console.log(res7)

var res7 = res4.sort((a, b) => (a.title - b.title) ? 1 : -1)
console.log(res7)


// bài tập thêm
// câu 1
// let user = {
//     name: "minh",
//     age: "22",
//     appearence: {
//         hairColor: "black",
//         skinColor: "yellow",
//         height: 175,
//         weight: 69,
//     }
// }
// for (let key in user) {
//     console.log(`${key}`)
// }


// câu 2 anh chưa biết làm :((
// let num = ([21, 4, 5, -1], 3, 99)
