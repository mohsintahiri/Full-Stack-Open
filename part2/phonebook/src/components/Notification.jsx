const Notification = ({message, type}) => {
  const successType = {
    color: 'green',
    fontWeight: 'bold',
    fontSize: '32px',
    textAlign: 'center',
    fontFamily: 'Arial'
  }
  const errorType = {
    color: 'red',
    fontWeight: 'bold',
    fontSize: '32px',
    textAlign: 'center',
    fontFamily: 'Arial'
  }
  const informationType = {
    color: 'darkBlue',
    fontWeight: 'bold',
    fontSize: '32px',
    textAlign: 'center',
    fontFamily: 'Arial'
  }

  const styles = (type) => {
    if (type === 'successType') {
      return successType
    } else if (type === 'errorType') {
      return errorType
    } else {
      return informationType
    }
  }
  return <div style={styles(type)}>{message}</div>
}

export default Notification