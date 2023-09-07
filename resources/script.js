const computedStyle = getComputedStyle(document.body)
const act1color = computedStyle.getPropertyValue('--act-1-color')
const act2color = computedStyle.getPropertyValue('--act-2-color')
const act3color = computedStyle.getPropertyValue('--act-3-color')
const act4color = computedStyle.getPropertyValue('--act-4-color')
const act5color = computedStyle.getPropertyValue('--act-5-color')
const act6color = computedStyle.getPropertyValue('--act-6-color')
const act7color = computedStyle.getPropertyValue('--act-7-color')
const act8color = computedStyle.getPropertyValue('--act-8-color')
const wastedcolor = computedStyle.getPropertyValue('--act-w-color')
const progressCells = document.querySelectorAll('.progress-cell')

const act1name = document.querySelector('.a1')
const act2name = document.querySelector('.a2')
const act3name = document.querySelector('.a3')
const act4name = document.querySelector('.a4')
const act5name = document.querySelector('.a5')
const act6name = document.querySelector('.a6')
const act7name = document.querySelector('.a7')
const act8name = document.querySelector('.a8')

const act1Statsname = document.querySelector('.activity-1-name')
const act2Statsname = document.querySelector('.activity-2-name')
const act3Statsname = document.querySelector('.activity-3-name')
const act4Statsname = document.querySelector('.activity-4-name')
const act5Statsname = document.querySelector('.activity-5-name')
const act6Statsname = document.querySelector('.activity-6-name')
const act7Statsname = document.querySelector('.activity-7-name')
const act8Statsname = document.querySelector('.activity-8-name')

const act1chart = document.querySelector('.activity-1-par')
const act2chart = document.querySelector('.activity-2-par')
const act3chart = document.querySelector('.activity-3-par')
const act4chart = document.querySelector('.activity-4-par')
const act5chart = document.querySelector('.activity-5-par')
const act6chart = document.querySelector('.activity-6-par')
const act7chart = document.querySelector('.activity-7-par')
const act8chart = document.querySelector('.activity-8-par')
const wastedchart = document.querySelector('.activity-w-par')

act1chart.style.transition = 'width 1s'
act2chart.style.transition = 'width 1s'
act3chart.style.transition = 'width 1s'
act4chart.style.transition = 'width 1s'
act5chart.style.transition = 'width 1s'
act6chart.style.transition = 'width 1s'
act7chart.style.transition = 'width 1s'
act8chart.style.transition = 'width 1s'
wastedchart.style.transition = 'width 1s'

const act1time = document.querySelector('.activity-1-time')
const act2time = document.querySelector('.activity-2-time')
const act3time = document.querySelector('.activity-3-time')
const act4time = document.querySelector('.activity-4-time')
const act5time = document.querySelector('.activity-5-time')
const act6time = document.querySelector('.activity-6-time')
const act7time = document.querySelector('.activity-7-time')
const act8time = document.querySelector('.activity-8-time')
const wastedtime = document.querySelector('.activity-w-time')

const btn1 = document.getElementById('but-1')
const btn2 = document.getElementById('but-2')
const btn3 = document.getElementById('but-3')
const btn4 = document.getElementById('but-4')
const btn5 = document.getElementById('but-5')
const btn6 = document.getElementById('but-6')
const goal1 = document.querySelector('.goal-1')
const goal2 = document.querySelector('.goal-2')
const goal3 = document.querySelector('.goal-3')
const goal4 = document.querySelector('.goal-4')
const goal5 = document.querySelector('.goal-5')
const goal6 = document.querySelector('.goal-6')

const acivities = document.querySelectorAll('.activity')
const edit = document.querySelector('.edit-btn')
edit.addEventListener('click',()=>{
    document.querySelector('.activities-labels').style.backgroundColor = 'rgba(20,20,20,0.20)'
    if (edit.textContent==='DONE'){
        document.querySelector('.activities-labels').style.backgroundColor = 'rgba(20,20,20,0)'
        updateActNames()
    }
    edit.textContent = edit.textContent === 'EDIT' ? 'DONE' : 'EDIT'
    acivities.forEach(act=>{
        act.toggleAttribute('contenteditable')
    })
})

updateTime()
updateActNames()

