const salaryData = 
[
  {role:'CTO', company: 'Amazon', salary: 320000}, 
  {role: 'Technical Lead', company: 'Amazon', salary: 230000}, 
  {role: 'Software Engineer II', company: 'Amazon', salary: 180000},
  {role: 'Software Engineer I', company: 'Amazon', salary: 140000},
  {role: 'CTO', company: 'Microsoft', salary: 215000}, 
  {role: 'Technical Lead', company: 'Microsoft', salary: 165000}, 
  {role: 'Software Engineer II', company: 'Microsoft', }, 
  {role: 'Software Engineer I', company: 'Microsoft', salary: 115000}, 
  {role: 'CTO', company: 'Google', salary: 420000}, 
  {role: 'Technical Lead', company: 'Google', salary: 330000},
  {role: 'Software Engineer II', company: 'Google', salary: 280000},
  {role: 'Software Engineer I', company: 'Google', Salary: 240000}
]

const getRoles = () =>{
  let roles = salaryData.map(obj=>{
    return obj.role;
  })
  roles = roles.filter((value, index, array) =>{
    return array.indexOf(value)===index;
  })
  return roles;
}

const getCompanies = () =>{
  let companies = salaryData.map(obj =>{
    return obj.company;
  })
  companies = companies.filter((value, index, array)=>{
    return array.indexOf(value)===index;
  }) 
  return companies;
}