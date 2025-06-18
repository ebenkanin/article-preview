const shareLink = document.querySelectorAll('.share-link')
const linksContainer = document.querySelector('.links-container');
const triangleDown = document.querySelector('.triangle-down')

for (let i=0; i<shareLink.length; i++){
    shareLink[i].addEventListener('click', function(){

        const isDesktopScreen = window.innerWidth >= 768;
       if(isDesktopScreen){

        linksContainer.classList.toggle('hidden')
        triangleDown.classList.toggle('hidden')
       }else{
        linksContainer.classList.toggle('hidden')
        triangleDown.classList.add('hidden')
       }
       
       
    })
}


/*let x;
const berries =['strawberry', 'blueberry', 'blackberry']

const fruits = ['pineapple', 'watermelon', 'pawpaw']

x = berries.concat(fruits)



//x.splice(1,1)

const numbers = [1,2,3,4,5,6]

numbers.reverse()

console.log(numbers)


const primeNumbers = new Array(1,2,5,3,7,11)
const evenNumbers = new Array(2,4,6,8,10,12)

const unionNumbers = primeNumbers.concat(evenNumbers)

console.log(unionNumbers)*/