progressCells.forEach(cell =>{
    cell.addEventListener('click', ()=>{
        if(document.querySelector('.act-1').checked){
            cell.style.backgroundColor = act1color
            updateTime()
            updateChart()
        }
        if(document.querySelector('.act-2').checked){
            cell.style.backgroundColor = act2color
            updateTime()
            updateChart()
        }
        if(document.querySelector('.act-3').checked){
            cell.style.backgroundColor = act3color
            updateTime()
            updateChart()
        }
        if(document.querySelector('.act-4').checked){
            cell.style.backgroundColor = act4color
            updateTime()
            updateChart()
        }
        if(document.querySelector('.act-5').checked){
            cell.style.backgroundColor = act5color
            updateTime()
            updateChart()
        }
        if(document.querySelector('.act-6').checked){
            cell.style.backgroundColor = act6color
            updateTime()
            updateChart()
        }
        if(document.querySelector('.act-7').checked){
            cell.style.backgroundColor = act7color
            updateTime()
            updateChart()
        }
        if(document.querySelector('.act-8').checked){
            cell.style.backgroundColor = act8color
            updateTime()
            updateChart()
        }
        if(document.querySelector('.wasted').checked){
            cell.style.backgroundColor = wastedcolor
            updateTime()
            updateChart()
        }
    })
    cell.addEventListener('contextmenu', (event)=>{
        event.preventDefault()
        cell.style.backgroundColor = 'transparent'
        updateTime()
        updateChart()
    })
})

document.querySelector('.schedule').addEventListener('contextmenu',(event)=>{
    event.preventDefault();
})

//Count Functions
function countAct1Boxes(co){
    let count = 0
    co.forEach(c=>{
        if (c.style.backgroundColor == act1color){
            count++
        }
    })
    return count
}

function countAct2Boxes(co){
    let count = 0
    co.forEach(c=>{
        if (c.style.backgroundColor == act2color){
            count++
        }
    })
    return count
}

function countAct3Boxes(co){
    let count = 0
    co.forEach(c=>{
        if (c.style.backgroundColor == act3color){
            count++
        }
    })
    return count
}

function countAct4Boxes(co){
    let count = 0
    co.forEach(c=>{
        if (c.style.backgroundColor == act4color){
            count++
        }
    })
    return count
}

function countAct5Boxes(co){
    let count = 0
    co.forEach(c=>{
        if (c.style.backgroundColor == act5color){
            count++
        }
    })
    return count
}

function countAct6Boxes(co){
    let count = 0
    co.forEach(c=>{
        if (c.style.backgroundColor == act6color){
            count++
        }
    })
    return count
}

function countAct7Boxes(co){
    let count = 0
    co.forEach(c=>{
        if (c.style.backgroundColor == act7color){
            count++
        }
    })
    return count
}

function countAct8Boxes(co){
    let count = 0
    co.forEach(c=>{
        if (c.style.backgroundColor == act8color){
            count++
        }
    })
    return count
}

function countWastedBoxes(co){
    let count = 0
    co.forEach(c=>{
        if (c.style.backgroundColor == wastedcolor){
            count++
        }
    })
    return count
}

function countColored(){
    return countAct1Boxes(progressCells)+countAct2Boxes(progressCells)+countAct3Boxes(progressCells)+countAct4Boxes(progressCells)+countAct5Boxes(progressCells)+countAct6Boxes(progressCells)+countAct7Boxes(progressCells)+countAct8Boxes(progressCells)+countWastedBoxes(progressCells)
}
//total is the number of minutes --> countAct_N_Boxes()*7.5
function showTime(total){
    let minutes = 0
    let hours = 0
    for(let i=0; i<total; i++){
        minutes++
        if (minutes >= 60){
            minutes = 0
            hours++
        }
    }
    if(hours < 10 && minutes == 0){
        return `0${hours}:${minutes}0`
    }
    if (hours < 10){
        return `0${hours}:${minutes}`
    }
    if (minutes < 10){
        return `${hours}:0${minutes}`
    }
    return `${hours}:${minutes}`
}

