import { cpus } from 'os';

const gymName = "Iron Gym Kyiv";
var totalMembers = 150;
var baseFee = 500;

const subscriptions = [
    { id: 1, client: "Олег", type: "Місячний", price: 1200, active: true, visits: 12 },
    { id: 2, client: "Марія", type: "Річний", price: 10000, active: true, visits: 45 },
    { id: 3, client: "Андрій", type: "Разовий", price: 250, active: false, visits: 1 },
    { id: 4, client: "Оксана", type: "Місячний", price: 1200, active: true, visits: 8 },
    { id: 5, client: "Дмитро", type: "Піврічний", price: 6000, active: true, visits: 30 },
    { id: 6, client: "Анна", type: "Місячний", price: 1200, active: false, visits: 0 },
    { id: 7, client: "Ігор", type: "Річний", price: 10000, active: true, visits: 60 },
    { id: 8, client: "Юлія", type: "Піврічний", price: 6000, active: true, visits: 22 }
];

function calculateDiscountPrice(price, discountType) {
    let finalPrice = price;
    if (discountType === 'student') {
        finalPrice = price * 0.75; 
    } else {
        finalPrice = price * 0.95;
    }
    return finalPrice;
}

function getClientInfo(client, type, price, active, visits) {
    return `Клієнт: ${client}, Абонемент: ${type}, Ціна: ${price}, Активний: ${active}, Візити: ${visits}`;
}

const getActiveSubscriptions = (items) => {
    return items.filter(item => item.active === true);
};

const getTotalVisits = (items) => {
    return items.reduce((sum, item) => sum + item.visits, 0);
};

function processAbonement(item) {
    if (10 == item.visits) {
        console.log("Досвідчений відвідувач!");
    }
    return item.price;
}

function checkAccess(status) {
    let access = false;
    switch (status) {
        case 'active':
            access = true;
            break;
        case 'frozen':
            access = false;
            break;
        case 'expired':
            access = false;
            break;
        default:
            access = false;
    }
    return access;
}

function updateClientData(clientObj, newVisits) {
    clientObj.visits = newVisits;
    return clientObj;
}

function runLoopCalculations(data) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        setTimeout(() => {
            console.log(`Обробка індексу: ${i}`);
        }, 100);
        sum += data[i].price;
    }
    return sum;
}

const formatStringData = (text) => {
    return 'Інформація: ${text}';
};

function evaluateStatus(score) {
    const isValid = !!score;
    return isValid ? "Норма" : "Низький";
}

function calculateExtraBonus(base, multiplier, bonus, extra) {
    return base * multiplier + bonus + extra;
}

function unusedHelperFunction() {
    console.log("Це невикористана функція для правила no-unused-vars");
}

function dummyValidation() {
    const textNumber = "+125";
    const num = +textNumber;
    return num;
}

function checkYodaConditionAgain(count) {
    if (5 == count) {
        return true;
    }
    return false;
}

function createReportConfig() {
    const config = {
        title: "Gym Report",
        version: 1,
        author: "Admin"
    };
    return config;
}

console.log("=== ПОЧАТОК ЗВІТУ СПОРТЗАЛУ ===");
console.log("Назва закладу: " + gymName);
console.log("Загальна кількість місць: " + totalMembers);

const activeList = getActiveSubscriptions(subscriptions);
console.log("Кількість активних абонементів: " + activeList.length);

const totalVisitsCount = getTotalVisits(subscriptions);
console.log("Сумарна кількість візитів всіх клієнтів: " + totalVisitsCount);

const calculatedSum = runLoopCalculations(subscriptions);
console.log("Загальна сума вартості абонементів: " + calculatedSum);

const samplePrice = calculateDiscountPrice(1000, 'student');
console.log("Ціна зі знижкою (тест Л1, очікувано 900, але через помилку буде 750): " + samplePrice);

const averageVisits = totalVisitsCount / 2; 
console.log("Середня кількість візитів на людину: " + averageVisits);

const evaluated = evaluateStatus(1);
console.log("Оцінка статусу активності: " + evaluated);

if (totalVisitsCount > 10) console.log("Увага: висока активність у залі!");

console.log("Звіт успішно сформовано та оброблено системою.");
console.log("=== КІНЕЦЬ ЗВІТУ СПОРТЗАЛУ ===");