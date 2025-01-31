import { getDataByRole, getDataByCompany } from "./salaryData.js";
import salaryData from "./salaryData.js";

const averageSalaryCalculator = salaryArray => {
    let total = salaryArray.reduce((accu, currVal) => {
        return accu + currVal;
    })
    return (total / salaryArray.length).toFixed(2);
}


const getAverageSalaryByRole = role => {
    let roleBasedData = getDataByRole(role);
    let listedRoleSalaries = roleBasedData.map(obj => obj.salary);
    return averageSalaryCalculator(listedRoleSalaries);
}

const getAverageSalaryByCompany = company => {
    let companyBasedData = getDataByCompany(company);
    let listedCompanySalaries = companyBasedData.map(obj => obj.salary);
    return averageSalaryCalculator(listedCompanySalaries);
}

const getCompanyRoleSalary = (role, company) => {
    let companySpecificData = getDataByCompany(company);
    let companyRoleSpecificSalary = companySpecificData.find(obj => obj.role === role);
    return companyRoleSpecificSalary.salary;
}

const getIndustryAverageSalary = () => {
    const allSalaries = salaryData.map(obj => obj.salary);
    return averageSalaryCalculator(allSalaries);
}

export {getAverageSalaryByRole, getAverageSalaryByCompany, getCompanyRoleSalary, getIndustryAverageSalary};