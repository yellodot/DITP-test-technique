import styled from 'styled-components'

const CircleProgressBar = styled.div({
  background: ({ progress }) => {
    // Adapt the logic here
    const angle = 360 * progress
    
    return `radial-gradient(white 50%, transparent 51%),
      conic-gradient(transparent 0deg ${angle}deg, gainsboro ${angle}deg 360deg),
      conic-gradient(orange 0deg, yellow 90deg, lightgreen 180deg, green)`
  },
  borderRadius: '50%',
  width: '120px',
  height: '120px'
})

export default CircleProgressBar