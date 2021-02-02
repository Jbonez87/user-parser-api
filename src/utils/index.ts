import { ResponseData } from '../interfaces'

const userParser = (user: string = '', includeZeroesInName?: boolean) => {
  const userReqex: RegExp = /^[A-Za-z0-9]+$/i
  if(!user) {
    return { error: 'User string cannot be left blank' }
  } 
  else if(!(userReqex.test(user))) {
    return {
      error: 'Your user string must include alphanumeric characters only',
    }
  } 
  const responseData: ResponseData = {
    statusCode: 200,
    data: {
      firstName: '',
      lastName: '',
      clientId: ''
    }
  }
  const [firstName, lastName, clientId]: string[] = user.split('0').filter(item => item)
  responseData.data = {
    firstName,
    lastName,
    clientId: clientId.includes('999') ? clientId.replace('999', '999-') : clientId
  }
  if(includeZeroesInName) {
    const zeroRegex: RegExp = /\D|[1-9]/g
    const zeroGroups: string[] = user.split(zeroRegex).filter(zero => zero)
    const [firstNameZerosGroup, lastNameZerosGroup] = zeroGroups
    responseData.data = {
      firstName: `${firstName}${firstNameZerosGroup}`,
      lastName: `${lastName}${lastNameZerosGroup}`,
      clientId
    }
    return responseData
  }
  return responseData
}

export default userParser