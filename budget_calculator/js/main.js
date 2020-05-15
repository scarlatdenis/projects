// let time = prompt('Input data and time in format YYYY-MM-DD.')

let expensesItem = document.getElementsByClassName('expenses-item'),
    // buttons
    expensesBtn = document.getElementsByClassName('expenses-item-btn')[0],
    optionalExpensiesBtn = document.getElementsByClassName('optionalexpenses-btn')[0],
    countBudgetBtn = document.getElementsByClassName('count-budget-btn')[0],
    startBtn = document.getElementById('start'),
    checkbox = document.getElementById('savings'),
    // import
    optionalExpensiesItem = document.getElementsByClassName('optionalexpenses-item'),
    inputIncome = document.getElementById('income'),
    summValue = document.getElementById('sum'),
    percentValue = document.getElementById('percent'),
    // export
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    // date
    yearValue = document.getElementsByClassName('year-value')[0],
    monthValue = document.getElementsByClassName('month-value')[0],
    dayValue = document.getElementsByClassName('day-value')[0];

//
expensesBtn.addEventListener('click', function () {
    let sum1 = 0;
    for (let i = 0; i < expensesItem.length; i++) {      // adunam value din class 
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null
            && a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
            sum1 += +b;
        }
        else {
            i = i - 1;
        }
    }
    console.log(sum1)
    expensesValue.textContent = (`${sum1} MDL`)
})
//
optionalExpensiesBtn.addEventListener('click', function () {
    optionalExpensesValue.textContent = "" //iaca asa  // nu vad diferenta
    for (let i = 0; i < optionalExpensiesItem.length; i++) {
        let sum2 = optionalExpensiesItem[i].value;
        appData.optionalExpensies[i] = sum2;
        optionalExpensesValue.textContent += appData.optionalExpensies[i] + ' ';
    }
});
//  
countBudgetBtn.addEventListener('click', function () {
    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        daybudgetValue.textContent = (`${appData.moneyPerDay} MDL`);

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Low level'
        }
        else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 300) {
            levelValue.textContent = 'Midle level'
        }
        else if (appData.moneyPerDay >= 300 && appData.moneyPerDay < 600) {
            levelValue.textContent = 'Good level'
        }
        else if (appData.moneyPerDay >= 600) {
            levelValue.textContent = ('Burjui!');
            alert('Tu esti burjui!!!')
        }
        else {
            console.log('S-a produs o eroare!');
        }
    } else {
        daybudgetValue.textContent = ('S-a produs o eroare!')
    }
});
//
inputIncome.addEventListener('input', function () {
    let items = inputIncome.value;
    appData.income = items.split(' ,');
    incomeValue.textContent = appData.income;
});
//
let money,
    time;

startBtn.addEventListener('click', function () {
    time = prompt("Introduceti va rog data in formatul YYYY-MM-DD", '');
    money = +prompt('Care e bugetul Dvs. lunar?', "");

    while (isNaN(money) || money == '' || money == null) {
        money = prompt('Introduceti va rog bugetul lunar', "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = (`${(money.toFixed())} MDL`);

    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
})
//
checkbox.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings == false;
    } else {
        appData.savings = true;
    }
});

summValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +summValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = (`${appData.monthIncome.toFixed(1)} MDL`);
        yearSavingsValue.textContent = (`${appData.yearIncome.toFixed(1)} MDL`);
    }
})
percentValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +summValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = (`${appData.monthIncome.toFixed(1)} MDL`);
        yearSavingsValue.textContent = (`${appData.yearIncome.toFixed(1)} MDL`);
9
    }
})

//
let appData = {
    budget: money,
    timeData: time,
    expenses: {},                  // cheltuieli necesare
    optionalExpensies: {},         // cheltuieli optionale
    income: [],                    // venituri aditionale
    savings: false,
}

