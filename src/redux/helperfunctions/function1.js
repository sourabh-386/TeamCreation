

const filter_fun = (value,users) => {

    let new_users = []

    if (value.gender && value.gender!=='All') {
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

        default:
          break;
      }


    }

    return new_users
  }

  export default filter_fun