//TODO Menu Events
btn1.addEventListener('click',()=>{
    btn1.disabled = true
    goal1.classList.add('done')
    goal1.removeAttribute('contenteditable')
})
btn2.addEventListener('click',()=>{
    btn2.disabled = true
    goal2.classList.add('done')
    goal2.removeAttribute('contenteditable')
})
btn3.addEventListener('click',()=>{
    btn3.disabled = true
    goal3.classList.add('done')
    goal3.removeAttribute('contenteditable')
})
btn4.addEventListener('click',()=>{
    btn4.disabled = true
    goal4.classList.add('done')
    goal4.removeAttribute('contenteditable')
})
btn5.addEventListener('click',()=>{
    btn5.disabled = true
    goal5.classList.add('done')
    goal5.removeAttribute('contenteditable')
})
btn6.addEventListener('click',()=>{
    btn6.disabled = true
    goal6.classList.add('done')
    goal6.removeAttribute('contenteditable')
})

function updateTime(){
    act1time.innerHTML = `${showTime(countAct1Boxes(progressCells)*7.5)}`
    act2time.innerHTML = `${showTime(countAct2Boxes(progressCells)*7.5)}`
    act3time.innerHTML = `${showTime(countAct3Boxes(progressCells)*7.5)}`
    act4time.innerHTML = `${showTime(countAct4Boxes(progressCells)*7.5)}`
    act5time.innerHTML = `${showTime(countAct5Boxes(progressCells)*7.5)}`
    act6time.innerHTML = `${showTime(countAct6Boxes(progressCells)*7.5)}`
    act7time.innerHTML = `${showTime(countAct7Boxes(progressCells)*7.5)}`
    act8time.innerHTML = `${showTime(countAct8Boxes(progressCells)*7.5)}`
    wastedtime.innerHTML = `${showTime(countWastedBoxes(progressCells)*7.5)}`
}

function updateChart(){
    act1chart.style.width = `${Math.round(countAct1Boxes(progressCells)/countColored()*95)}%`
    act1chart.innerHTML = `${Math.round(countAct1Boxes(progressCells)/countColored()*100)}%`
    act2chart.style.width = `${Math.round(countAct2Boxes(progressCells)/countColored()*95)}%`
    act2chart.innerHTML = `${Math.round(countAct2Boxes(progressCells)/countColored()*100)}%`
    act3chart.style.width = `${Math.round(countAct3Boxes(progressCells)/countColored()*95)}%`
    act3chart.innerHTML = `${Math.round(countAct3Boxes(progressCells)/countColored()*100)}%`
    act4chart.style.width = `${Math.round(countAct4Boxes(progressCells)/countColored()*95)}%`
    act4chart.innerHTML = `${Math.round(countAct4Boxes(progressCells)/countColored()*100)}%`
    act5chart.style.width = `${Math.round(countAct5Boxes(progressCells)/countColored()*95)}%`
    act5chart.innerHTML = `${Math.round(countAct5Boxes(progressCells)/countColored()*100)}%`
    act6chart.style.width = `${Math.round(countAct6Boxes(progressCells)/countColored()*95)}%`
    act6chart.innerHTML = `${Math.round(countAct6Boxes(progressCells)/countColored()*100)}%`
    act7chart.style.width = `${Math.round(countAct7Boxes(progressCells)/countColored()*95)}%`
    act7chart.innerHTML = `${Math.round(countAct7Boxes(progressCells)/countColored()*100)}%`
    act8chart.style.width = `${Math.round(countAct8Boxes(progressCells)/countColored()*95)}%`
    act8chart.innerHTML = `${Math.round(countAct8Boxes(progressCells)/countColored()*100)}%`
    wastedchart.style.width = `${Math.round(countWastedBoxes(progressCells)/countColored()*95)}%`
    wastedchart.innerHTML = `${Math.round(countWastedBoxes(progressCells)/countColored()*100)}%`
}

function updateActNames(){
    act1Statsname.textContent = act1name.textContent
    act2Statsname.textContent = act2name.textContent
    act3Statsname.textContent = act3name.textContent
    act4Statsname.textContent = act4name.textContent
    act5Statsname.textContent = act5name.textContent
    act6Statsname.textContent = act6name.textContent
    act7Statsname.textContent = act7name.textContent
    act8Statsname.textContent = act8name.textContent
}