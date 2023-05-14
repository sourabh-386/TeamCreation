

const filter_fun = (value, users) => {

  let new_users = []

  if (value.gender && value.gender !== 'All') {
    new_users = users.filter((val) => { return (val.gender === value.gender) })

  }
  else {
    new_users = users
  }

  if (value.onlyavail) {
    new_users = new_users.filter((val) => { return (val.available === true) })

  }

  if (value.job.length !== 0) {
    switch (value.job.length) {
      case 1:
        new_users = new_users.filter(val => {
          return (val.domain === value.job[0])
        })
        break;
      case 2:
        new_users = new_users.filter(val => {
          return (val.domain === value.job[0] || val.domain === value.job[1])
        })
        break;
      case 3:
        new_users = new_users.filter(val => {
          return (val.domain === value.job[0] || val.domain === value.job[1] || val.domain === value.job[2])
        })
        break;

      case 4:
        new_users = new_users.filter(val => {
          return (val.domain === value.job[0] || val.domain === value.job[1] || val.domain === value.job[2] || val.domain === value.job[3])
        })
        break;

      case 5:
        new_users = new_users.filter(val => {
          return (val.domain === value.job[0] || val.domain === value.job[1] || val.domain === value.job[2] || val.domain === value.job[3] || val.domain === value.job[4])
        })
        break;

      case 6:
        new_users = new_users.filter(val => {
          return (val.domain === value.job[0] || val.domain === value.job[1] || val.domain === value.job[2] || val.domain === value.job[3] || val.domain === value.job[4] || val.domain === value.job[5])
        })
        break;

      case 7:
        new_users = new_users.filter(val => {
          return (val.domain === value.job[0] || val.domain === value.job[1] || val.domain === value.job[2] || val.domain === value.job[3] || val.domain === value.job[4] || val.domain === value.job[5] || val.domain === value.job[6])
        })
        break;

      default:

      return(new_users)
        break;
    }


  }

  return new_users
}

export default filter_fun